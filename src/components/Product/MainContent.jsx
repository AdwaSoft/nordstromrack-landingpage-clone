import { Box, Pagination, PaginationItem, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SubSubCatogoryTab from "./SubSubCatogoryTab";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/cartSlice";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SortProduct from "./SortProduct";

const MainContent = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/products?populate=*",
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        dispatch(setProducts(res.data.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);
  return (
    <Box width="80%" ml={3}>
      <Box ml={2} mr={2}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "700",
            alignSelf: "center",
            textTransform: "capitalize !important",
          }}
        >
          Womens Clothing
        </Typography>
        <SubSubCatogoryTab />

        <Box>
          <Pagination
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
            count={10}
            defaultPage={1}
            boundaryCount={1}
            size="large"
            showFirstButton
            showLastButton
            renderItem={(item) => (
              <PaginationItem
                slots={{
                  previous: ArrowBackIosNewIcon,

                  next: ArrowForwardIosIcon,
                }}
                {...item}
              />
            )}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MainContent;
