import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Menu from "./UI/Menu";
import { updateUserSettingsAction } from "../api/apiActions";
import { useSelector } from "react-redux";
import { getUser, deleteUser } from "../api/api";
import userIcon from "../assets/user-icon.jpg";
import { cleareUserSorageCridentials } from "../helpers/helper";

function Settings() {
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [avatar, setAvatar] = useState("");

  const fileHandler = (event) => {
    setAvatar(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  };

  const loggedInUserId = useSelector((state) => {
    return state.user.userId;
  });

  useEffect(() => {
    getUser(loggedInUserId).then((res) => {
      setNickName(res.nickName);
      setEmail(res.email);
      setFirstName(res.firstName);
      setLastName(res.lastName);
      setAvatar(res.avatar ? `data:image/jpeg;base64,${res.avatar}` : userIcon);
    });
  }, [loggedInUserId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("Id", loggedInUserId);
    nickName && formData.append("NickName", nickName);
    firstName && formData.append("FirstName", firstName);
    lastName && formData.append("LastName", lastName);
    email && formData.append("Email", email);
    password && formData.append("Password", password);
    selectedFile && formData.append("Avatar", selectedFile);

    updateUserSettingsAction(formData);
  };

  const removeAccount = () => {
    const confirmRemove = window.confirm('Are you shure you want to remove?');
    if (confirmRemove) {
      deleteUser(loggedInUserId).then(() => {
        cleareUserSorageCridentials();
        window.location.href = "/";
      });
    }
  }

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
            <h3 className="text-black">User settings</h3>

            <div className="mb-4 text-left">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Nick name
              </label>
              <input
                name="login"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="login"
                type="text"
                placeholder="Login"
                value={nickName}
                onChange={(event) => setNickName(event.target.value)}
              />
            </div>

            <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
              First Name
            </label>
            <input
              name="FirstName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
              id="FirstName"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />

            <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
              Last Name
            </label>
            <input
              name="LastName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
              id="FirstName"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />

            <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
              Email
            </label>
            <input
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
              id="login"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

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
                {avatar && !selectedFile && (
                  <img className="w-[100%]" src={avatar} alt="User Name" />
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
                  capture
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
                Save
              </button>
              <Link
                to="/"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Back
              </Link>
            </div>
          </form>

        <div className="bg-white pt-1 pb-5 px-5 rounded">
            <h3 className="text-black text-red-400 font-bold">Remove account</h3>
            <div className="flex justify-between">
              <span className="mr-3">Remove account permanently</span>
              <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={removeAccount}
              >
                Remove account
              </button>
            </div>
          </div>

          <p className="text-center text-gray-500 text-xs">
            &copy;2023 Pixter.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Settings;
