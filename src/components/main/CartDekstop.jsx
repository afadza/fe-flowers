import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Tabs } from "flowbite-react";
import useCart from "../../hooks/useCart";

function CartDekstop() {
  const {
    cart,
    cartOrder,
    checkedItems,
    checkout,
    handleCheckboxChange,
    calculateTotalPrice,
    formatPrice,
  } = useCart();

  return (
    <div className="w-full">
      {/* drawer init and toggle */}
      <div className="text-center">
        <button
          className=" "
          type="button"
          data-drawer-target="drawer-right-example"
          data-drawer-show="drawer-right-example"
          data-drawer-placement="right"
          aria-controls="drawer-right-example"
        >
          <p className="text-[10px] bg-blue-700 rounded-full text-center text-white -mb-[10px] -ml-[5px] w-[20px]">
            {cart.length}
          </p>
          <IoCartOutline className="md:w-8 md:h-8 w-5 h-5" />
        </button>
      </div>
      {/* drawer component */}
      <div
        id="drawer-right-example"
        className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800"
        tabIndex={-1}
        aria-labelledby="drawer-right-label"
      >
        <h5
          id="drawer-right-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          <svg
            className="w-4 h-4 me-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          Your cart
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-right-example"
          aria-controls="drawer-right-example"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
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
          <span className="sr-only">Close menu</span>
        </button>
        <div className="">
          <Tabs aria-label="Tabs with underline" style="underline">
            <Tabs.Item active title={`Cart (${cart.length})`}>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Select your choice:
              </p>
              <ul className="space-y-4 mb-12">
                {cart.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <label
                      htmlFor={`cart-${index}`}
                      className="w-full cursor-pointer max-w-md px-2 flex items-center gap-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                    >
                      <div>
                        <input
                          type="checkbox"
                          id={`cart-${index}`}
                          className="cursor-pointer rounded-md"
                          onChange={() => handleCheckboxChange(item.id)}
                          checked={checkedItems[item.id] || false}
                        />
                      </div>
                      <div className="flow-root w-full">
                        <ul
                          role="list"
                          className="divide-y divide-gray-200 dark:divide-gray-700 w-full"
                        >
                          <li className="py-3 sm:py-4 w-full">
                            <div className="flex items-center w-full">
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
                    </label>
                  </li>
                ))}
              </ul>
              <div className="fixed bottom-10 p-2 bg-white w-full -ml-4">
                <p>Total : {formatPrice(calculateTotalPrice())}</p>
              </div>
            </Tabs.Item>
            <Tabs.Item title={`Order (${cartOrder.length})`}>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Pesanan sedang dikirim :
              </p>
              <ul className="space-y-4 mb-4">
                {cartOrder.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
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
                                <p className="text-[8px] text-gray-500 truncate dark:text-gray-400">
                                  status :{" "}
                                  {item.delivered === true
                                    ? "Pesanan sedang dikirim"
                                    : "Pesanan sedang diproses"}
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
            </Tabs.Item>
            <Tabs.Item title="Accepted">
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Pesanan sedang dikirim :
              </p>
              <ul className="space-y-4 mb-4">
                {cartOrder.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
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
            </Tabs.Item>
          </Tabs>

          <div className="fixed bottom-0 right-0 w-full flex flex-col justify-end items-end">
            <button
              type="button"
              onClick={checkout}
              className="text-white inline-flex max-w-xs w-full justify-center bg-blue-700 hover:bg-blue-800 font-medium  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartDekstop;
