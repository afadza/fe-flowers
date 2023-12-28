import React from "react";
import ImageSlider from "./components/ImageSliderComponent";
import ChategoryComponent from "./components/CategoryComponent";
import "../../../public/assets/css/flash-sale.css";
import CardComponent from "../product/components/CardComponent";
import { Link } from "react-router-dom";
import useProduct from "../../hooks/useProduct";

function HomeComponent() {
  const { Products } = useProduct();
  
  return (
    <div className="md:w-[60%] w-full flex flex-col h-full items-center p-4">
      <div className="w-full items-center flex justify-center mt-4">
        <ImageSlider />
      </div>
      <div className="w-full h-full items-start mt-10 pb-36">
        <ChategoryComponent />
      </div>
      <div className="w-full mb-10">
        <p className="font-bold mb-2">All Flowers</p>
        <div className="w-full items-center md:flex md:flex-wrap md:justify-between md:gap-4  grid grid-cols-2 h-full gap-4">
          {Products?.map((flower, index) => (
            <Link
              key={index}
              to={
                flower.category.includes("flashsale")
                  ? `/flashsale/${flower.id}`
                  : `/bestseller/${flower.id}`
              }
            >
              <CardComponent flower={flower} key={index} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
