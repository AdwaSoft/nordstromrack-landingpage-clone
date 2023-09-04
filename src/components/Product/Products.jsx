import React, { useEffect, useState } from "react";

import Product from "./Product";
import { productData } from "../../data/productdata";
import { Box, Container, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Products = ({ category }) => {
  const products = useSelector((state) => state.cart.products);
  const location = useLocation();
  console.log(location);
  const activeWearProduct = productData.filter(
    (product) => product?.subCategory === "activewear"
  );
  return (
    <Grid
      width="100%"
      margin={0}
      container
      spacing={3}
      ml={0}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      {category === "all" &&
        productData.map((product) => (
          <Grid item xs={6} sm={4} md={3} key={product.id}>
            <Product product={product} />
          </Grid>
        ))}
    </Grid>
  );
};

export default Products;
