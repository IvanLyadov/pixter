import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Gallery from "react-photo-gallery";
import { logInAction } from "../api/apiActions";
import ImageRenderer from "./UI/ImageRender";
import { getPostsAction } from "../api/apiActions";
import { useSelector } from "react-redux";

function Profile() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    getPostsAction();
  }, []);

  const posts = useSelector((state) => {
    return state.posts.posts;
  });

  const imageRenderer = ({ index, left, top, key, photo }) => (
    <ImageRenderer
      selected={false ? true : false}
      key={key}
      margin={"2px"}
      index={index}
      photo={photo}
      left={left}
      top={top}
    />
  );

  return (
    <div className="App">
      <div className="grid grid-cols-[20%_76%] gap-4">
        <div className="w-[100%] max-w-[200px] min-h-[100vh] p-3 bg-white">
          <div className="rounded-full overflow-hidden object-contain max-w-[100px] mx-auto">
            <img
              className="w-[100%]"
              src="http://via.placeholder.com/100x100"
              alt="User Name"
            />
          </div>
          <div className="font-bold">John Doe</div>
          <ul className="mt-3 text-left ml-2">
            <li>Posts</li>
            <li>Pictures</li>
            <li>Settings</li>
          </ul>
        </div>
        <div>
          <Gallery photos={posts} renderImage={imageRenderer} />;
        </div>
      </div>
    </div>
  );
}

export default Profile;
