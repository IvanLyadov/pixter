const API_URL = "https://localhost:44391";

export const logIn = () => {
  const params = {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      mode: "no-cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
    },
    data: {
      email: "test@test.com",
      password: "qwerty",
    },
  };

  fetch(`${API_URL}/auth/login`, params)
    .then((response) => {
      console.log("response", response);
    })
    .catch((error) => {
      console.log("signin error", error);
    });
};

/**
 * User registration api
 * @param email
 * @param password
 * @returns Promise with user data.
 */
export const signUp = (email, password) => {
  const params = {
    method: "POST",
    headers: {},
    data: {
      email,
      password,
    },
  };

  return fetch(`${API_URL}/auth/register`, params);
};
