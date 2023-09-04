import { Box, Container, CssBaseline } from "@mui/material";
import React from "react";
import First from "../components/homePageComponents/Promotion/First";
import NewArrival from "../components/homePageComponents/Promotion/NewArrival";
import MainSlider from "../components/homePageComponents/Slider/MainSlider";
import Brands from "../components/homePageComponents/Promotion/Brands";

import ProductSlider from "../components/homePageComponents/Slider/ProductSlider";
import StoreDetail from "../components/homePageComponents/Promotion/StoreDetail";
import ProductNavSlider from "../components/homePageComponents/Slider/ProductNavSlider/ProductNavSlider";

import Footer from "../components/commonComponent/Footer";
const Home = () => {
  return (
    <Container maxWidth="xl">
      <First />
      <NewArrival />
      <MainSlider />
      <Brands />

      <ProductSlider />
      <StoreDetail />
      <ProductNavSlider />
    </Container>
  );
};

export default Home;
