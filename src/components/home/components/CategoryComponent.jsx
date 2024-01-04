import React from "react";

function ChategoryComponent() {
  return (
    <div className="w-full h-full items-center flex flex-col justify-center">
      <div className="">
        <p className=" font-bold text-center text-md md:text-xl md:mb-10 mb-4 pb-2 border-b-2 text-white">
          Categories
        </p>
      </div>
      <div className="flex py-4 justify-center gap-4 md:gap-8 items-center w-full text-white">
        <div className="md:w-24 w-16 h-16 md:h-24 bg-gray-100 rounded-full border-pink-800 border-4 items-center flex flex-col gap-4">
          <img
            src="https://i.ibb.co/HhKcwh3/flower-1.png"
            alt=""
            className="w-20 "
          />
          <p className="text-[10px] md:text-sm  font-bold text-center">
            Top seller
          </p>
        </div>
        <div className="md:w-24 w-16 h-16 md:h-24 bg-gray-100 rounded-full border-pink-800 border-4 items-center flex flex-col gap-4">
          <img
            src="https://i.ibb.co/HhKcwh3/flower-1.png"
            alt=""
            className="w-20"
          />
          <p className="text-[10px] md:text-sm  font-bold text-center">New</p>
        </div>
        <div className="md:w-24 w-16 h-16 md:h-24 bg-gray-100 rounded-full border-pink-800 border-4 items-center flex flex-col gap-4">
          <img
            src="https://i.ibb.co/HhKcwh3/flower-1.png"
            alt=""
            className="w-20"
          />
          <p className="text-[10px] md:text-sm  font-bold text-center">
            Flashsale
          </p>
        </div>
        <div className="md:w-24 w-16 h-16 md:h-24 bg-gray-100 rounded-full border-pink-800 border-4 items-center flex flex-col gap-4">
          <img
            src="https://i.ibb.co/HhKcwh3/flower-1.png"
            alt=""
            className="w-20"
          />
          <p className="text-[10px] md:text-sm  font-bold text-center">
            Best seller
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChategoryComponent;
