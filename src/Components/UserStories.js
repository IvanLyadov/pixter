import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getStoriesAction } from "../api/apiActions";
// import { useSelector } from "react-redux";
import Menu from "./UI/Menu";
// import hearOutline from "../assets/heart_outline.png";

function UserStories() {
  //   const [storiesState, setStoriesState] = useState([]);
  useEffect(() => {
    getStoriesAction();
  }, []);

  // const stories = useSelector((state) => {
  //   return state.stories.stories;
  // });

  const stories = [
    {
      id: "1",
      src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp",
    },
    {
      id: "2",
      src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
    },
    {
      id: "3",
      src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
    },
    {
      id: "4",
      src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp",
    },
    {
      id: "5",
      src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    },
    {
      id: "6",
      src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
    },
    {
      id: "7",
      src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp",
    },
    {
      id: "8",
      src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(78).webp",
    },
    {
      id: "9",
      src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(79).webp",
    },
    {
      id: "10",
      src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(80).webp",
    },
    {
      id: "11",
      src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(80).webp",
    },
    {
      id: "12",
      src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(81).webp",
    },
  ];

  const storiesTemplate = stories.map((item) => (
    <div className="flex w-1/3 flex-wrap cursor-pointer" key={item.id}>
      <Link to={`/guest/${item.id}`}>
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src={item.src}
          />
        </div>
      </Link>
    </div>
  ));

  return (
    <div className="grid grid-cols-[20%_80%]">
      <Menu />
      <div>
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
          <div className="-m-1 flex flex-wrap md:-m-2">{storiesTemplate}</div>
        </div>
      </div>
    </div>
  );
}

export default UserStories;
