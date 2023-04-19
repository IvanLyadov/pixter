// import { createServer, JSONAPISerializer, Response } from "miragejs";
// import { posts } from "../mockup/posts";
// import { stories } from "../mockup/stories";
const API_URL = "https://localhost:44391";

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

export const getPosts = (userId, accessToken) => {
  const params = {
    method: "GET",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return fetch(`${API_URL}/posts/${userId}`, params);
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

export const createPost = (formData, accessToken) => {
  return fetch(`${API_URL}/posts`, {
    method: "POST",
    body: formData,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
