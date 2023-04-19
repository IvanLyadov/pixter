import { Link } from "react-router-dom";
import { useState } from "react";
import Menu from "./UI/Menu";
import { createNewPostAction } from "../api/apiActions";

function Settings() {
  const [login, setLogin] = useState("John Doe");
  const [password, setPassword] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  const fileHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("password", password);
    formData.append("login", login);

    createNewPostAction(formData);
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
            <h3 className="text-black">User settings</h3>

            <div className="mb-4 text-left">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Login
              </label>
              <input
                name="login"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="login"
                type="text"
                placeholder="Login"
                value={login}
                onChange={(event) => setLogin(event.target.value)}
              />
            </div>

            <div className="mb-4 text-left">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                name="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="mb-4 text-left flex row justify-between items-center">
              <div className="rounded-full overflow-hidden object-contain max-w-[100px]">
                {!selectedFile && (
                  <img
                    className="w-[100%]"
                    src="http://via.placeholder.com/100x100"
                    alt="User Name"
                  />
                )}

                {selectedFile && (
                  <img
                    className="w-[100%]"
                    src={URL.createObjectURL(selectedFile)}
                    alt="file"
                  />
                )}
              </div>
              <div>
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
              </div>
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

export default Settings;
