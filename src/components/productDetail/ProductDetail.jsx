import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  Typography,
} from "@mui/material";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import { productColorImage } from "../../data/data";
import React, { useState } from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { AddOutlined, CheckBox } from "@mui/icons-material";
import { FavoriteBorder } from "@mui/icons-material";
import { Favorite } from "@mui/icons-material";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

import { styled } from "@mui/material/styles";
const StyledButton = styled(Button)({
  textTransform: "capitalize !important",
  textDecoration: "underline",
  fontSize: "14px",
  "&:hover": {
    textDecoration: "underline",
    textDecorationThickness: "2px",
  },
});

const StyledReviewButton = styled(Button)({
  fontSize: "12px",
  fontWeight: 400,
  textTransform: "capitalize !important",
  pl: 3,
  pr: 3,
  pt: 1,
  pb: 1,
  borderColor: "primary.main",
  width: "55%",
  height: "50px",
});

const ProductDetail = () => {
  const [currentValue, setCurrentValue] = useState("");
  const handleChange = (event) => {
    setCurrentValue(event.target.value);
  };
  return (
    <Container maxWidth="xl">
      <Box
        classsName="MainContainerBox"
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        alignItems="flex-start"
      >
        <Box
          classsName="imageBox"
          width="60%"
          height="auto"
          mr={2}
          // sx={{
          //   display: { xs: "none", sm: "block" },
          // }}
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Box height="750px">
              <img
                width="100%"
                height="auto"
                src="https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW4lMjBmYXNpb258ZW58MHwxfDB8fHww&auto=format&fit=crop&w=400&q=60"
              />
            </Box>
            <Box height="750px">
              <img
                width="100%"
                height="auto"
                src="https://images.unsplash.com/photo-1588117260148-b47818741c74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBmYXNpb258ZW58MHwxfDB8fHww&auto=format&fit=crop&w=400&q=60"
              />
            </Box>
          </Box>
          <Divider />
          <Box
            mt={7}
            mb={7}
            classsName="shippingBox"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Box width="50%">
              <Typography
                sx={{
                  fontWeight: "bold",
                }}
                variant="h5"
              >
                Details & care
              </Typography>

              <ul>
                39" length (size S)
                <li>Jewel neck</li>
                <li>Back zip closure</li>
                <li> Elbow length sleeves</li>
                <li>Shell/lining: 100% polyester</li>
                <li>Hand wash</li>
                <li>Imported</li>
                <li>Item #6399093</li>
              </ul>
            </Box>
            <Box
              width="50%"
              display="flex"
              flexDirection="column"
              gap={2}
              alignItems="start"
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                }}
                variant="h5"
              >
                Shipping & Return
              </Typography>
              <Typography>Description</Typography>
              <ul>
                <li>
                  This item qualifies for free shipping on orders over $89.{" "}
                </li>
                <li>
                  This item is returnable within 40 days by mail or to U.S.
                  Nordstrom Rack and U.S. Nordstrom Store.{" "}
                </li>
              </ul>
              <Box display="flex">
                <CardGiftcardOutlinedIcon />
                <Typography
                  sx={{
                    fontWeight: "bold",
                  }}
                  variant="h5"
                >
                  Gift Options
                </Typography>
              </Box>

              <Typography>
                Write a gift message at Checkout and we'll email it to the
                recipient when their item is delivered.
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                }}
              >
                Need help finding the perfect gift? We've got you covered.
              </Typography>
              <StyledReviewButton color="alltextcolor" variant="outlined">
                Shop Gifts
              </StyledReviewButton>
            </Box>
          </Box>
        </Box>

        <Box
          width="30%"
          height="auto"
          mr={3}
          gap={1}
          display="flex"
          flexDirection="column"
          alignItems="start"
        >
          <Typography>Rating</Typography>
          <Typography>Product Name</Typography>
          <Typography>Brand</Typography>
          <Typography>Price ()</Typography>
          <Typography>Discount</Typography>
          <Box display="flex" flexDirection="row">
            <LocalShippingOutlinedIcon />

            <Typography> Free shipping on order $89+</Typography>
          </Box>
          <Typography>Product Description</Typography>
          <Typography>Color: ColorName</Typography>
          <Box>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              {productColorImage.map((color) => (
                <Grid item key={color.id}>
                  <Box position="relative">
                    <CheckBox
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        color: "primary",
                      }}
                      icon=""
                      checkedIcon={<Favorite />}
                    />
                    <img
                      width="50px"
                      height="50px"
                      src={color.image}
                      alt={color.colorName}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          <FormControl fullWidth>
            <InputLabel
              sx={{
                fontSize: "14px",
              }}
            >
              Choose Size
            </InputLabel>
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              value={currentValue}
              style={{
                height: "50px",
                marginTop: "10px",
                padding: "0px",
              }}
              onChange={handleChange}
              MenuProps={{
                disableScrollLock: true,
              }}
            >
              <MenuItem value="small">Small</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="large">Large</MenuItem>
              <MenuItem value="x-large">X-Large</MenuItem>
            </Select>
          </FormControl>
          <Typography>Delivery</Typography>
          <Button
            sx={{
              textTransform: "capitalize",
              height: "50px",
              "&:hover": {
                color: "primary",
              },
            }}
            size="large"
            variant="contained"
            fullWidth
            startIcon={<WorkOutlineOutlinedIcon />}
          >
            Add to Bag
          </Button>
          <Box display="flex">
            <IconButton disabled>
              <AddOutlined />
            </IconButton>
            <StyledButton>Add to Wish List</StyledButton>
          </Box>

          <Box bgcolor="#F0F3F5">
            <Typography p={1} letterSpacing={1}>
              Get a $40 Bonus Note when you use a new Nordstrom credit card.
              <StyledButton>Apply Now</StyledButton>
            </Typography>
          </Box>
        </Box>

        <Box width="10%" height="650px" bgcolor="#F0F3F5">
          Product You
        </Box>
      </Box>
      <Divider />

      {/* Review Box########################## */}

      <Box width="100%" mt={7}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
          }}
        >
          Reviews
        </Typography>
        <Box
          classsName="reviewBox"
          display="flex"
          justifyContent="flex-start"
          gap={2}
        >
          <Box>
            <Box display="flex" alignItems="center">
              <Rating
                size="large"
                name="half-rating"
                defaultValue={4.1}
                precision={0.5}
                sx={{
                  color: "#186ADC",
                }}
              />
              <Typography>(60)</Typography>
            </Box>
            <Typography>4.1 out of 5</Typography>
          </Box>
          <Box>rating</Box>

          <StyledReviewButton
            sx={{ width: "16%" }}
            variant="outlined"
            color="alltextcolor"
          >
            Write a Review
          </StyledReviewButton>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductDetail;
