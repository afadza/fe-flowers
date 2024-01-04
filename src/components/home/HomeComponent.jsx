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
    <div className="md:w-[70%] w-full flex flex-col h-full items-center bg-gray-100 ">
      <div className="w-full items-center flex justify-center mt-4 border-b-2 px-4">
        <ImageSlider />
      </div>
      <div className="w-full h-full items-start mb-10 md:mt-4 pt-4 pb-10 bg-pink-950 text-gray-100">
        <ChategoryComponent />
      </div>
      <div className="w-full mb-10">
        <p className="font-bold mb-2 border-b-2  px-4">All Flowers</p>
        <div className="w-full items-center px-2 grid md:grid-cols-4 grid-cols-2 h-full gap-4">
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
