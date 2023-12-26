import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function FooterComponent() {
  return (
    <div className="w-full bg-blue-800 h-full items-center flex flex-col gap-20 justify-center text-white p-6">
      <div className="flex w-full justify-between flex-col md:flex-row h-full text-center md:text-left gap-10">
        <div>
          <div>
            <p className="font-bold text-[15px]">Subcribe</p>
          </div>
          <div>
            <p className="text-[10px]">Get your 10% of your first order</p>
          </div>
        </div>
        <div>
          <div>
            <p className="font-bold text-[15px]">Support</p>
          </div>
          <div>
            <p className="text-[10px]">Jl. Elang, Bintaro, Tangsel</p>
            <p className="text-[10px]">flowers.hk@mail.com</p>
            <p className="text-[10px]">087652028472</p>
          </div>
        </div>
        <div>
          <div>
            <p className="font-bold text-[15px]">Account</p>
          </div>
          <div>
            <p className="text-[10px]">My account</p>
            <p className="text-[10px]">Cart</p>
            <p className="text-[10px]">Wishlist</p>
          </div>
        </div>
        <div>
          <div>
            <p className="font-bold text-[15px]">Quick Link</p>
          </div>
          <div>
            <p className="text-[10px]">Privacy Policy</p>
            <p className="text-[10px]">Terms of Use</p>
            <p className="text-[10px]">FAQ</p>
          </div>
        </div>
        <div>
          <div>
            <p className="font-bold text-[15px]">Download App</p>
          </div>
          <div>
            <p className="text-[10px]">Get free app on Google Play</p>
            <img src="" alt="" />
            <div className="flex gap-2 mt-4 items-center w-full justify-center md:justify-start">
              <FaInstagram />
              <FaGooglePlay />
              <FaFacebook />
              <FaXTwitter />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[10px]">&copy; 2023 flowers harapan keluarga</p>
      </div>
    </div>
  );
}

export default FooterComponent;
