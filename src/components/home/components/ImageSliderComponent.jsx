import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const ImageSlider = () => {
  return (
    <AliceCarousel
      autoPlay
      autoPlayInterval={2000}
      disableButtonsControls
      infinite
    >
      <img
        src="../../../../public/assets/images/freya-1.jpg"
        alt="Gambar 1"
        className="w-full md:h-[400px] h-[200px] object-cover rounded-lg"
      />
      <img
        src="../../../../public/assets/images/freya-1.jpg"
        alt="Gambar 2"
        className="w-full md:h-[400px] h-[200px] object-cover rounded-lg"
      />
      <img
        src="../../../../public/assets/images/freya-1.jpg"
        alt="Gambar 3"
        className="w-full md:h-[400px] h-[200px] object-cover rounded-lg"
      />
    </AliceCarousel>
  );
};

export default ImageSlider;
