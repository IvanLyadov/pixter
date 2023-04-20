export const cleareUserSorageCridentials = () => {
  localStorage.clear("authToken");
  localStorage.clear("userId");
};
