import React from "react";
import { VscAccount } from "react-icons/vsc";
import useAuth from "../../hooks/useAuth";
import ProfileComponent from "./components/ProfileComponent";
import CartDekstop from "../main/CartDekstop";

function NavbarComponent() {
  const { handleLogout } = useAuth();
  return (
    <nav className=" border-gray-200 bg-pink-950 text-white w-full text-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="../../../public/assets/images/flower-1.png"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Flowers Family
          </span>
        </button>
        <div className="flex md:order-2">
          <div className="flex gap-4 items-center">
            <div className="flex mx-4 gap-4 items-center justify-center">
              <div className="-mt-2 hidden md:block">
                <CartDekstop />
              </div>
              <ProfileComponent />
            </div>
          </div>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div className="flex md:hidden w-full justify-between px-4 mt-4 items-center border-t-2 py-2">
            <p>Account</p>
            <VscAccount size={30} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
