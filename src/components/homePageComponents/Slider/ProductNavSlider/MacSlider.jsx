import React from "react";
import Slider from "react-slick";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, IconButton } from "@mui/material";
import MacSlidercard from "./MacSlidercard";

const MacSlider = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          right: "0",
          color: "gray",
          padding: "5px",
          zIndex: "10",
        }}
        onClick={onClick}
      >
        <NavigateNextIcon
          sx={{
            fontSize: "70px",
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
          top: "50%",
          left: "0",
          color: "gray",
          padding: "5px",
          zIndex: "10",
        }}
        onClick={onClick}
      >
        <NavigateBeforeIcon
          sx={{
            fontSize: "70px",
            textDecorationThickness: "40px",

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
    slidesToShow: 6,
    slidesToScroll: 6,

    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };
  const sliderImage = [
    "https://pbs.twimg.com/profile_images/1542873886769008640/UFKt-rHt_400x400.jpg",
    "https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/13815208/pexels-photo-13815208.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/2586073/pexels-photo-2586073.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1749452/pexels-photo-1749452.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/7143283/pexels-photo-7143283.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/5797999/pexels-photo-5797999.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/234220/pexels-photo-234220.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/850801/pexels-photo-850801.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/2639947/pexels-photo-2639947.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const cardData = {
    sale: "Limited-Time Sale",
    Mac: "MAC Cosmetics",
    RealPrice: "$7.97-$15.00",
    off: "(Up to 38% off select items)",
    offPrice: "  $7.97 $15.00",
    rating: "(123)",
  };
  return (
    <Box>
      <Slider {...settings}>
        <MacSlidercard allCardData={cardData} image={sliderImage[0]} />
        <MacSlidercard allCardData={cardData} image={sliderImage[1]} />
        <MacSlidercard allCardData={cardData} image={sliderImage[2]} />
        <MacSlidercard allCardData={cardData} image={sliderImage[3]} />
        <MacSlidercard allCardData={cardData} image={sliderImage[4]} />
        <MacSlidercard allCardData={cardData} image={sliderImage[5]} />
        <MacSlidercard allCardData={cardData} image={sliderImage[6]} />
        <MacSlidercard allCardData={cardData} image={sliderImage[7]} />
      </Slider>
    </Box>
  );
};

export default MacSlider;
