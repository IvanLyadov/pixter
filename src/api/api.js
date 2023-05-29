import axios from "axios";
// import { createServer, JSONAPISerializer, Response } from "miragejs";
// import { posts } from "../mockup/posts";
// import { stories } from "../mockup/stories";
const API_URL = process.env.REACT_APP_API_URL;

// createServer({
//   routes() {
//     this.urlPrefix = API_URL;

//     this.get("/posts", () => {
//       return {
//         posts: posts,
//       };
//     });

//     this.get("/stories", () => {
//       return {
//         stories: stories,
//       };
//     });

//     this.post("/auth/login", (schema, request) => {
//       return new Response(200, {}, { auth: "sucess", token: "test_token" });
//     });

//     this.passthrough();
//   },
//   serializers: {
//     application: JSONAPISerializer,
//   },
// });

export const logIn = (email, password) => {
  const params = {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  };

  return fetch(`${API_URL}/auth/login`, params);
};

/**
 * User registration api
 * @param email
 * @param password
 * @returns Promise with user data.
 */
export const signUp = (nickName, email, password) => {
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nickName,
      email,
      password,
    }),
  };

  return fetch(`${API_URL}/auth/register`, params);
};

export const getUser = async (userId) => {
  const { data } = await axios.get(`${API_URL}/users/${userId}`);
  return data;
};

export const getPosts = async (userId) => {
  const { data } = await axios.get(`${API_URL}/posts/${userId}`);
  return data;
};

export const getStories = () => {
  const params = {
    method: "GET",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(`${API_URL}/stories`, params);
};

export const createPost = async (formData) => {
  const { data } = await axios.post(`${API_URL}/posts/new`, formData);
  return data;
};

export const likePost = async (postId, userId) => {
  const body = {
    postId: postId,
    userId: userId,
  };
  const { data } = await axios.post(`${API_URL}/posts/like`, body);
  return data;
};

export const updateUserSettings = async (formData) => {
  const { data } = await axios.put(`${API_URL}/users`, formData);
  return data;
};

export const getUsers = async () => {
  const { data } = await axios.get(`${API_URL}/users/`);
  return data;
};

export const getPostByID = async (postId) => {
  const { data } = await axios.get(`${API_URL}/posts/post/${postId}`);
  return data;
};

export const deleteUser = async (userId) => {
  const { data } = await axios.delete(`${API_URL}/users/${userId}`);
  return data;
};

export const postComment = async (formData) => {
  const { data } = await axios.post(`${API_URL}/comments/new`, formData);
  return data;
};

export const getComments = async (postId) => {
  const { data } = await axios.get(`${API_URL}/comments/${postId}`);
  return data;
};
