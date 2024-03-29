import { useEffect } from "react";
import ImageRenderer from "./UI/ImageRender";
import { getPostsAction } from "../api/apiActions";
import { useSelector } from "react-redux";
import Menu from "./UI/Menu";

function Profile() {
  const loggedInUserId = useSelector((state) => {
    return state.user.userId;
  });

  useEffect(() => {
    getPostsAction(loggedInUserId);
  }, [loggedInUserId]);

  const posts = useSelector((state) => {
    return state.posts.posts;
  });

  return (
    <div className="grid grid-cols-[20%_80%]">
      <Menu />
      <div className="mt-4">
        {posts &&
          posts.map((item) => <ImageRenderer key={item.id} photo={item} />)}
      </div>
    </div>
  );
}

export default Profile;
