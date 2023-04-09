import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Post from "./Components/Post";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/post/:id" element={<Post />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
