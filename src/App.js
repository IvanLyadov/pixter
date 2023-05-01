import "./App.css";
import { Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile";
import Post from "./Components/Post";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Guest from "./Components/Guest";
import NotFound from "./Components/NotFound";
import UserStories from "./Components/UserStories";
import { useEffect, useState } from "react";
import store from "./store/store";
import { useNavigate } from "react-router-dom";
import CreatePost from "./Components/CreatePost";
import Settings from "./Components/Settings";
import { setTokenForHttpClient } from "./api/apiActions";

function App() {
  const navigate = useNavigate();
  const [isGuest, setGuest] = useState(true);

  useEffect(() => {
    getToken().then((token) => {
      if (token) {
        store.dispatch({
          type: "UPDATE_TOKEN",
          accessToken: token,
        });
        setTokenForHttpClient(token);
        setGuest(false);
      }
    });
  }, [navigate]);

  useEffect(() => {
    getUserId().then((userId) => {
      console.log("userId", userId);
      if (userId) {
        store.dispatch({
          type: "UPDATE_USERID",
          userId: userId,
        });
      }
    });
  }, [navigate]);

  const getToken = async () => {
    return localStorage.getItem("authToken");
  };

  const getUserId = async () => {
    return localStorage.getItem("userId");
  };

  return (
    <div className="App">
      <Routes>
        {!isGuest && (
          <>
            <Route path="/" element={<Profile />} />
            <Route path="/stories" element={<UserStories />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/guest/:id" element={<Guest />} />
          </>
        )}
        {isGuest && (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
          </>
        )}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
