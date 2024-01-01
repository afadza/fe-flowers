import React, { useEffect, useState } from "react";
import Main from "../layout/Main";
import HomeComponent from "../components/home/HomeComponent";

function HomePage() {
  return (
    <Main>
      <div className="w-full h-full flex justify-center items-center">
        <HomeComponent />
      </div>
    </Main>
  );
}

export default HomePage;
