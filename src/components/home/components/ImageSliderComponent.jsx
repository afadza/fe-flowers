import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import useProduct from "../../../hooks/useProduct";

function ImageSlider() {
  const { Products } = useProduct();
  const imgFilter = Products?.filter((flower) =>
    flower.category.includes("new")
  );
  const imgSlice = imgFilter?.slice(0, 4);
  return (
    <AliceCarousel
      autoPlay
      autoPlayInterval={2000}
      disableButtonsControls
      infinite
    >
      {imgSlice?.map((flower, index) => (
        <img
          key={index}
          src={flower.image}
          alt="Gambar 1"
          className="w-full md:h-[400px] h-[200px] object-cover rounded-lg"
        />
      ))}
    </AliceCarousel>
  );
}

export default ImageSlider;
