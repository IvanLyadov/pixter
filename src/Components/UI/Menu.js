import { Link } from "react-router-dom";

function Menu() {
  return (
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
        <li>
          <Link to="/stories">Stories</Link>
        </li>
        <li>
          <Link to="/">Posts</Link>
        </li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default Menu;
