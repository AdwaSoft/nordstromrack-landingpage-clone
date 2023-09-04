import React, { useState, useEffect } from "react";
import axios from "axios";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Products from "./Products";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { clothingCategories } from "../../data/data";
import {
  Box,
  CssBaseline,
  Divider,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SortProduct from "./SortProduct";

const StyledTab = styled(Tab)(({ theme }) => ({
  alignSelf: "flex-start",
  textTransform: "capitalize !important",
  fontSize: "14px",
  // color: theme.palette.alltextcolor.main,

  fontWeight: 300,
}));

const SubSubCatogoryTab = () => {
  const [value, setValue] = React.useState("all");
  const [subsubCategory, setSubSubCategory] = useState([]);

  useEffect(() => {
    const fetchSSCategory = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/Sub-sub-categories",
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        setSubSubCategory(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSSCategory();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box width="80">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        // visibleScrollbar
        textColor="inherit"
        sx={{
          pl: "0px",
        }}
        TabIndicatorProps={{
          style: {
            background: "black",
            height: "5px",
          },
        }}
        ScrollButtonComponent={(props) => {
          if (props.direction === "left" && !props.disabled) {
            return (
              <IconButton {...props}>
                <ArrowBackIosNewIcon
                  style={{
                    marginLeft: "0px",
                    marginRight: "0px",
                    paddingRight: "0px",
                    fontSize: "15px",
                  }}
                  color="#007474"
                />
              </IconButton>
            );
          } else if (props.direction === "right" && !props.disabled) {
            return (
              <IconButton {...props}>
                <ArrowForwardIosIcon
                  style={{
                    marginLeft: "7px",
                    fontSize: "15px",
                  }}
                  color="#007474"
                  icon="arrow-right"
                />
              </IconButton>
            );
          } else {
            return null;
          }
        }}
      >
        <Tab
          sx={{
            fontWeight: "bold",
            textTransform: "capitalize !important",
            fontSize: "14px",
          }}
          value="all"
          label="All Colthing"
        />
        {clothingCategories.map((sscategory) => (
          <StyledTab
            label={sscategory?.name}
            key={sscategory?.name}
            value={sscategory.name}
          />
        ))}
        {/* <Tab label="activewear" value="activewear" /> */}
      </Tabs>
      <Divider />
      <SortProduct />
      <Box>
        <Products category={value} />
      </Box>
    </Box>
  );
};

export default SubSubCatogoryTab;
