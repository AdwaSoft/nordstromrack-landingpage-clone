import {
  AppBar,
  Backdrop,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import Notification from "./Notification";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import StoreIcon from "@mui/icons-material/Store";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CssBaseline from "@mui/material/CssBaseline";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Signin from "./Tooltip/Signin";
import Cart from "./Tooltip/Cart";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { setIsCartOpen } from "../../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "white",
  color: "black",
  height: "90px",
});

const StyledIconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1.5,
  padding: "20px",
}));
const StyledButton = styled(Button)(({ theme }) => ({
  size: "small",

  color: theme.palette.alltextcolor.main,
  fontWeight: 300,
}));
const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[7],
    describeChild: true,
    // [theme.breakpoints.down("md")]: {
    //   fontSize: 9,
    //   width: "270px",
    //   height: "450px",
    // },
    fontSize: 11,
    width: "270px",
    height: "520px",
  },
}));
const CartLightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[7],
    describeChild: true,
    fontSize: 11,
    width: "360px",
    height: "160px",
  },
}));

const Searchbar = () => {
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Box>
      <CssBaseline />
      <AppBar
        elevation={0}
        sx={{
          backgroundColor: "inherit",
          position: "static",
        }}
      >
        <Notification />

        <StyledToolBar>
          <Box flex="1">
            <Link to="/">
              <img
                width="150px"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAACFCAMAAABbjyWoAAAATlBMVEX///8AAADGxsZJSUmKiorOzs5vb29iYmIiIiLg4OCampq0tLT09PQxMTGurq64uLjAwMCAgIB2dnbo6OiUlJTa2toNDQ0aGhpXV1ekpKSURDxpAAAEJUlEQVR4nO2aAXvaIBCGyYG1tbZd6+q2//9Hx0HQWO8iTECzfu/zVFNyibxAIJAYAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgMTD0AR7a69ZIP2dpF3IJtnwaQyF/8nDG85/jQHG+Y+YbtNuDjQmbLkkvAjpkGdrfGadofeP5/C/d3e84T8oJdBgfSI566M3mxUfYc3u58Nmy5tjIfioRUizFEvbWGVr/uI/Miw9hPRQKMOxiF6G4dPr0Wrv/30MmzHCLESaRin3FL1eKbq5UTrUXpA5kX6jQ1Gs/TeFCFqKtG/AlrNPr9HrwbCjtUl8rG46kX5591tuG4/YB2kf4cxipH2GHWf7OSp8sDRjJ9LJepQ2wc6aeMQvPgc5bjNLuabD5cvS2/3YIXNilAy+REPq65J07OasWR+KyQdx216QdOyGzPM+eMaOzKaa5gQ7dm7Hvj4cQTsuiN+h3LgzW07vfRiyrNm+ve4ObrH3juNwGLqGk+ixJdCfVezCaElDlgs9sLUxy0Rxw8YPPzLH/f5iPe6wLn1w+mTHeJ77l24ApO+ObykNvgsrmkc5rEb0xRAl/Xrpy9c0zyZP82dtQbDTg3m0S3FKv0BC+o8O0py5E+WSaJcbrEhLx3eSnohctJgGS/V0pkal0k+9pAfKd56tPtlNlZaa1dXO2dK2QCMVUV4JxSJSflKK7ycds5apEYsoNzgUkXIS7dydpMNv5QYHj2xpp9pJnYKbF6oqPRRLX+zmE3qV3lya8nrjY86yg3VpqbF0uTmZ/Fh2g9VqSeEOpPVmJeVBzXCNc7QZse5cWkjtK600797SFfqxAmkTphpntJRWyr6vtEIzaSW2n/RMs+opXaN150sfDyE/Rz6hkfQgnLmKc7b08deyBusq0udnrXFBK9LufLXjOEXOu7lsIV1LOfOObPJzOeHD7H2zvOo1cyrLD1lqLI0VSNtpCZ/XE5FkVzxZ0H+/zmWcK80l/KWAhbYpZ1iXVpY9Z7Lhalf0jLQ0WRfCSqWvuKar1fmMNJfvl2Xmm0oP1Zp6Tkdm0/K0cqMmHdJGut04LRK0O084pOGx1R2ZjLbq1VBaOkWVx6HSzQlJRawtvXeWbjjLkm677mQ+3U5aypmS3Fu6RvvOn08r0jLt1sj6Sg81VkPliWiJdLs1MnHYpIJVXe0cJcG9l4CrSGc/4Sh7rNNOWsqw0yrPnlfIfyOtXGN8lYnnyG4XRpVutAasSBeMWWILCH1sZlUXPp9u86hWrSXFQ8qb+nqBJqHsaDNmFUoL6eISQMxZzhA3/85Jt9cv1Mfv4pxDbpypOlq8XdTkRRv1ehTeJNHq6dAGhZXVSdQ/vUd2vfTn6hxOF5LjDs9ms370rNeblKKGaruzQpT03dXSAAAAAAAAAAAAAAAAAAAAAAAA2vAX6JsrsTc27poAAAAASUVORK5CYII="
              />
            </Link>
          </Box>

          <Paper
            elevation={0}
            variant="outlined"
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "40%",
              flex: 3,
              mr: 6,
              variant: "outlined",
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search products or brands"
            />
          </Paper>

          <StyledIconBox
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <LightTooltip title={<Signin />} arrow>
              <StyledButton variant="text">
                <Typography variant="p">Sign In</Typography>
                <KeyboardArrowDownIcon />
              </StyledButton>
            </LightTooltip>

            <StyledButton variant="text">
              <StoreIcon
                sx={{
                  pr: 0.5,
                }}
              />
              <Typography variant="p">Stores</Typography>
            </StyledButton>
            <StyledButton variant="text">
              <Inventory2OutlinedIcon
                sx={{
                  pr: 0.5,
                }}
              />
              <Typography variant="p">Purchases</Typography>
            </StyledButton>
            <CartLightTooltip title={<Cart />} arrow placement="bottom-end">
              <Badge
                badgeContent={cart.length}
                sx={{
                  "& .MuiBadge-badge": {
                    right: 17,
                    top: 11,
                  },
                }}
                color="primary"
              >
                <StyledButton
                  variant="text"
                  onClick={() => {
                    navigate("/Cart");
                    dispatch(setIsCartOpen({}));
                  }}
                >
                  <WorkOutlineIcon />
                </StyledButton>
              </Badge>
            </CartLightTooltip>
          </StyledIconBox>
        </StyledToolBar>

        <StyledIconBox
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <LightTooltip title={<Signin />} arrow>
            <StyledButton variant="text">
              <Typography variant="p">Sign In</Typography>
              <KeyboardArrowDownIcon />
            </StyledButton>
          </LightTooltip>
          <StyledButton variant="text">
            <StoreIcon
              sx={{
                pr: 0.5,
              }}
            />
            <Typography variant="p">Stores</Typography>
          </StyledButton>
          <StyledButton variant="text">
            <Inventory2OutlinedIcon
              sx={{
                pr: 0.5,
              }}
            />
            <Typography variant="p">Purchases</Typography>
          </StyledButton>
          <CartLightTooltip title={<Cart />} arrow placement="bottom-end">
            <Badge
              badgeContent={1}
              sx={{
                "& .MuiBadge-badge": {
                  right: 17,
                  top: 11,
                },
              }}
              color="primary"
            >
              <StyledButton
                variant="text"
                onClick={() => {
                  navigate("/Cart");
                  dispatch(setIsCartOpen({}));
                }}
              >
                <WorkOutlineIcon />
              </StyledButton>
            </Badge>
          </CartLightTooltip>
        </StyledIconBox>
        <Divider />
      </AppBar>
    </Box>
  );
};

export default Searchbar;
