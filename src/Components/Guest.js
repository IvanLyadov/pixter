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
      <div className="mt-4 grid grid-cols-[20%_80%]">
        <div className="bg-white w-full pt-4 text-left p-4 max-h-[300px]">
          <div className="rounded-full overflow-hidden object-contain max-w-[100px]">
            <img
              className="w-[100%]"
              src="http://via.placeholder.com/100x100"
              alt="User Name"
            />
          </div>
          <span>John Doe</span>
        </div>

        {posts &&
          posts.map((item) => <ImageRenderer key={item.id} photo={item} />)}
      </div>
    </div>
  );
}

export default Profile;
