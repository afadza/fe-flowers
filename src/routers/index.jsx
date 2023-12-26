import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProductPage from "../pages/ProductsPage";
import DetailProductPage from "../pages/DetailProductPage";
function RoutePages() {
  function IsNotLogin() {
    if (localStorage.getItem("token") === null) {
      return <Navigate to="/login" />;
    } else {
      return <Outlet />;
    }
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IsNotLogin />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/flashsale" element={<ProductPage />} />
          <Route path="/flashsale/:id" element={<DetailProductPage />} />
          <Route path="/bestseller/" element={<ProductPage />} />
          <Route path="/bestseller/:id" element={<DetailProductPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default RoutePages;
