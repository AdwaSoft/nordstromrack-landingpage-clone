import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { theme } from "../../theme";
import Link from "@mui/material/Link";
const StyledBox = styled(Box)({
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 4,
  padding: "6px",

  color: "white",
  fontWeight: 400,
  width: "100%",
  height: { xs: "70px", sm: "60px", md: "40px", lr: "40px" },
});
const Notification = () => {
  return (
    <StyledBox>
      <Typography variant="p">
        Free shipping over $89. Shop online or pick up select orders at a
        Nordstrom Rack or Nordstrom store.
        <Link
          // sx={{
          //   display: { xs: "none", sm: "block" },
          // }}
          href="#"
          underline="always"
          color="inherit"
        >
          Learn More
        </Link>
      </Typography>
    </StyledBox>
  );
};

export default Notification;
