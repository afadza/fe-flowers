import React, { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { motion } from "framer-motion";

function LoginForm() {
  const {
    handleGoogleSignIn,
    handleChange,
    mutate,
    mutateLogin,
    jumpToLogin,
    isPending,
    registerForm,
    error,
    registered,
  } = useAuth();

  return (
    <>
      <div className="w-full h-full flex justify-center items-center md:px-32 px-10">
        {registered ? (
          <div className="w-full">
            <div className="mb-8 w-full">
              <p>Please login</p>
              <p className="text-[10px]">Enter your detail below</p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                mutateLogin();
              }}
              className="max-w-sm mx-auto"
            >
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={registerForm.email}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@mail.com"
                  required
                />
                {error && (
                  <p className="text-red-500 text-sm">
                    {error.response.data.message}
                  </p>
                )}
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={registerForm.password}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        ) : (
          <div className="w-full">
            <div className="mb-8 w-full">
              <p>Create an account</p>
              <p className="text-[10px]">Enter your detail below</p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                mutate();
              }}
              className="max-w-sm mx-auto"
            >
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={registerForm.name}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Jhon doe"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={registerForm.email}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@mail.com"
                  required
                />
                {error && (
                  <p className="text-red-500 text-sm">
                    {error.response.data.message}
                  </p>
                )}
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={registerForm.password}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
                <div className="flex text-sm mt-2">
                  <p className="text-gray-500">Have an account ?</p>
                  <button
                    onClick={jumpToLogin}
                    className="ml-1 text-blue-500 font-bold"
                  >
                    Login
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
            <div className="mt-4">
              <p className="text-sm text-center mb-2">or sign up with </p>
              <button
                onClick={handleGoogleSignIn}
                className="bg-blue-700 hover:bg-blue-900 cursor-pointer w-full text-white py-2 rounded-xl flex items-center justify-center"
              >
                <img
                  src="../../../../public/assets/images/google-logo.png"
                  alt=""
                  className="w-8 h-8"
                />
                <p className="text-[10px]">Sign up with google</p>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default LoginForm;
