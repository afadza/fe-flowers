import React from "react";
import SidebarComponent from "./components/SidebarComponent";

function AdminComponent() {
  return (
    <div className="w-full h-full">
      <div className="flex w-full h-full">
          <SidebarComponent />
      </div>
    </div>
  );
}

export default AdminComponent;
