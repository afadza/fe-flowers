import React from "react";
import useProduct from "../../../hooks/useProduct";
import CardComponent from "../../product/components/CardComponent";
import AddProductModal from "./AddProductModal";

function AddProductComponent() {
  const { Products } = useProduct();
  return (
    <div className="w-full h-full">
      <div className="mb-8 ml-4">
        <AddProductModal />
      </div>
      <div className=" w-full h-full grid grid-cols-3 gap-4 justify-center items-center">
        {Products?.map((flower, index) => (
          <CardComponent flower={flower} key={index} />
        ))}
      </div>
    </div>
  );
}

export default AddProductComponent;
