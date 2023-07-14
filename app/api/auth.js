import client from "./client";

const login = (email, password) => {
  return client.post("/auth", JSON.stringify({ email, password }));
};

const register = (userInfo) => {
  return client.post("/users", JSON.stringify(userInfo));
};
export default {
  login,
  register,
};
