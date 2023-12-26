import React from "react";
import NavbarComponent from "../navbar/NavbarComponent";
import LoginForm from "./components/LoginForm";
import FooterComponent from "../home/components/FooterComponent";

function LoginComponent() {
  return (
    <div className="md:w-[80%] w-full h-full flex flex-col justify-center items-center">
      <NavbarComponent />
      <div className="w-full h-screen md:flex justify-between hidden">
        <div className="bg-gray100 w-full h-full py-10">
          <img
            src="../../../public/assets/images/freya-1.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" w-full h-full justify-center items-center">
          <LoginForm />
        </div>
      </div>
      <div className="w-full h-screen md:hidden">
        <LoginForm />
      </div>
      <FooterComponent />
    </div>
  );
}

export default LoginComponent;
