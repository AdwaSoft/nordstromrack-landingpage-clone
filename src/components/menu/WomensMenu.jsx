import {
  Box,
  Button,
  ClickAwayListener,
  Container,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { styled } from "@mui/material/styles";
import { Link, NavLink } from "react-router-dom";

export const StyledMenuBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "space-between",
  justifyContent: "space-between",
  width: "17%",
});
export const StyledMenuButton = styled(Button)(({ theme }) => ({
  alignSelf: "start",
  justifySelf: "start",
  textAlign: "justify",
  textTransform: "capitalize !important",
  fontSize: "14px",
  paddingBottom: "0px",
  color: theme.palette.alltextcolor.main,

  fontWeight: 300,
  "&:hover": {
    color: theme.palette.primary.main,
    textDecoration: "underline",
  },
}));

export const StyledMenuBoldButton = styled(Button)(({ theme }) => ({
  alignSelf: "flex-start",
  textTransform: "capitalize !important",
  fontSize: "14px",
  color: theme.palette.alltextcolor.main,

  fontWeight: 700,
  "&:hover": {
    color: theme.palette.primary.main,
    textDecoration: "underline",
  },
}));
const WomensMenu = (props) => {
  return (
    <Paper
      sx={{
        backgroundColor: "white",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
            height: "650px",
          }}
        >
          <StyledMenuBox>
            <StyledMenuBoldButton
              sx={{
                fontSize: "15px",
              }}
            >
              Womens Get Inspired
            </StyledMenuBoldButton>
            <Divider
              sx={{
                pt: 0.5,
                pb: 1,
              }}
            />
            <StyledMenuBoldButton> Best Gifts For Dad</StyledMenuBoldButton>
            <StyledMenuBoldButton>
              Accessories Gifts For Dad
            </StyledMenuBoldButton>
            <StyledMenuBoldButton> New Arrival</StyledMenuBoldButton>
            <StyledMenuBoldButton> Best Sellers</StyledMenuBoldButton>
            <StyledMenuBoldButton> Our Top Picks</StyledMenuBoldButton>
            <StyledMenuBoldButton>HandBags Under $100</StyledMenuBoldButton>
            <StyledMenuBoldButton>
              Designer SunGlass Under $100
            </StyledMenuBoldButton>
            <StyledMenuBoldButton>Watches Under $200</StyledMenuBoldButton>
            <StyledMenuBoldButton> Nordstrom Made</StyledMenuBoldButton>
            <StyledMenuBoldButton>New Markdowns</StyledMenuBoldButton>
            <StyledMenuBoldButton>
              Womens Accessories Clearance
            </StyledMenuBoldButton>
            <StyledMenuBoldButton>
              Mens Accessories Clearance
            </StyledMenuBoldButton>
          </StyledMenuBox>
          <StyledMenuBox>
            <StyledMenuBoldButton>
              <Link color="text.black" to="/Category">
                Clothing
              </Link>{" "}
            </StyledMenuBoldButton>

            <StyledMenuButton> Activewear</StyledMenuButton>
            <StyledMenuButton> Blazers</StyledMenuButton>
            <StyledMenuButton> Coat & Jackets</StyledMenuButton>
            <StyledMenuButton> Dresses</StyledMenuButton>
            <StyledMenuButton> Jeans & Denim</StyledMenuButton>
            <StyledMenuButton> Jumpsuits Rompers</StyledMenuButton>
            <StyledMenuButton> Lingerie,Hosiery & Shapewear</StyledMenuButton>
            <StyledMenuButton> Loungewear</StyledMenuButton>
            <StyledMenuButton> Pants &Leggings</StyledMenuButton>
            <StyledMenuButton>Shorts</StyledMenuButton>
            <StyledMenuButton
              sx={{
                paddingLeft: "0px",
              }}
            >
              Skirts
            </StyledMenuButton>
            <StyledMenuButton> Sleepwear</StyledMenuButton>
            <StyledMenuButton> Sweaters</StyledMenuButton>
            <StyledMenuButton> Sweatshirts & Hoodies</StyledMenuButton>
            <StyledMenuButton> Swimsuits & Cover-Ups</StyledMenuButton>
            <StyledMenuButton
              sx={{
                paddingLeft: "0px",
              }}
            >
              Tops
            </StyledMenuButton>

            <StyledMenuButton sx={{ pt: 2 }}> Plus-Size</StyledMenuButton>
            <StyledMenuButton> Maternity Friendly</StyledMenuButton>
          </StyledMenuBox>

          <StyledMenuBox>
            <StyledMenuBoldButton> Shoes</StyledMenuBoldButton>
            <StyledMenuButton> Athletics & Running</StyledMenuButton>
            <StyledMenuButton> Boots & Booties</StyledMenuButton>
            <StyledMenuButton> Comfort</StyledMenuButton>
            <StyledMenuButton> Espadrilles</StyledMenuButton>
            <StyledMenuButton
              sx={{
                paddingLeft: "0px",
              }}
            >
              Flats
            </StyledMenuButton>
            <StyledMenuButton> Flip-Flops & Slides</StyledMenuButton>
            <StyledMenuButton
              sx={{
                paddingLeft: "0px",
              }}
            >
              Heels
            </StyledMenuButton>
            <StyledMenuButton> Loafers & Oxfords</StyledMenuButton>
            <StyledMenuButton
              sx={{
                paddingLeft: "0px",
              }}
            >
              Mules
            </StyledMenuButton>
            <StyledMenuButton> Sandals</StyledMenuButton>
            <StyledMenuButton> Slippers</StyledMenuButton>
            <StyledMenuButton> Sneakers</StyledMenuButton>
            <StyledMenuButton> Wedges</StyledMenuButton>

            <StyledMenuBoldButton
              sx={{
                paddingTop: "20px",
              }}
            >
              Handbags
            </StyledMenuBoldButton>
            <StyledMenuBoldButton> Sunglasses & Eyewear</StyledMenuBoldButton>

            <StyledMenuBoldButton> Jewelry & Watches</StyledMenuBoldButton>

            <StyledMenuBoldButton> Accessories</StyledMenuBoldButton>
            <StyledMenuBoldButton> Beauty</StyledMenuBoldButton>
          </StyledMenuBox>

          <StyledMenuBox>
            <StyledMenuBoldButton> Shop by Occasion </StyledMenuBoldButton>
            <StyledMenuButton> Festival Must Haves</StyledMenuButton>
            <StyledMenuButton>Graduation </StyledMenuButton>
            <StyledMenuButton> Night Out</StyledMenuButton>
            <StyledMenuButton> Prom wwww</StyledMenuButton>
            <StyledMenuButton> Summer Occasion</StyledMenuButton>
            <StyledMenuButton>Vacation </StyledMenuButton>
            <StyledMenuButton> Wear to Work</StyledMenuButton>
            <StyledMenuButton>Wedding Guest </StyledMenuButton>

            <StyledMenuBoldButton
              sx={{
                paddingTop: "20px",
              }}
            >
              Shop by Trend
            </StyledMenuBoldButton>
            <StyledMenuButton>Matching Sets </StyledMenuButton>
            <StyledMenuButton>Pretty in Pink </StyledMenuButton>
            <StyledMenuButton> Sleek & Strappy Sandals</StyledMenuButton>

            <StyledMenuBoldButton
              sx={{
                paddingTop: "20px",
              }}
            >
              {" "}
              Summer Essentials
            </StyledMenuBoldButton>
            <StyledMenuBoldButton
              sx={{
                paddingTop: "20px",
              }}
            >
              {" "}
              The Dress Edit
            </StyledMenuBoldButton>
            <StyledMenuBoldButton
              sx={{
                paddingTop: "20px",
              }}
            >
              {" "}
              Shop by Activity
            </StyledMenuBoldButton>

            <StyledMenuButton> Tennis, Golf & Pickleball</StyledMenuButton>
            <StyledMenuButton> Yoga, Barre & Pilates</StyledMenuButton>
          </StyledMenuBox>

          <StyledMenuBox>
            <StyledMenuBoldButton> Top Brands</StyledMenuBoldButton>
            <StyledMenuButton>adidas </StyledMenuButton>
            <StyledMenuButton> Birkenstock</StyledMenuButton>
            <StyledMenuButton>Calvin Klein </StyledMenuButton>
            <StyledMenuButton> Free People</StyledMenuButton>
            <StyledMenuButton> Longchamp</StyledMenuButton>
            <StyledMenuButton>Madewell </StyledMenuButton>
            <StyledMenuButton
              sx={{
                paddingLeft: "0px",
              }}
            >
              Nike
            </StyledMenuButton>
            <StyledMenuButton> rag & bone</StyledMenuButton>
            <StyledMenuButton>Sam Edelman</StyledMenuButton>
            <StyledMenuButton>Steve Madden </StyledMenuButton>
          </StyledMenuBox>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="start"
            alignItems="start"
          >
            <IconButton
              sx={{
                alignSelf: "end",
              }}
              onClick={props.close}
            >
              <CloseOutlinedIcon fontSize="large" />
            </IconButton>
            <Box>
              <img
                width="240px"
                height="450px"
                src="https://images.unsplash.com/photo-1596783047904-4000addd05cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHJlc3Nlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
                alt=""
                srcset=""
              />
            </Box>
            <Button
              sx={{
                alignSelf: "felx-start",
                color: "primary",
                textTransform: "capitalize !important",
                fontWeight: 300,
                fontSize: 14,
                textDecoration: "underline",
                "&:hover": {
                  textDecoration: "underline",
                  textDecorationThickness: "2px",
                },
              }}
            >
              Shop Dresses
            </Button>
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};

export default WomensMenu;
