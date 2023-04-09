import { signUp, logIn } from "./api";
import store from "../store/store";

export const signUpAction = (email, password) => {
  signUp(email, password)
    .then((response) => {
      console.log("response", response);
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
      }
    })
    .catch((error) => {
      console.log("signin error", error);
    });
};
