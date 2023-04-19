import React from "react";
import hear from "../../assets/heart.png";
import { useNavigate } from "react-router-dom";
import { likePost } from "../../api/api";
import { useSelector } from "react-redux";

const ImageRenderer = ({ photo }) => {
  const navigate = useNavigate();
  const loggedInUserId = useSelector((state) => {
    return state.user.userId;
  });

  const handleOnClick = (e) => {
    navigate(`/post/${photo.id}`);
  };

  const img = document.getElementById(`img${photo.id}`);
  if(img){
    img.src = "data:image/jpg;base64," + photo.photo;
  }

  return (
    <div className="w-[100%] max-w-[500px] mx-auto mb-4 relative cursor-pointer">
      <img
        id={`img${photo.id}`}
        className="w-[100%]"
        onClick={handleOnClick}
        alt="Author"
      />
      <div className="absolute bottom-[0px] bg-[#ffffffad] w-[100%] h-[30px] flex justify-between px-2 items-center">
        <span className="font-bold">{photo.name}</span>
        <span className="font-bold flex row">
          <img className="max-w-[20px]" src={hear} alt="Likes" onClick={() => likePost(photo.id, loggedInUserId)}/>
          <span className="ml-1 text-[14px]">{photo.likes.length}</span>
        </span>
      </div>
      <style>{`.not-selected:hover{outline:2px solid #06befa}`}</style>
    </div>
  );
};

export default ImageRenderer;
