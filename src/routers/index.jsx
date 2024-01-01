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
import AdminPage from "../pages/AdminPage";
function RoutePages() {
  function IsNotLogin() {
    const token = localStorage.getItem("token");
    if (!token) {
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
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/order" element={<AdminPage />} />
          <Route path="/deliver" element={<AdminPage />} />
          <Route path="/addproduct" element={<AdminPage />} />
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
