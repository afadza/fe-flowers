import React from "react";
import Main from "../layout/Main";
import DetailProductComponent from "../components/detail_product/DetailPoductComponent";

function DetailProductPage() {
  return (
    <Main>
      <div className="w-full h-screen flex justify-center items-center">
        <DetailProductComponent />
      </div>
    </Main>
  );
}

export default DetailProductPage;
