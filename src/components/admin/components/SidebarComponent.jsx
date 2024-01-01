"use client";

import { Badge, Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { TbLogout2, TbTruckDelivery } from "react-icons/tb";
import { FaCartArrowDown, FaHandsHelping } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/UseAuth";

export default function SidebarComponent() {
  const { handleLogout } = useAuth();

  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);
  return (
    <Sidebar aria-label="Sidebar with call to action button example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="#"
            icon={HiChartPie}
            className={currentPath === "/" ? "bg-gray-100" : ""}
          >
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item
            href="/admin"
            icon={FaCartArrowDown}
            className={currentPath === "/admin" ? "bg-gray-100" : ""}
          >
            Pesanan
          </Sidebar.Item>
          <Sidebar.Item
            href="/deliver"
            icon={TbTruckDelivery}
            className={currentPath === "/deliver" ? "bg-gray-100" : ""}
          >
            Dalam pengiriman
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={FaHandsHelping}>
            Diterima
          </Sidebar.Item>
          <Sidebar.Item
            href="/addproduct"
            icon={HiShoppingBag}
            className={currentPath === "/addproduct" ? "bg-gray-100" : ""}
          >
            Products
          </Sidebar.Item>
          <button onClick={handleLogout} className="flex text-gray-500 items-center gap-3 font-medium hover:bg-gray-100 w-full p-2">
            <TbLogout2 size={25} />
            Logout
          </button>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
      <Sidebar.CTA>
        <div className="mb-3 flex items-center">
          <Badge color="warning">Beta</Badge>
          <button
            aria-label="Close"
            className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
            type="button"
          >
            <svg
              aria-hidden
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="mb-3 text-sm text-cyan-900 dark:text-gray-400">
          Preview the new Flowbite dashboard navigation! You can turn the new
          navigation off for a limited time in your profile.
        </div>
        <a
          className="text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300"
          href="#"
        >
          Turn new navigation off
        </a>
      </Sidebar.CTA>
    </Sidebar>
  );
}
