import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./slice/AuthSlice";

export const { AUTH_LOGIN, AUTH_LOGOUT } = authSlice.actions;
export const authReducer = authSlice.reducer;

export const RootReducer = combineReducers({
  auth: authSlice.reducer,
});

export default RootReducer;
