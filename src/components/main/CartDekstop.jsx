import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Tabs } from "flowbite-react";
import useCart from "../../hooks/useCart";
import { MdDelete } from "react-icons/md";

function CartDekstop() {
  const {
    cart,
    cartOrder,
    checkedItems,
    checkout,
    handleCheckboxChange,
    cartReceived,
    calculateTotalPrice,
    formatPrice,
    idOrder,
    deleteCart,
    received,
    setIdOrder,
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
          <p className="text-[10px] bg-white rounded-full text-center text-black font-bold -mb-[13px] z-50 -ml-[5px] w-[20px]">
            {cart.length}
          </p>
          <IoCartOutline className="md:w-8 md:h-8 w-5 h-5" />
        </button>
      </div>
      {/* drawer component */}
      <div
        id="drawer-right-example"
        className="fixed top-0 right-0 z-40 h-screen p-2 overflow-y-auto transition-transform translate-x-full bg-white w-[370px] dark:bg-gray-800"
        tabIndex={-1}
        aria-labelledby="drawer-right-label"
      >
        <div className="w-full">
          <Tabs aria-label="Tabs with underline" style="underline" className="w-full flex">
            <Tabs.Item
              active
              title={`Keranjang (${cart.length})`}
              className="w-full h-screen bg-red-900"
            >
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-500 dark:text-gray-400">
                  Pilih keranjangmu:
                </p>

                <button
                  type="button"
                  onClick={deleteCart}
                  className="text-white bg-red-600 w-8 h-8 rounded-md hover:bg-red-700 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900 flex items-center justify-center"
                >
                  <MdDelete size={20} />
                </button>
              </div>
              <ul className="space-y-4 mb-12">
                {cart.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <label
                      htmlFor={`cartD-${index}`}
                      className="w-full cursor-pointer max-w-md px-2 flex items-center gap-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                    >
                      <div>
                        <input
                          type="checkbox"
                          id={`cartD-${index}`}
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
              <div className=" bg-white w-full text-black fixed bottom-16">
                <p>Total : {formatPrice(calculateTotalPrice())}</p>
              </div>
              <div className="w-full fixed max-w-[355px] bottom-3">
                <button
                  type="button"
                  onClick={checkout}
                  className="text-white rounded-md  w-full justify-center bg-pink-950 hover:bg-pink-900 font-medium  text-sm px-5 py-2.5 text-center"
                >
                  Checkout
                </button>
              </div>
            </Tabs.Item>
            <Tabs.Item title={`Pesanan (${cartOrder.length})`}>
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
                                  quantity : {item.quantity}{" "}
                                  <span className="font-bold ml-2">
                                    Rp. {formatPrice(item.totalPrice)}
                                  </span>
                                </p>
                                <div className="flex w-full justify-between">
                                  <div className="text-[8px]">
                                    <p className="text-[8px] text-gray-500 truncate dark:text-gray-400 -mb-2">
                                      status :{" "}
                                    </p>
                                    <p>
                                      {item.delivered === true
                                        ? "Pesanan sedang dikirim"
                                        : "Pesanan sedang diproses"}
                                    </p>
                                  </div>
                                  {item.delivered === true ? (
                                    <button
                                      onClick={() => {
                                        setIdOrder(item.id);
                                        received();
                                      }}
                                      className="text-[8px] text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 px-1 rounded-lg"
                                    >
                                      Pesanan diterima
                                    </button>
                                  ) : (
                                    <button
                                      disabled
                                      className="text-[8px] text-white bg-gray-500 cursor-pointer px-1 rounded-lg"
                                    >
                                      Pesanan diterima
                                    </button>
                                  )}
                                </div>
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
            <Tabs.Item title="Diterima" >
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Terima kasih sudah memesan💖
              </p>
              <ul className="space-y-4 mb-4">
                {cartReceived.map((item, index) => (
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
        </div>
      </div>
    </div>
  );
}

export default CartDekstop;
