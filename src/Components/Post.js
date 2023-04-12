import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Post() {
  const params = useParams();
  const posts = useSelector((state) => {
    return state.posts.posts;
  });
  const [post, setPost] = useState(null);

  useEffect(() => {
    const [filterPost] = posts.filter((item) => item.id === params.id);
    setPost(filterPost);
  }, [params.id, posts]);

  return (
    <div className="mx-auto mt-5">
      {post && (
        <div className="mx-auto align-center w-[100%] max-w-[500px] bg-white">
          <img src={post.src} alt={post.postName} />

          <div className=" p-2">
            <div>{post.postName}</div>
            <div>{post.description}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;
