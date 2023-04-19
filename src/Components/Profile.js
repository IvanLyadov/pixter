import { useEffect } from "react";
import ImageRenderer from "./UI/ImageRender";
import { getPostsAction } from "../api/apiActions";
import { useSelector } from "react-redux";
import Menu from "./UI/Menu";

function Profile() {
  const auth = useSelector((state) => {
    return state.user;
  });

  useEffect(() => {
    getPostsAction(auth.userId, auth.accessToken);
  }, [auth.accessToken, auth.userId]);

  const posts = useSelector((state) => {
    return state.posts.posts;
  });

  return (
    <div className="grid grid-cols-[20%_80%]">
      <Menu />
      <div className="mt-4">
        {posts.map((item) => (
          <ImageRenderer key={item.id} photo={item} />
        ))}
      </div>
    </div>
  );
}

export default Profile;
