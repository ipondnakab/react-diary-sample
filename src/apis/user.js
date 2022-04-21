import axios from "axios";
export const loginWithEmail = async ({email, password}) => {
  const response = await axios.post("/users/login", { email, password });
  return response.data;
};

export const registerWithEmail = async ({email, password}) => {
  const response = await axios.post("/users/signup", { email, password });
  return response.data;
};

export const logout = async () => {
  const response = await axios.post("/users/logout");
  return response.data;
};
