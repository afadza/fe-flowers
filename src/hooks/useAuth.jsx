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

  const { mutate: mutateLogin } = useMutation({
    mutationFn: async () => {
      const response = await API.post("/customer/login", {
        email: registerForm.email,
        password: registerForm.password,
      });
      setToken(response.data.token);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["customer"] });
      localStorage.setItem("token", token);
      const response = await API.get("/customer/check", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(
        AUTH_LOGIN({
          ...response.data.customer,
          cart: response.data.cartUser,
        })
      );
      if (response.data.customer.email === "admin@mail.com") {
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
    setRegistered(true);
  }
  async function handleGoogleSignIn() {
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
    registered,
  };
}

export default useAuth;
