import { Box, Container, Divider } from "@mui/material";
import React from "react";
import Searchbar from "./Searchbar";

import Navbar from "./Navbar";
import WomensMenu from "../menu/WomensMenu";

const NavBarContainer = () => {
  return (
    <Box>
      <Searchbar />

      <Navbar />
    </Box>
  );
};

export default NavBarContainer;
