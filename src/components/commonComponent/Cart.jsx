import React from "react";
import { setIsCartOpen } from "../../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography } from "@mui/material";

const Cart = () => {
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  return (
    <Box display={isCartOpen ? "block" : "none"}>
      <Typography>CArt PAge</Typography>
    </Box>
  );
};
export default Cart;
