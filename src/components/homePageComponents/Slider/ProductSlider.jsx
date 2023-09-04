import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import ProductSliderCard from "./ProductSlider/ProductSliderCard";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSlider = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <IconButton
        sx={{
          position: "absolute",
          top: "30%",
          right: "0",
          color: "black",
          padding: "5px",
          zIndex: "10",
        }}
        onClick={onClick}
      >
        <NavigateNextIcon
          sx={{
            fontSize: "40px",
            "&:hover": {
              backgroundColor: "primary",
            },
          }}
        />
      </IconButton>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <IconButton
        sx={{
          position: "absolute",
          top: "30%",
          left: "0",
          color: "black",
          padding: "5px",
          zIndex: "10",
        }}
        onClick={onClick}
      >
        <NavigateBeforeIcon
          sx={{
            fontSize: "40px",
            "&:hover": {
              backgroundColor: "primary",
            },
          }}
        />
      </IconButton>
    );
  }

  const settings = {
    // dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,

    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };
  const sliderImage = [
    "https://media.istockphoto.com/id/1223379047/photo/fashion-portrait-of-elegant-woman-in-brown-sweater.jpg?b=1&s=612x612&w=0&k=20&c=rPg8hVaSDFdI4V2TnHl0wzkwVqMi66KNGqpjIHax9_M=",
    "https://media.istockphoto.com/id/1034356920/photo/sky-blue-handbag-purse-and-beautiful-woman-hand-with-red-manicure-isolated-on-pink-background.jpg?b=1&s=612x612&w=0&k=20&c=NNmD0APXcMtP_sPc3cB_-8BbC5AMQR_L2CDVtRCgCeg=",
    "https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/944761/pexels-photo-944761.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/4168137/pexels-photo-4168137.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];
  return (
    <Box
      sx={{
        height: "470px",
        mb: 9,
      }}
    >
      <Slider {...settings}>
        <ProductSliderCard
          image={sliderImage[6]}
          title={"For Men 20% off sale"}
          detail={"Men trousers"}
        />
        <ProductSliderCard
          image={sliderImage[0]}
          title={"Womens Off Sala"}
          detail={"Nice skirt"}
        />
        <ProductSliderCard
          image={sliderImage[1]}
          title={"Womens Bags"}
          detail={"Nice Bag"}
        />
        <ProductSliderCard
          image={sliderImage[2]}
          title={"Womens Off Shoes 40%"}
          detail={"this shoes made with original .."}
        />
        <ProductSliderCard
          image={sliderImage[3]}
          title={"Womens Off Sala"}
          detail={"for summer there is nice .."}
        />
        <ProductSliderCard
          image={sliderImage[4]}
          title={"Womens Skirt"}
          detail={"Nice skirt"}
        />
        <ProductSliderCard
          image={sliderImage[5]}
          title={"Kids off sale 30%"}
          detail={"Nice kids full option"}
        />
      </Slider>
    </Box>
  );
};

export default ProductSlider;
