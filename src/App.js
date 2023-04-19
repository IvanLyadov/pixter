import "./App.css";
import { Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile";
import Post from "./Components/Post";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import NotFound from "./Components/NotFound";
import Stories from "./Components/Stories";
import { useEffect, useState } from "react";
import store from "./store/store";
import { useNavigate } from "react-router-dom";
import CreatePost from "./Components/CreatePost";
import Settings from "./Components/Settings";

function App() {
  const navigate = useNavigate();
  const [isGuest, setGuest] = useState(true);

  useEffect(() => {
    getToken().then((token) => {
      const userData = JSON.parse(token);
      if (userData && userData.accessToken) {
        store.dispatch({
          type: "UPDATE_TOKEN",
          accessToken: userData.accessToken,
          userId: userData.userId,
        });

        setGuest(false);
      }
    });
  }, [navigate]);

  const getToken = async () => {
    return localStorage.getItem("authToken");
  };

  return (
    <div className="App">
      <Routes>
        {!isGuest && (
          <>
            <Route path="/" element={<Profile />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/settings" element={<Settings />} />
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
