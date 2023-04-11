import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoriesAction } from "../api/apiActions";
import { useSelector } from "react-redux";
import Menu from "./UI/Menu";
import hear from "../assets/heart.png";
import hearOutline from "../assets/heart_outline.png";

function Profile() {
  //   const [storiesState, setStoriesState] = useState([]);
  useEffect(() => {
    getStoriesAction();
  }, []);

  const stories = useSelector((state) => {
    return state.stories.stories;
  });

  const storiesTemplate = stories.map((item) => (
    <div className="max-w-[600px] mx-auto mb-4 bg-white rounded-lg overflow-hidden mt-4">
      <div className="relative">
        <Link to="/">
          <div
            title={item.autor}
            className="absolute left-1 top-1 rounded-full overflow-hidden   mx-auto"
          >
            <img
              className="w-[100%] object-cover max-w-[80px] h-[80px]"
              src={item.avatar}
              alt="A"
            />
          </div>
        </Link>
        <img src={item.src} alt={item.title} />
      </div>

      <div className="p-4 font-bold flex row justify-between">
        <h3 className="">{item.title}</h3>

        <span className="flex row">
          <img className="max-w-[20px]" src={hearOutline} alt="Likes" />
          <span className="ml-1">{item.liked}</span>
        </span>
      </div>
    </div>
  ));

  return (
    <div className="grid grid-cols-[20%_80%]">
      <Menu />
      <div>{storiesTemplate}</div>
    </div>
  );
}

export default Profile;
