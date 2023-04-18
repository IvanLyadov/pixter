import { signUp, logIn, getPosts, getStories, createPost } from "./api";
import store from "../store/store";

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
      console.log("response login", response);
      if (response.status === 200) {
        store.dispatch({
          type: "SHOW",
          message: "Sucessful login",
        });
        return response.json();
      }
    })
    .then((result) => {
      localStorage.setItem("authToken", result.token);
      window.location.href = "/";
    })
    .catch((error) => {
      console.log("log error", error);
    });
};

export const getPostsAction = () => {
  getPosts()
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then((result) => {
      store.dispatch({
        type: "UPDATE_POSTS",
        posts: result.posts,
      });
    })
    .catch((error) => {
      console.log("post error", error);
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
    .then((response) => {
      if (response.status === 200) {
        store.dispatch({
          type: "SHOW",
          message: "New post has been created",
        });
        window.location.href = "/";
        return response.json();
      }
    })
    .catch((error) => {
      console.log("post error", error);
    });
};
