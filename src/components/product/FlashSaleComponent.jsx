import React from "react";
import CardComponent from "./components/CardComponent";
import Flowers from "../../mocks/flowers";
import { Link } from "react-router-dom";

function FlashSaleComponent() {
  const flashSale = Flowers.filter((flower) =>
    flower.category.includes("flashsale")
  );
  return (
    <div>
      {flashSale.map((flower, index) => (
        <Link key={index} to={`/flashsale/${flower.id}`}>
          <CardComponent flower={flower} key={index} />
        </Link>
      ))}
    </div>
  );
}

export default FlashSaleComponent;
