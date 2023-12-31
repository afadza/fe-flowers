import React from "react";
import { IoCartOutline } from "react-icons/io5";
function CardComponent({ flower }) {
  const formatPrice = (price) => {
    return parseFloat(price).toLocaleString("id-ID", {
      maximumFractionDigits: 2,
    });
  };
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
      <div className="card-prouct w-full h-full md:w-52 hover:shadow-lg hover:cursor-pointer rounded-xl bg-white hover:bg-gray-50 border-2">
        <div className="w-full h-32 p-2">
          <img
            className="rounded-t-lg w-full h-full object-contain"
            src={flower.image}
            alt="product image"
          />
        </div>
        <div className="p-2 bg-pink-950 text-white rounded-br-xl rounded-bl-xl">
          <div className="flex items-center gap-2">
            <div className="flex flex-wrap">
              {flower.category.map((category, index) => (
                <p
                  key={index}
                  className="text-[8px] mr-1.5  text-left rounded-md text-gray-400"
                >
                  #{category}
                </p>
              ))}
            </div>
          </div>
          <div className="flex items-center w-full gap-4 mt-2">
            <h5 className="text-md font-bold tracking-tight ">{flower.name}</h5>
          </div>
          <div className="flex items-center">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              {renderRatingStars()}
            </div>
          </div>

          <div className="flex items-center justify-between gap-10 mt-4">
            <span className="text-sm font-bold ">
              Rp. {formatPrice(flower.price)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
