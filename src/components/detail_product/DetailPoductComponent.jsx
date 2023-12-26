import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import Flowers from "../../mocks/flowers";

function DetailProductComponent() {
  const { id } = useParams();
  const flower = Flowers.find((item) => item.id === parseInt(id, 10));
  const [quantity, setQuantity] = React.useState(1);
  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  function incrementQuantity() {
    setQuantity(quantity + 1);
  }

  if (!flower) {
    return <div>Flower not found</div>;
  }
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
    <div className="w-full md:w-[60%] flex flex-col h-screen p-4">
      <div className="w-full ">
        <img
          src={flower.image}
          alt=""
          className="w-full h-48 md:h-64 object-cover rounded-md"
        />
      </div>
      <div className="w-full p-4 flex gap-4">
        <p className="text-2xl">{flower.name}</p>
        <div className="flex items-center border border-gray-300 rounded-md p-2">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {renderRatingStars()}
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {flower.rating}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2 px-4">
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
      <div className="w-full p-4 flex gap-4 md:items-center justify-between items-end">
        <div className="flex flex-col md:flex-row w-full md:gap-6 gap-2 items-start md:items-center">
          <p className="text-xl md:text-md font-bold">Rp. {flower.price}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={decrementQuantity}
              className="border p-2 rounded-full w-8 text-sm h-8 items-center flex justify-center text-center"
            >
              -
            </button>
            <p>{quantity}</p>
            <button
              onClick={incrementQuantity}
              className="border p-2 rounded-full w-8 text-sm h-8 items-center flex justify-center text-center"
            >
              +
            </button>
          </div>
        </div>
        <div className="md:w-[30%] w-full flex justify-center">
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailProductComponent;
