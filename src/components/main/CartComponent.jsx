import React from "react";
import { IoCartOutline } from "react-icons/io5";
import useCart from "../../hooks/useCart";
import { Tabs } from "flowbite-react";
import "../../../public/assets/css/flash-sale.css";
import { MdDelete } from "react-icons/md";

function CartComponent() {
  const {
    cart,
    cartOrder,
    deleteCart,
    checkedItems,
    checkout,
    handleCheckboxChange,
    cartReceived,
    calculateTotalPrice,
    formatPrice,
    received,
    setIdOrder,
  } = useCart();
  return (
    <div className="w-full h-full items-center flex justify-center">
      <button
        data-modal-target="select-modal"
        data-modal-toggle="select-modal"
        type="button"
        className="text-white"
      >
        <p className="text-[10px] bg-white rounded-full text-center font-bold text-black z-50 -mb-[10px] -ml-[5px] w-[15px]">
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
            {/* Modal body */}
            <div className="p-4 w-full">
              <Tabs
                aria-label="Tabs with underline"
                style="underline"
                className="w-full flex justify-between"
              >
                <Tabs.Item active title={`Keranjang (${cart.length})`}>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Pilih keranjangmu:
                  </p>
                  <ul className="space-y-4 mb-12 h-60 overflow-auto hide-scrollbar">
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
                  <div className=" bg-white w-full mb-2">
                    <p>Total : {formatPrice(calculateTotalPrice())}</p>
                  </div>
                  <div className=" w-full flex gap-2 ">
                    <button
                      type="button"
                      onClick={deleteCart}
                      className="text-white items-center rounded-md inline-flex w-full justify-center bg-red-700 hover:bg-red-800 font-medium  text-sm px-5 py-2.5 text-center"
                    >
                      <MdDelete />
                      Hapus
                    </button>
                    <button
                      type="button"
                      onClick={checkout}
                      className="text-white rounded-md inline-flex w-full justify-center bg-pink-950 hover:bg-pink-900 font-medium  text-sm px-5 py-2.5 text-center"
                    >
                      Checkout
                    </button>
                  </div>
                </Tabs.Item>
                <Tabs.Item title={`Pesanan (${cartOrder.length})`}>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Pesanan sedang dikirim :
                  </p>
                  <ul className="space-y-4 mb-4  h-52 overflow-auto hide-scrollbar">
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
                <Tabs.Item title="Diterima">
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Terima kasih sudah memesan💖
                  </p>
                  <ul className="space-y-4 mb-4  h-52 overflow-auto hide-scrollbar">
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
      </div>
    </div>
  );
}

export default CartComponent;
