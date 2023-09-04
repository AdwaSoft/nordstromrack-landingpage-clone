import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";

import List from "@mui/material/List";

import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { styled } from "@mui/material/styles";
import "./style.css";
import StickyBox from "react-sticky-box";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import {
  Breadcrumbs,
  Button,
  ListItemIcon,
  Paper,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Gifts from "../homePageComponents/BigPromotion/Gifts";
import { CheckBox } from "@mui/icons-material";
const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  textTransform: "capitalize !important",
  fontSize: "14px",
  color: "text.black",
  fontWeight: "600",

  [theme.breakpoints.down("sm")]: {
    fontSize: "13px",
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "capitalize !important",
  fontSize: "13px",
  color: "black",
  fontWeight: "bold",
  justifyContent: "space-between",

  [theme.breakpoints.down("sm")]: {
    fontSize: "13px",
  },
}));

const StyledAddOutlinedIcon = styled(AddOutlinedIcon)(({ theme }) => ({
  fontSize: "small",
  // justifySelf: "flex-end",
  fontWeight: "100",

  // color: theme.palette.alltextcolor.main,
}));

export default function CategoryFilter() {
  const [sizeClicked, setSizeClicked] = useState(false);
  const isXsDevice = useMediaQuery("(min-width:510px)");
  return (
    <Box width="15.7%" mr={0}>
      <StickyBox offsetTop={20}>
        <Box
          className="sidebar"
          display="flex"
          flexDirection="column"
          alignItems="start"
          justifyContent="flex-start"
          maxHeight="100vh"
          overflow="auto"
          // pl={3}
          pr={0}
        >
          <Box width="100%">
            <Divider />

            <List>
              <StyledButton
                fullWidth
                variant="text"
                endIcon={
                  !sizeClicked ? (
                    <StyledAddOutlinedIcon />
                  ) : (
                    <RemoveOutlinedIcon />
                  )
                }
                onClick={() => setSizeClicked(!sizeClicked)}
              >
                Size
              </StyledButton>

              {sizeClicked && <CheckBox label="small" />}
            </List>

            <Divider />
            <List>
              <StyledButton
                fullWidth
                variant="text"
                endIcon={<AddOutlinedIcon />}
              >
                Color
              </StyledButton>
            </List>
            <Divider />
            <List>
              <StyledButton
                fullWidth
                variant="text"
                endIcon={<AddOutlinedIcon />}
              >
                Brand
              </StyledButton>
            </List>
            <Divider />
            <List>
              <StyledButton
                sx={
                  {
                    // gap: "80px",
                  }
                }
                fullWidth
                variant="text"
                endIcon={<AddOutlinedIcon />}
              >
                Length
              </StyledButton>
            </List>
            <Divider />
            <List>
              <StyledButton
                fullWidth
                variant="text"
                endIcon={<AddOutlinedIcon />}
              >
                Material
              </StyledButton>
            </List>
            <Divider />
            <List>
              <StyledButton
                fullWidth
                variant="text"
                endIcon={<AddOutlinedIcon />}
              >
                Neck Style
              </StyledButton>
            </List>
            <Divider />
            <List>
              <StyledButton
                fullWidth
                variant="text"
                endIcon={<AddOutlinedIcon />}
              >
                Occasion
              </StyledButton>
            </List>

            <Divider />
            <List>
              <StyledButton
                fullWidth
                variant="text"
                endIcon={<AddOutlinedIcon />}
              >
                Price
              </StyledButton>
            </List>
            <Divider />
            <List>
              <StyledButton
                fullWidth
                variant="text"
                endIcon={<AddOutlinedIcon />}
              >
                Sleeve Length
              </StyledButton>
            </List>
            <Divider />
            <List>
              <StyledButton
                fullWidth
                variant="text"
                endIcon={<AddOutlinedIcon />}
              >
                Style
              </StyledButton>
            </List>
            <Divider />
          </Box>

          <Divider />
        </Box>
      </StickyBox>
    </Box>
  );
}
