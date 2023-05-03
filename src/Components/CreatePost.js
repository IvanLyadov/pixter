import { Link } from "react-router-dom";
import { useState } from "react";
import Menu from "./UI/Menu";
import { createNewPostAction } from "../api/apiActions";
import { useSelector } from "react-redux";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { drawImageProp, filters } from "../helpers/helper";
import "../assets/style/splide.min.css";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [canvasContext, setCanvasContext] = useState(null);
  const [selectedImageContext, setSelectedImageContext] = useState(null);

  const loggedInUserId = useSelector((state) => {
    return state.user.userId;
  });

  const fileHandler = (event) => {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    setCanvasContext(context);

    // create a new image object
    const img = new Image();

    // set the source of the image
    img.src = URL.createObjectURL(event.target.files[0]);
    // img.src = filterImage(URL.createObjectURL(event.target.files[0]));

    // draw the image on the canvas
    img.onload = function () {
      setSelectedImageContext(img);
      canvas.width = img.width;
      canvas.height = img.height;
      // context.drawImage(img, 0, 0);
      var offsetX = 0.5;
      var offsetY = 0.5;
      drawImageProp(
        context,
        img,
        0,
        0,
        img.width,
        img.height,
        offsetX,
        offsetY
      );
    };
    console.log("event.target.files[0]", event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  };

  const applyFilter = (key) => {
    canvasContext.filter = filters[key];

    drawImageProp(
      canvasContext,
      selectedImageContext,
      0,
      0,
      selectedImageContext.width,
      selectedImageContext.height,
      0.5,
      0.5
    );
  };

  const auth = useSelector((state) => {
    return state.user;
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const canvas = document.getElementById("canvas");
    canvas.toBlob(function (blob) {
      const formData = new FormData();
      formData.append("authorId", loggedInUserId);
      formData.append("photo", blob, "image.png");
      formData.append("description", description);
      formData.append("name", title);

      createNewPostAction(formData, auth.accessToken);
    });
  };

  return (
    <div className="grid grid-cols-[20%_80%]">
      <Menu />
      <div className="flex m-auto w-full justify-center">
        <div className="w-full max-w-[80%]">
          <form
            id="form"
            aria-label="form"
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <h3 className="text-black">New Post</h3>
            <div className="mb-4 text-left">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Title
              </label>
              <input
                name="title"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>

            <div className="mb-4 text-left">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <textarea
                name="description"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                type="text"
                placeholder="Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>

            <div className="mb-4 text-left">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Select picture
              </label>
              <input
                type="file"
                id="picture"
                name="picture"
                accept="image/png, image/jpeg"
                onChange={(event) => fileHandler(event)}
              />
              {/* {selectedFile && (
                <img
                  className="mt-3 mx-auto"
                  src={URL.createObjectURL(selectedFile)}
                  alt="file"
                />
               
              )} */}
              <canvas id="canvas" className="object-cover w-full mb-3" />
            </div>
            {selectedFile && (
              <div className="mb-3 mt-[-100px] sticky top-4">
                <Splide
                  options={{
                    perPage: 5,
                    rewind: true,
                    gap: "5px",
                    pagination: false,
                    trimSpace: false,
                    focus: "center",
                  }}
                  aria-label="React Splide Example"
                >
                  {Object.keys(filters).map((keyFilter) => (
                    <SplideSlide className="cursor-pointer">
                      <img
                        onClick={() => applyFilter(keyFilter)}
                        src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                        alt="Normal"
                        style={{ filter: filters[keyFilter] }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
            )}

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={(event) => handleSubmit(event)}
              >
                Create
              </button>
              <Link
                to="/"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Back
              </Link>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2023 Pixter.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
