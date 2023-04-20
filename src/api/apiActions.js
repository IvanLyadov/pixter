import {
  signUp,
  logIn,
  getPosts,
  getStories,
  createPost,
  likePost,
} from "./api";
import store from "../store/store";
import http from "axios";
import { cleareUserSorageCridentials } from "../helpers/helper";

export const setTokenForHttpClient = (token) => {
  http.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const signUpAction = (email, password) => {
  signUp(email, password)
    .then((response) => {
      if (response === 200) {
        store.dispatch({
          type: "SHOW",
          message: "Your email has been registered!",
        });
      }
    })
    .catch((error) => {
      console.log("signin error", error);
    });
};

export const logInAction = (email, password) => {
  logIn(email, password)
    .then((response) => {
      if (response.status === 200) {
        store.dispatch({
          type: "SHOW",
          message: "Sucessful login",
        });
        return response.json();
      }
    })
    .then((result) => {
      localStorage.setItem("authToken", result.value.accessToken);
      localStorage.setItem("userId", result.value.userId);
      window.location.href = "/";
    })
    .catch((error) => {
      console.log("log error", error);
    });
};

export const getPostsAction = (userId) => {
  getPosts(userId)
    // .then((response) => {
    //   if (response.status === 200) {
    //     return response.json();
    //   }
    // })
    .then((result) => {
      store.dispatch({
        type: "UPDATE_POSTS",
        posts: result,
      });
    })
    .catch((error) => {
      console.log("post error", error);

      if (error.response.status === 401) {
        cleareUserSorageCridentials();
        window.location.href = "/";
      }
    });
};

export const getStoriesAction = () => {
  getStories()
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then((result) => {
      store.dispatch({
        type: "UPDATE_STORIES",
        stories: result.stories,
      });
    })
    .catch((error) => {
      console.log("post error", error);
    });
};

export const createNewPostAction = (formData) => {
  createPost(formData)
    .then(() => {
      store.dispatch({
        type: "SHOW",
        message: "New post has been created",
      });
      window.location.href = "/";
    })
    .catch((error) => {
      console.log("post error", error);
    });
};

export const logOutAction = () => {
  cleareUserSorageCridentials();
  window.location.href = "/";
};

export const likePostAction = (postId, userId) => {
  likePost(postId, userId)
    .then((response) => {
      const statePosts = store.getState().posts.posts.map((item) => {
        const post = item;
        if (post.id === response.id) {
          post.likes = response.likes;
        }

        return post;
      });

      store.dispatch({
        type: "UPDATE_POSTS",
        posts: statePosts,
      });
    })
    .catch((error) => {
      console.log("like error", error);
    });
};
