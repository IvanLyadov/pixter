const API_URL = "https://localhost:44391";

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
