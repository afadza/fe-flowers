import React from "react";
import Main from "../layout/Main";
import HomeComponent from "../components/home/HomeComponent";
import { useSelector } from "react-redux";

function HomePage() {
  const auth = useSelector((state) => state.auth);
  console.log("auth", auth);

  
  return (
    <Main>
      <div className="w-full h-full flex justify-center items-center">
        <HomeComponent />
      </div>
    </Main>
  );
}

export default HomePage;
