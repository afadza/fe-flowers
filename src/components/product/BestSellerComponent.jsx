import React from "react";
import CardComponent from "./components/CardComponent";
import Flowers from "../../mocks/flowers";
import { Link } from "react-router-dom";

function BestSellerComponent() {
  const bestSeller = Flowers.filter((flower) =>
    flower.category.includes("bestseller")
  );

  return (
    <div className="w-full grid grid-cols-2 h-full items-center gap-1">
      {bestSeller.map((flower, index) => (
        <Link key={index} to={`/bestseller/${flower.id}`}>
          <CardComponent flower={flower} />
        </Link>
      ))}
    </div>
  );
}

export default BestSellerComponent;
