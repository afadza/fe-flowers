import React from "react";
import Marquee from "react-fast-marquee";

function SponsorComponent() {
  return (
    <div className="w-full px-4">
      <Marquee>
        <div className="flex gap-10">
          <p>Top Flowers</p>
          <p>Top Quality</p>
          <p>Top Price</p>
        </div>
      </Marquee>
    </div>
  );
}

export default SponsorComponent;
