import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../api/api";

function Menu() {
  const [user, setUser] = useState("");

  const loggedInUserId = useSelector((state) => {
    return state.user.userId;
  });

  useEffect(() => {
    getUser(loggedInUserId)
    .then((res) => {
      setUser(res);
    })
  },[loggedInUserId]);

  return (
    <div className="w-[100%] max-w-[200px] min-h-[100vh] p-3 bg-white">
      <div className="rounded-full overflow-hidden object-contain max-w-[100px] mx-auto">
        <img
          className="w-[100%]"
          src="http://via.placeholder.com/100x100"
          alt="User Name"
        />
      </div>
      <div className="font-bold">{user.nickName}</div>
      <ul className="mt-3 text-left ml-2">
        <li>
          <Link to="/stories">Stories</Link>
        </li>
        <li>
          <Link to="/">Posts</Link>
        </li>
        <li>
          <Link to="/create">Create post</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
