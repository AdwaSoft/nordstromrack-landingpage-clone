import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const mainSliderImage = [
  "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/7764513/pexels-photo-7764513.jpeg?auto=compress&cs=tinysrgb&w=1600",
];
const MainSlider = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Box
      sx={{
        height: "640px",

        mb: 9,
      }}
    >
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        autoPlay={true}
        interval={4000}
        renderArrowPrev={(onClickHandler, hasPrev, label) => (
          <IconButton
            onClick={onClickHandler}
            sx={{
              position: "absolute",
              top: "50%",
              left: "0",
              color: "white",
              padding: "5px",
              zIndex: "10",
            }}
          >
            <NavigateBeforeIcon
              sx={{
                fontSize: "40px",
                "&:hover": {
                  backgroundColor: "black",
                },
              }}
            />
          </IconButton>
        )}
        renderArrowNext={(onClickHandler, hasNext, label) => (
          <IconButton
            onClick={onClickHandler}
            sx={{
              position: "absolute",
              top: "50%",
              right: "0",
              color: "white",
              padding: "5px",
              zIndex: "10",
            }}
          >
            <NavigateNextIcon
              sx={{
                fontSize: "40px",
                "&:hover": {
                  backgroundColor: "black",
                },
              }}
            />
          </IconButton>
        )}
      >
        {Object.values(mainSliderImage).map((texture, index) => (
          <Box key={`carousel-image-${index}`}>
            <img
              src={texture}
              alt={`carousel-${index}`}
              style={{
                width: "100%",
                height: "640px",
                objectFit: "cover",
                // backgroundAttachment: "fixed",
              }}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default MainSlider;
