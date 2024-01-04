import React, { ChangeEvent, useState } from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { AUTH_LOGIN, AUTH_LOGOUT } from "../stores/RootReducer";
import { useNavigate } from "react-router-dom";
import { API } from "../libs/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useAuth() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [registered, setRegistered] = useState(false);
  const [token, setToken] = useState("");

  function handleChange(e) {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  }

  const { mutate, isPending, error } = useMutation({
    mutationFn: async () => {
      await API.post("/customer", registerForm);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customer"] });
      setRegistered(true);
    },
    onError: (error) => {
      console.log(error.response.data.message);
    },
  });

  const { mutate: mutateLogin, error: errorLogin } = useMutation({
    mutationFn: async () => {
      const response = await API.post("/customer/login", {
        email: registerForm.email,
        password: registerForm.password,
      });
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["customer"] });
      if (registerForm.email === "admin@mail.com") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    },
    onError: (error) => {
      console.log(error.response.data.message);
    },
  });

  function jumpToLogin() {
    setRegistered(!registered);
  }

  async function handleLogout() {
    try {
      dispatch(AUTH_LOGOUT());
      setRegistered(false);
      console.log("user logout");
      navigate("/login");
    } catch (error) {
      console.error("Error logout:", error);
    }
  }

  return {
    handleGoogleSignIn,
    handleLogout,
    handleChange,
    mutate,
    mutateLogin,
    jumpToLogin,
    isPending,
    registerForm,
    error,
    errorLogin,
    registered,
  };
}

export default useAuth;
