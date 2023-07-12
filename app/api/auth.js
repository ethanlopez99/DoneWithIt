import client from "./client";

const login = (email, password) => {
  return client.post("/auth", JSON.stringify({ email, password }));
};
export default {
  login,
};
