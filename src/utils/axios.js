import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";

const customInstance = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

customInstance.interceptors.request.use((config) => {
  const user = getUserFromLocalStorage();
  if (user) {
    config.headers["Authorization"] = `Bearer ${user.token}`;
  }
  return config;
});

export default customInstance;
