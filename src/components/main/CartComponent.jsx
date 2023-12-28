import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

function CartComponent() {
  const auth = useSelector((state) => state.auth);
  const cart = auth.cart;
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (itemId) => {
    setCheckedItems((prevItems) => ({
      ...prevItems,
      [itemId]: !prevItems[itemId],
    }));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      if (checkedItems[item.id]) {
        totalPrice += parseFloat(item.totalPrice);
      }
    });
    return totalPrice.toFixed(2);
  };

  const formatPrice = (price) => {
    return parseFloat(price).toLocaleString("id-ID", {
      maximumFractionDigits: 2,
    });
  };
  return (
    <div className="w-full h-full items-center flex justify-center">
      <button
        data-modal-target="select-modal"
        data-modal-toggle="select-modal"
        type="button"
      >
        <p className="text-[10px] bg-blue-700 rounded-full text-center text-white -mb-[10px] -ml-[5px] w-[20px]">
          {cart.length}
        </p>
        <IoCartOutline className="md:w-8 md:h-8 w-5 h-5" />
      </button>
      <div
        id="select-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Your Cart
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="select-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-4 md:p-5">
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Select your desired position:
              </p>
              <ul className="space-y-4 mb-4">
                {cart.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div>
                      <input
                        type="checkbox"
                        className="cursor-pointer rounded-md"
                        onChange={() => handleCheckboxChange(item.id)}
                        checked={checkedItems[item.id] || false}
                      />
                    </div>
                    <div className="w-full max-w-md px-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="divide-y divide-gray-200 dark:divide-gray-700"
                        >
                          <li className="py-3 sm:py-4">
                            <div className="flex items-center">
                              <div className="flex-shrink-0">
                                <img
                                  className="w-8 h-8 "
                                  src={item.product.image}
                                  alt="Neil image"
                                />
                              </div>
                              <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                  {item.product.name}
                                </p>
                                <p className="text-[8px] text-gray-500 truncate dark:text-gray-400">
                                  quantity : {item.quantity}
                                </p>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                {formatPrice(item.totalPrice)}
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <p>Total Price: {formatPrice(calculateTotalPrice())}</p>
              <button className="text-white inline-flex w-full justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartComponent;
