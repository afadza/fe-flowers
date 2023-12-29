import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  email: "",
  address: "",
  password: "",
  cart: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    AUTH_LOGIN: (_, action) => {
      const payload = action.payload;

      const { id, address, name, email, password, cart } = payload;
      const user = {
        id,
        name,
        email,
        address,
        password,
        cart,
      };

      return user;
    },
    AUTH_LOGOUT: () => {
      localStorage.removeItem("token");
      return initialState;
    },
  },
});
