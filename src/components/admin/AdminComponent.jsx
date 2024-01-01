import React from "react";
import NavbarAdminComponent from "./components/NavbarAdminComponent";
import { useLocation } from "react-router-dom";
import SidebarComponent from "./components/SidebarComponent";
import ListOrderComponent from "./components/ListOrderComponent";
import ListDeliverComponent from "./components/ListDeliverComponent";
import AddProductComponent from "./components/AddProductComponent";

function AdminComponent() {
  const location = useLocation();

  let componentToRender;
  if (location.pathname === "/admin") {
    componentToRender = <ListOrderComponent />;
  } else if (location.pathname === "/deliver") {
    componentToRender = <ListDeliverComponent />;
  } else if (location.pathname === "/addproduct") {
    componentToRender = <AddProductComponent />;
  } else {
    componentToRender = <div>Page not found</div>;
  }
  return (
    <div className="w-full h-full bg-slate-600">
      <div className="flex w-full h-full">
        <div className="fixed h-full  w-[20%]">
          <SidebarComponent />
        </div>
        <div className="w-full h-full p-4 ml-[24%]">{componentToRender}</div>
      </div>
    </div>
  );
}

export default AdminComponent;
