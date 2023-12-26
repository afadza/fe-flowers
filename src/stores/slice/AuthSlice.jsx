import { createSlice } from "@reduxjs/toolkit";

const persistedToken = localStorage.getItem("token");
const initialState = {
  id: "",
  token: persistedToken || "",
  name: "",
  email: "",
  password: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    AUTH_LOGIN: (_, action) => {
      const payload = action.payload;

      const { id, token, name, email, password } = payload;
      const user = {
        id,
        token,
        name,
        email,
        password,
      };

      return user;
    },
    AUTH_LOGOUT: () => {
      localStorage.removeItem("token");
      return initialState;
    },
  },
});
