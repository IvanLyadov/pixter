import { Link } from "react-router-dom";
import { useState } from "react";
import Menu from "./UI/Menu";
import { createNewPostAction } from "../api/apiActions";
import { useSelector } from "react-redux";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const loggedInUserId = useSelector((state) => {
    return state.user.userId;
  });

  const fileHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const auth = useSelector((state) => {
    return state.user;
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("authorId", loggedInUserId);
    formData.append("photo", selectedFile);
    formData.append("description", description);
    formData.append("name", title);

    createNewPostAction(formData, auth.accessToken);
  };

  return (
    <div className="grid grid-cols-[20%_80%]">
      <Menu />
      <div className="flex m-auto w-full">
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
              {selectedFile && (
                <img
                  className="mt-3 mx-auto"
                  src={URL.createObjectURL(selectedFile)}
                  alt="file"
                />
              )}
            </div>

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
