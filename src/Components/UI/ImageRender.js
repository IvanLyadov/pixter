import React, { useEffect, useState } from "react";
import hear from "../../assets/heart.png";
import { useNavigate } from "react-router-dom";
import { likePostAction } from "../../api/apiActions";
import { postComment, getComments } from "../../api/api";
import { useSelector } from "react-redux";
import pencilOutline from "../../assets/pencil-outline.svg";
import chevronDown from "../../assets/chevron-down-outline.svg";
import emo from "../../assets/happy-outline.svg";
import EmojiPicker from 'emoji-picker-react';

const ImageRenderer = ({ photo }) => {
  const [commentPanel, setCommentPanel] = useState(false);
  const [comment, setComment] = useState('');
  const [usersComments, setUsersComments] = useState([]);
  const [emoji, setEmoji] = useState(false);

  const navigate = useNavigate();
  const loggedInUserId = useSelector((state) => {
    return state.user.userId;
  });

  const handleOnClick = (e) => {
    navigate(`/post/${photo.id}`);
  };

  const onCommentAdd = () => {
    if (comment) {
      const commentData = {
        userId: loggedInUserId,
        postId: photo.id,
        content: comment,
      }
      postComment(commentData).then(() => {
        getingComments();
        setComment('')
      });
    }
  }

  const getingComments = () => {
    getComments(photo.id).then((result) => {
      setUsersComments(result);
      setCommentPanel(true);
    })
  }

  const displayCommentPanel = () => {
    if (!commentPanel) {
      getingComments();
    }

    if (commentPanel) {
      setCommentPanel(false);
    }
  }

  const onEmojiClick = (value) => {
    console.log('emo', value.emoji);

    setComment(`${comment}${value.emoji}`);
  }
  
  return (
    <>
    {emoji && <div onClick={() => setEmoji(false)} className="absolute bg-transparent top-0 bottom-0 left-0 right-0 h-[150%] z-9"></div>}
    <div className="w-[100%] max-w-[500px] mx-auto mb-4 relative cursor-pointer">
      <img
        id={`img${photo.id}`}
        className="w-[100%]"
        onClick={handleOnClick}
        alt="Author"
        src={`data:image/jpg;base64,${photo.photo}`}
      />
      <div className="absolute bottom-[0px] bg-[#ffffffad] w-[100%] h-[30px] flex justify-between px-2 items-center">
        <span className="font-bold">{photo.name}</span>
        <span className="font-bold flex row">
          <div className="flex mr-5" onClick={() => displayCommentPanel()}>
            <img className={`w-[20px] h-[20px] ${!commentPanel && "rotate-180"}`} src={chevronDown} />
          </div>
          <img
            className="max-w-[20px]"
            src={hear}
            alt="Likes"
            onClick={() => likePostAction(photo.id, loggedInUserId)}
          />
          <span className="ml-1 text-[14px]">{photo.likes.length}</span>
        </span>
      </div>
      <style>{`.not-selected:hover{outline:2px solid #06befa}`}</style>

      <div className={`absolute flex w-full flex-col ${!commentPanel && "hidden"}`}>
        <div className="bg-white pt-1 pb-5 px-5">
          {usersComments.map((usersComment) => {
            const authorsComment = usersComment.user.id === photo.authorId;

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
    </div></>
  );
};

export default ImageRenderer;
