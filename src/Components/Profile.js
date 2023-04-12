import { Link } from "react-router-dom";
import { useEffect } from "react";
// import Gallery from "react-photo-gallery";
import ImageRenderer from "./UI/ImageRender";
import { getPostsAction } from "../api/apiActions";
import { useSelector } from "react-redux";
import Menu from "./UI/Menu";

function Profile() {
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
    <div className="grid grid-cols-[20%_80%]">
      <Menu />
      <div className="mt-4">
        {/* <Gallery photos={posts} renderImage={imageRenderer} />; */}
        {posts.map((item) => (
          <ImageRenderer key={item.id} photo={item} />
        ))}
      </div>
    </div>
  );
}

export default Profile;
