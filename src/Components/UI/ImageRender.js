import React from "react";
import hear from "../../assets/heart.png";
import { useNavigate } from "react-router-dom";

const ImageRenderer = ({ photo }) => {
  const navigate = useNavigate();

  const handleOnClick = (e) => {
    navigate(`/post/${photo.id}`);
  };

  return (
    <div className="w-[100%] max-w-[500px] mx-auto mb-4 relative cursor-pointer">
      <img
        src={photo.src}
        className="w-[100%]"
        onClick={handleOnClick}
        alt="Author"
      />
      <div className="absolute bottom-[0px] bg-[#ffffffad] w-[100%] h-[30px] flex justify-between px-2 items-center">
        <span className="font-bold">{photo.postName}</span>
        <span className="font-bold flex row">
          <img className="max-w-[20px]" src={hear} alt="Likes" />
          <span className="ml-1 text-[14px]">{photo.liked}</span>
        </span>
      </div>
      <style>{`.not-selected:hover{outline:2px solid #06befa}`}</style>
    </div>
  );
};

export default ImageRenderer;
