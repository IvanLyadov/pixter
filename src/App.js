import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Post from "./Components/Post";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import NotFound from "./Components/NotFound";
import Stories from "./Components/Stories";
import { useEffect } from "react";
import store from "./store/store";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    getToken().then((token) => {
      if (token) {
        store.dispatch({
          type: "UPDATE_TOKEN",
          token: token,
        });
      } else {
        navigate("/login");
      }
    });
  }, []);

  const getToken = async () => {
    return localStorage.getItem("authToken");
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
