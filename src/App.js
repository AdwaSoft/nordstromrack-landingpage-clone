import React from "react";
import Box from "@mui/material/Box";
import NavBarContainer from "./components/commonComponent/NavBarContainer";
import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";
import WomenHome from "./pages/Womens/WomenHome";
import Footer from "./components/commonComponent/Footer";
import SignupPromo from "./components/homePageComponents/Promotion/SignupPromo";
import Category from "./pages/Product/Category";
import Cart from "./components/commonComponent/Cart";
import ProductDetail from "./components/productDetail/ProductDetail";
const App = () => {
  return (
    <React.Fragment>
      <NavBarContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Women" element={<WomenHome />} />
        <Route path="Category" element={<Category />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      {/* <SignupPromo /> */}
      <Footer />
    </React.Fragment>
  );
};

export default App;
