import {
  Box,
  Button,
  CssBaseline,
  Stack,
  Toolbar,
  ClickAwayListener,
} from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import "./common.css";
import WomensMenu from "../menu/WomensMenu";
import Popper from "@mui/material/Popper";

const StyledStack = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-around",
});

export const StyledButton = styled(Button)(({ theme }) => ({
  disableElevation: true,
  textTransform: "capitalize !important",
  fontSize: "14px",
  color: theme.palette.alltextcolor.main,
  fontWeight: 300,
  "&:active": {
    fontWeight: "bold",
  },
}));

const ResponsiveStyledButton = styled(StyledButton)(({ theme }) => ({
  display: "flex",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  let id = open ? "simple-popper" : undefined;

  const close = Boolean(anchorEl);
  id = close ? undefined : "simple-popper";
  return (
    <Box>
      <Box
        sx={{
          height: "60px",
        }}
      >
        <StyledStack direction="row">
          <Button
            sx={{
              fontWeight: 400,
              textTransform: "capitalize !important",
              fontSize: "14px",
            }}
          >
            New
          </Button>
          <Button
            variant="text"
            color="error"
            sx={{
              fontWeight: 400,
              textTransform: "capitalize !important",
              fontSize: "14px",
            }}
          >
            Clearance
          </Button>

          <StyledButton
            aria-describedby={id}
            variant="text"
            // onClick={handleClick}
          >
            <Link color="text.black" to="/Category">
              Women
            </Link>{" "}
          </StyledButton>

          <StyledButton variant="text">Men</StyledButton>
          <StyledButton variant="text">Kids</StyledButton>
          <StyledButton variant="text">Shoes</StyledButton>

          <StyledButton
            sx={{
              display: { xs: "none", sm: "flex" },
            }}
            variant="text"
          >
            Bags & Accessories
          </StyledButton>
          <StyledButton
            sx={{
              display: { xs: "none", sm: "flex" },
            }}
            variant="text"
          >
            Home
          </StyledButton>
          <StyledButton
            sx={{
              display: { xs: "none", sm: "flex" },
            }}
            variant="text"
          >
            Beauty
          </StyledButton>
          <StyledButton
            sx={{
              display: { xs: "none", sm: "flex" },
            }}
            variant="text"
          >
            Gift Guide
          </StyledButton>
          <Button
            variant="text"
            sx={{
              fontWeight: 400,
              textTransform: "capitalize !important",
              fontSize: "14px",
              display: { xs: "none", sm: "flex" },
            }}
          >
            Flash Events
          </Button>
        </StyledStack>
      </Box>
      <CssBaseline />
      <StyledStack
        direction="row"
        sx={{
          display: { sm: "none", xs: "flex" },
        }}
      >
        <Box>
          <StyledButton variant="text">Bags & Accessories</StyledButton>
          <StyledButton variant="text">Home</StyledButton>
          <StyledButton variant="text">Beauty</StyledButton>
          <StyledButton variant="text">Gift Guide</StyledButton>
          <Button
            variant="text"
            sx={{
              fontWeight: 400,
              textTransform: "capitalize !important",
              fontSize: "14px",
            }}
          >
            Flash Events
          </Button>
        </Box>
      </StyledStack>
      {/* <Box
      sx={{
        width: "100%",
        height: "75vh",
      }}
      >
       
          <Popper
            sx={{
              width: "100%",
              height: "100%",
            }}
            id={id}
            open={open}
            close={close}
            anchorEl={anchorEl}
          >
            <CssBaseline />
            <WomensMenu close={handleClick} />
          </Popper>
       
      </Box> */}
    </Box>
  );
};

export default Navbar;
