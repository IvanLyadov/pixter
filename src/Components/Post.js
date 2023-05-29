import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getPostByID } from "../api/api";
import emo from "../assets/happy-outline.svg";
import EmojiPicker from 'emoji-picker-react';
import { postComment, getComments } from "../api/api";

function Post() {
  const [commentPanel, setCommentPanel] = useState(true);
  const [usersComments, setUsersComments] = useState([]);
  const [comment, setComment] = useState('');
  const [emoji, setEmoji] = useState(false);
  const loggedInUserId = useSelector((state) => {
    return state.user.userId;
  });

  const params = useParams();
  const posts = useSelector((state) => {
    return state.posts.posts;
  });
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostByID(params.id).then((userPpost) => {
      setPost(userPpost);
    });

    getingComments();
  }, [params.id, posts]);

  const onCommentAdd = () => {
    if (comment) {
      const commentData = {
        userId: loggedInUserId,
        postId: post.id,
        content: comment,
      }
      postComment(commentData).then(() => {
        getingComments();
        setComment('')
      });
    }
  }

  const getingComments = () => {
    getComments(post.id).then((result) => {
      setUsersComments(result);
      setCommentPanel(true);
    })
  }

  const onEmojiClick = (value) => {
    console.log('emo', value.emoji);

    setComment(`${comment}${value.emoji}`);
  }

  return (
    <div className="mx-auto mt-5">
      {post && (
        <>
        {emoji && <div onClick={() => setEmoji(false)} className="absolute bg-transparent top-0 bottom-0 left-0 right-0 h-[150%] z-9"></div>}
        <div className="mx-auto align-center w-[100%] max-w-[500px] bg-white">
          <img
            src={`data:image/jpeg;base64,${post.photo}`}
            alt={post.postName}
          />

          <div className=" p-2">
            <div>{post.name}</div>
            <div>{post.description}</div>
          </div>
        </div>
        
        <div className={`mt-4 relative flex w-full flex-col ${!commentPanel && "hidden"} mx-auto align-center w-[100%] max-w-[500px] justy-center`}>
        <div className="bg-white pt-1 pb-5 px-5">
          {usersComments.map((usersComment) => {
            const authorsComment = usersComment.user.id === post.authorId;

            return (
              <div className="mb-5">
                  <div className={`${authorsComment ? "text-left" : "text-right"}`}>{usersComment.user.nickName}</div>

                  {authorsComment && (
                    <div key={usersComment.id} className={`border-b-2 text-left  rounded-md p-4 bg-[#90a19b] text-white`}>
                      {usersComment.content}
                    </div>
                  )}

                  {!authorsComment && (
                  <div key={usersComment.id} className={`border-b-2 text-left  rounded-md p-4 bg-[#7f7e95] text-white`}>
                    {usersComment.content}
                  </div>
                  )}
              </div>
              )
          })}
        </div>
        <div className="relative w-full">
         <textarea className="w-full p-2 border-2" onChange={(e) => setComment(e.target.value)} value={comment} name="comment" placeholder="Write a comment" />
          <span className="absolute z-10 block bottom-3 right-3" onClick={() => setEmoji(!emoji)}><img className="w-[20px]" src={emo} /></span>
        </div>
        <button 
          onClick={onCommentAdd}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add comment
        </button>
        <div className="absolute right-0 z-10 shadow-xl">
          {emoji && (
            <EmojiPicker className="shadow-xl" searchDisabled={true}  height={500} width={400} onEmojiClick={onEmojiClick} />
          )}
        </div>
      </div>
        </>
        
      )}
    </div>
  );
}

export default Post;
