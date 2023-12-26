import React from "react";
import { IoCartOutline } from "react-icons/io5";

function CardHomeComponent({ flower }) {
  const renderRatingStars = () => {
    const stars = [];
    for (let i = 0; i < flower.rating; i++) {
      stars.push(
        <svg
          key={i}
          className="w-2 h-2 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full h-full md:w-52 hover:bg-gray-100 hover:cursor-pointer p-1 rounded-xl">
        <a href="#">
          <img
            className=" rounded-t-lg w-full h-48 object-cover"
            src={flower.image}
            alt="product image"
          />
        </a>
        <div className="pb-1">
          <a href="#" className="flex items-center w-full gap-4 mt-2">
            <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
              {flower.name}
            </h5>
            <div className="flex items-center">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {renderRatingStars()}
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {flower.rating}
              </span>
            </div>
          </a>
          <div className="flex items-center h-10 gap-2">
            <div className="flex flex-wrap">
              {flower.category.map((category, index) => (
                <p
                  key={index}
                  className="text-[10px] mr-1.5  text-leftrounded-md text-gray-400"
                >
                  #{category}
                </p>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between gap-10">
            <span className="text-md font-bold text-gray-900 dark:text-white">
              Rp.{flower.price}
            </span>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <IoCartOutline />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardHomeComponent;
