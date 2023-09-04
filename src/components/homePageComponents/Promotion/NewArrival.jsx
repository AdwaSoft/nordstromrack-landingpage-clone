import { Box, Button, CardMedia, Typography } from "@mui/material";
import React from "react";
import newarrival from "./images/newarrival.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Margin, Padding } from "@mui/icons-material";
const NewArrival = () => {
  const mediaQuery = useMediaQuery("(min-width:600px)");
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height={mediaQuery ? "210px" : "110px"}
      pl={mediaQuery ? 5 : 3}
      mt={9}
      mb={9}
      backgroundColor="primary.light"
    >
      <Box height="100%" width="100%">
        {!mediaQuery ? (
          <img
            style={{
              maxWidth: "100%",

              height: "auto",
              padding: "0px",
              margin: "0",
            }}
            src={newarrival}
            // image="https://plus.unsplash.com/premium_photo-1675805015359-fda0a96d5842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60"
          />
        ) : (
          <img
            style={{
              maxWidth: "100%",
              width: "50%",
              height: "auto",
              padding: "0",
              margin: "0",
            }}
            src={newarrival}
            // image="https://plus.unsplash.com/premium_photo-1675805015359-fda0a96d5842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60"
          />
        )}
      </Box>

      <Box
        display="flex"
        justifyContent="start"
        alignItems="center"
        flexDirection="column"
        pr={mediaQuery ? 16 : 1}
        pl={mediaQuery ? 5 : 1}
      >
        <Typography color="alltextcolor.light" fontWeight={700}>
          addidas,Birkenstock, Vince and More.
        </Typography>
        <Button
          sx={{
            alignSelf: "flex-start",
            color: "alltextcolor.light",
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
          New Arrival
        </Button>
      </Box>
    </Box>
  );
};

export default NewArrival;
