import axios from "axios";

export const API = axios.create({
  baseURL: "https://api-flowers-k1jt.onrender.com/api",
});

export function setAuthToken(token) {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
}
