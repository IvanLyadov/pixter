import React from "react";
import hear from "../../assets/heart.png";
import { useNavigate } from "react-router-dom";
import { likePostAction } from "../../api/apiActions";
import { useSelector } from "react-redux";
import pencilOutline from "../../assets/pencil-outline.svg";
import chevronDown from "../../assets/chevron-down-outline.svg";


const ImageRenderer = ({ photo }) => {
  const navigate = useNavigate();
  const loggedInUserId = useSelector((state) => {
    return state.user.userId;
  });

  const handleOnClick = (e) => {
    navigate(`/post/${photo.id}`);
  };

  return (
    <div className="w-[100%] max-w-[500px] mx-auto mb-4 relative cursor-pointer">
      <img
        id={`img${photo.id}`}
        className="w-[100%]"
        onClick={handleOnClick}
        alt="Author"
        src={`data:image/jpg;base64,${photo.photo}`}
      />
      <div className="absolute bottom-[0px] bg-[#ffffffad] w-[100%] h-[30px] flex justify-between px-2 items-center">
        <span className="font-bold">{photo.name}</span>
        <span className="font-bold flex row">
          <div className="flex mr-5">
            <img className="w-[20px] h-[20px] " src={chevronDown} />
          </div>
          <img
            className="max-w-[20px]"
            src={hear}
            alt="Likes"
            onClick={() => likePostAction(photo.id, loggedInUserId)}
          />
          <span className="ml-1 text-[14px]">{photo.likes.length}</span>
        </span>
      </div>
      <style>{`.not-selected:hover{outline:2px solid #06befa}`}</style>

      <div className="absolute flex w-full flex-col">
        <div className="bg-white pt-1 pb-5 px-5">
          <div className="border-b-2 text-left mb-5">Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </div>
          <div className="border-b-2 text-left mb-5">Lorem ipsum</div>
        </div>
        <textarea name="comment" className="p-2 border-2" />
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add comment
        </button>
      </div>
    </div>
  );
};

export default ImageRenderer;
