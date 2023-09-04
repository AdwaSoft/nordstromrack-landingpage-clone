import {
  AppBar,
  Box,
  Breadcrumbs,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
// import "./style.css";
import { StyledMenuButton } from "../../components/menu/WomensMenu";
import { StyledMenuBoldButton } from "../../components/menu/WomensMenu";
import Gifts from "../../components/homePageComponents/BigPromotion/Gifts";
import StickyBox from "react-sticky-box";
import "./style.css";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const WomenHome = () => {
  return (
    <Box mr={5} ml={5}>
      <Box pl={5} pt={2} width="100%" mb={3} onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <RouterLink underline="hover" color="inherit" to="/">
            Home
          </RouterLink>

          <Typography color="text.primary">Women</Typography>
        </Breadcrumbs>
      </Box>
      <Box display="flex" flexDirection="row">
        <Box width="15.7%">
          <StickyBox offsetTop={20}>
            <Box
              className="sidebar"
              display="flex"
              flexDirection="column"
              alignItems="start"
              justifyContent="flex-start"
              maxHeight="80vh"
              overflow="auto"
            >
              <StyledMenuBoldButton
                sx={{
                  color: "primary.main",
                  fontWeight: "bold",
                  textDecoration: "underline",
                  fontSize: "16px",
                }}
              >
                {" "}
                Women
              </StyledMenuBoldButton>
              <StyledMenuButton> All Women</StyledMenuButton>
              <StyledMenuButton> Clothing</StyledMenuButton>
              <StyledMenuButton> Shoes</StyledMenuButton>
              <StyledMenuButton> HandBags</StyledMenuButton>
              <StyledMenuButton> Sunglasses & Eyewear</StyledMenuButton>
              <StyledMenuButton> Jewelry & Watches</StyledMenuButton>
              <StyledMenuButton> Accessories</StyledMenuButton>
              <StyledMenuButton> Luggage & Travel</StyledMenuButton>
              <StyledMenuButton>Beauty</StyledMenuButton>

              <StyledMenuButton> New Arrival</StyledMenuButton>
              <StyledMenuButton> Best Sellers</StyledMenuButton>
              <StyledMenuButton> Our Top Picks</StyledMenuButton>
              <StyledMenuButton> Clearance</StyledMenuButton>
              <StyledMenuButton> Top Brands</StyledMenuButton>
              <StyledMenuButton> Shop by Occasion</StyledMenuButton>
              <StyledMenuButton> Shop by Trend</StyledMenuButton>
              <StyledMenuButton> The Dress Edit</StyledMenuButton>
              <StyledMenuButton>Flash Events</StyledMenuButton>
              <StyledMenuBoldButton
                sx={{
                  color: "Black",
                  fontWeight: "bold",
                  pt: 2,
                  pb: 2,
                  fontSize: "16px",
                }}
              >
                {" "}
                Featured
              </StyledMenuBoldButton>
              <StyledMenuButton> Best Gifts for Dad</StyledMenuButton>
              <StyledMenuButton> Gifts for Dad Under $50</StyledMenuButton>
              <StyledMenuButton> Summer Essentials</StyledMenuButton>
              <StyledMenuButton> Shop by Activity</StyledMenuButton>
              <StyledMenuButton> Contemporary Brands</StyledMenuButton>
              <StyledMenuButton>Trend Brands</StyledMenuButton>

              <StyledMenuButton> Young Adult</StyledMenuButton>
              <StyledMenuButton> Designer</StyledMenuButton>
              <StyledMenuButton> O Dresses Under $50</StyledMenuButton>
              <StyledMenuButton> Swim Under $50</StyledMenuButton>
              <StyledMenuButton> Denim Under $50</StyledMenuButton>
              <StyledMenuButton> Sandals Under $50</StyledMenuButton>
              <StyledMenuButton> Sneakers Under $50</StyledMenuButton>
              <StyledMenuButton> Wedding Shop</StyledMenuButton>
              <StyledMenuButton> Rack Essentials</StyledMenuButton>
            </Box>
          </StickyBox>
        </Box>

        <Box width="84%" height="1300px">
          <Typography>Women's Clothing, Shoes & Accessories</Typography>
          <Gifts />
        </Box>
      </Box>
    </Box>
  );
};

export default WomenHome;
