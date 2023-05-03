import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getPostByID } from "../api/api";

function Post() {
  const params = useParams();
  const posts = useSelector((state) => {
    return state.posts.posts;
  });
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostByID(params.id).then((userPpost) => {
      console.log("userPpost", userPpost);
      setPost(userPpost);
    });
  }, [params.id, posts]);

  return (
    <div className="mx-auto mt-5">
      {post && (
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
      )}
    </div>
  );
}

export default Post;
