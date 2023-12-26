import React from "react";
import { useLocation } from "react-router-dom";
import Main from "../layout/Main";
import FlashSaleComponent from "../components/product/FlashSaleComponent";
import BestSellerComponent from "../components/product/BestSellerComponent";

function FlowersPage() {
  const location = useLocation();

  let componentToRender;
  if (location.pathname === "/flashsale") {
    componentToRender = <FlashSaleComponent />;
  } else if (location.pathname === "/bestseller") {
    componentToRender = <BestSellerComponent />;
  } else {
    componentToRender = <div>Page not found</div>;
  }

  return (
    <Main>
      <div className="w-full h-full flex justify-center items-center">
        <div>{componentToRender}</div>
      </div>
    </Main>
  );
}

export default FlowersPage;
