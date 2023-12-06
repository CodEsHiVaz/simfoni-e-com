import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Search from "../Pages/Search/Search";
import ProductListing from "../Pages/ProductListing/ProductListing";

const AllRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/productdetails" element={<ProductDetails />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/productlisting" element={<ProductListing />}></Route>
      </Routes>
    </>
  );
};

export default AllRoute;
