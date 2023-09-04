import {
  Badge,
  Box,
  Button,
  IconButton,
  Tab,
  Tabs,
  colors,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { FormatAlignJustify, Height, TabOutlined } from "@mui/icons-material";

const StyledBox = styled(Box)({
  m: 0,
  p: 0,
});
const ColorSelector = ({ product }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      sx={{
        "& .MuiTabs-root": {
          "& .MuiTabs-scroller": {
            "& .MuiTabs-flexContainer": {
              "& .MuiBox-root": {
                "& .MuiButtonBase-root": {},
              },
            },
          },
        },
        "& .MuiBox-root": {
          dipslay: "flex",
          flexDirection: "row",

          gap: "0px",
        },
        "& .MuiButtonBase-root": {},
        "& .MuiTabs_indicator": {
          display: "none",
        },

        "& .MuiTouchRipple-root": {
          display: "none",
        },
      }}
      TabIndicatorProps={{
        style: {
          display: "none",
        },
      }}
      value={value}
      onChange={handleChange}
      scrollButtons="auto"
      variant="scrollable"
      style={{ padding: 0, paddingRight: 0, margin: 0 }}
    >
      <Box display="flex" ml={0} mr={0} pl={0} pr={0} alignContent="flex-start">
        {/* {product?.attributes.colors.map((color) => ( */}

        <Tab
          icon={
            <Box
              width="13px"
              height="13px"
              borderRadius="50%"
              margin="0px 0px"
              backgroundColor={product?.attributes.colors}
            />
          }
          // key={color}
        />
        {/* ))} */}
      </Box>
    </Tabs>
  );
};

export default ColorSelector;
