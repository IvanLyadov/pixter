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
    console.log(filterPost, "filterPost");
    setPost(filterPost);
  }, []);

  console.log(params);
  return (
    <div className="App">
      {post && (
        <>
          <div>{post.postName}</div>
          <img src={post.src} alt={post.postName} />
        </>
      )}
    </div>
  );
}

export default Post;
