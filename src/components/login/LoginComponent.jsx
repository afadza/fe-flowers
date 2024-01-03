import React from "react";
import NavbarComponent from "../navbar/NavbarComponent";
import LoginForm from "./components/LoginForm";
import FooterComponent from "../home/components/FooterComponent";

function LoginComponent() {
  return (
    <div className="md:w-[80%] w-full h-full flex flex-col justify-center items-center bg-gray-100">
      <NavbarComponent />
      <div className=" w-full h-full justify-center items-center">
        <LoginForm />
      </div>
      <FooterComponent />
    </div>  
  );
}

export default LoginComponent;
