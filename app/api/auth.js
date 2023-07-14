import client from "./client";

const login = (email, password) => {
  return client.post("/auth", JSON.stringify({ email, password }));
};

const register = (name, email, password) => {
  const data = {
    name: name,
    email: email,
    password: password,
  };

  console.log(JSON.stringify(data));
  return client.post("/users", JSON.stringify(data));
};
export default {
  login,
  register,
};
