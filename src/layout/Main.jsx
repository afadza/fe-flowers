import React from "react";
import NavbarComponent from "../components/navbar/NavbarComponent";
import FooterComponent from "../components/home/components/FooterComponent";
import CartComponent from "../components/main/CartComponent";

function Main({ children }) {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="fixed bottom-5 right-5 z-50 bg-white w-10 h-10 hover:bg-neutral-300 rounded-full block shadow-md">
        <CartComponent />
      </div>
      <div className="md:w-[65%] w-full h-full">
        <NavbarComponent />
      </div>
      <div className="w-full flex justify-center items-center">{children}</div>
      <div className="md:w-[65%] w-full h-full">
        <FooterComponent />
      </div>
    </div>
  );
}

export default Main;
