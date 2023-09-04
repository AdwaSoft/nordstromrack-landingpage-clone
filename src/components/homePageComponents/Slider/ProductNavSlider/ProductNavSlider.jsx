import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MacSlider from "./MacSlider";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProductWithNavSlider() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ width: "100%", height: "500px", mb: 5 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "black",
        }}
      >
        Summer Beauty from $18
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
          textColor="inherit"
          indicatorColor="primary"
          sx={{
            "& .MuiTabs-indicator ": {
              height: "6px",

              width: "50px",
            },
            // "& .css-lif3mnt-MuiTabs-indicator": {
            //   width: "80px",
            // },
            "& .MuiButtonBase-root": {
              fontSize: "13px",
              fontWeight: "300",
            },
            "& .Mui-selected": {
              fontWeight: "bold",
              fontSize: "13px",
            },
          }}
        >
          <Tab
            sx={{ textTransform: "capitalize" }}
            label="MAC Cosmetics"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ textTransform: "capitalize" }}
            label="Clinique"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ textTransform: "capitalize" }}
            label="Neutrogena"
            {...a11yProps(2)}
          />
          <Tab
            sx={{ textTransform: "capitalize" }}
            label="Sun Bum"
            {...a11yProps(3)}
          />
          <Tab
            sx={{ textTransform: "capitalize" }}
            label="Honest Beauty"
            {...a11yProps(4)}
          />
        </Tabs>
      </Box>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
          <MacSlider />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Clinique
        </TabPanel>
        <TabPanel value={value} index={2}>
          Neutrogena
        </TabPanel>
        <TabPanel value={value} index={3}>
          Sun Bum
        </TabPanel>
        <TabPanel value={value} index={4}>
          Honest Beauty
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
