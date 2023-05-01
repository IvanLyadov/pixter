import { useEffect, useState } from "react";
import ImageRenderer from "./UI/ImageRender";
import { getUser, getPosts } from "../api/api";
import Menu from "./UI/Menu";
import { useParams } from "react-router-dom";
import userIcon from "../assets/user-icon.jpg";

function Profile() {
  const params = useParams();
  const [user, setUser] = useState({});
  const [userPosts, setPosts] = useState([]);

  useEffect(() => {
    getUser(params.id).then((userProfile) => {
      setUser(userProfile);

      getPosts(userProfile.id).then((posts) => {
        console.log("posts", posts);
        setPosts(posts);
      });
    });
  }, [params.id]);

  return (
    <div className="grid grid-cols-[20%_80%]">
      <Menu />
      <div className="mt-4 grid grid-cols-[100%]">
        <div>
          <div className="bg-white w-full pt-4 text-left p-4 max-h-[300px] max-w-[500px] m-auto mb-3 flex flex-row items-center">
            <div className="rounded-full overflow-hidden object-contain max-w-[100px] ">
              {user.avatar && (
                <img
                  alt="gallery"
                  className="w-[100%]"
                  src={`data:image/jpeg;base64,${user.avatar}`}
                />
              )}

              {!user.avatar && (
                <img className="w-[100%]" src={userIcon} alt="User Name" />
              )}
            </div>
            <span className="ml-3 font-bold">{user.nickName}</span>
          </div>
          {userPosts &&
            userPosts.map((item) => (
              <ImageRenderer key={item.id} photo={item} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
