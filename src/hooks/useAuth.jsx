import React from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { AUTH_LOGIN, AUTH_LOGOUT } from "../stores/RootReducer";
import { useNavigate } from "react-router-dom";

function useAuth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleClick() {
    try {
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem("token", result.user.accessToken);
      dispatch(
        AUTH_LOGIN({
          id: result.user.uid,
          token: result.user.accessToken,
          name: result.user.displayName,
          email: result.user.email,
          password: result.user.uid,
        })
      );
      if (result) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error autentikasi:", error);
    }
  }

  async function handleLogout() {
    try {
      await auth.signOut();
      dispatch(AUTH_LOGOUT());
      console.log("user logout");
      navigate("/login");
    } catch (error) {
      console.error("Error logout:", error);
    }
  }

  return { handleClick, handleLogout };
}

export default useAuth;
