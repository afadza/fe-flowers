import React from "react";

function ChategoryComponent() {
  return (
    <div className="w-full h-full items-start flex justify-center">
      <div className="w-full h-full">
        <div>
          <p className="font-bold mb-4"> Browse by Category</p>
        </div>
        <div className="w-full">
          <ul className="flex w-full justify-between gap-4 overflow-x-auto">
            <li className="items-center text-center font-bold bg-slate-100 w-64 p-4 rounded-lg text-sm hover:shadow-lg hover:bg-white hover:cursor-pointer flex justify-center flex-col">
              <img src="../../../public/assets/images/flower-1.png" alt="" className="w-20 pb-4"/>
              Best Seller</li>
            <li className="items-center text-center font-bold bg-slate-100 w-64 p-4 rounded-lg text-sm hover:shadow-lg hover:bg-white hover:cursor-pointer flex justify-center flex-col">
              <img src="../../../public/assets/images/flower-1.png" alt="" className="w-20 pb-4"/>
              Flash Sale</li>
            <li className="items-center text-center font-bold bg-slate-100 w-64 p-4 rounded-lg text-sm hover:shadow-lg hover:bg-white hover:cursor-pointer flex justify-center flex-col">
              <img src="../../../public/assets/images/flower-1.png" alt="" className="w-20 pb-4"/>
              Wedding</li>
            <li className="items-center text-center font-bold bg-slate-100 w-64 p-4 rounded-lg text-sm hover:shadow-lg hover:bg-white hover:cursor-pointer flex justify-center flex-col">
              <img src="../../../public/assets/images/flower-1.png" alt="" className="w-20 pb-4"/>
              Bucket</li>
            <li className="items-center text-center font-bold bg-slate-100 w-64 p-4 rounded-lg text-sm hover:shadow-lg hover:bg-white hover:cursor-pointer flex justify-center flex-col">
              <img src="../../../public/assets/images/flower-1.png" alt="" className="w-20 pb-4"/>
              New</li>
          </ul>
        </div>
      </div>

      {/* <div className="w-full p-4 bg-white sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-3 text-center font-semibold text-gray-900 md:text-xl dark:text-white">
          Category
        </h5>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400 text-center">
          Find based on category and discover your dream flowers
        </p>
        <ul className="my-4 md:grid grid-cols-2 w-full gap-2 space-y-2 md:space-y-0">
          <li>
            <a
              href="/flashsale"
              className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Flashsale</span>
              <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                Popular
              </span>
            </a>
          </li>
          <li>
            <a
              href="/bestseller"
              className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Best seller</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">New</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Wedding</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Bucket</span>
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default ChategoryComponent;
