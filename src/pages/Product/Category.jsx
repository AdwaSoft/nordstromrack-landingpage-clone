import React from "react";
import { Box, Container, Typography, Breadcrumbs } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import CategoryFilter from "../../components/Filter/CategoryFilter";
import MainContent from "../../components/Product/MainContent";

function handleClick(event) {
  event.preventDefault();
}
const Category = () => {
  return (
    <Box mr={0} ml={0}>
      <Box margin="20px" display="flex" flexDirection="column">
        <Box pt={2} width="100%" mb={3} onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <RouterLink underline="hover" color="inherit" to="/">
              Home
            </RouterLink>
            <RouterLink underline="hover" color="inherit" to="/women">
              Women
            </RouterLink>

            <Typography color="text.primary">Clothing</Typography>
          </Breadcrumbs>
        </Box>
        <Box display="flex" flexDirection="row">
          <CategoryFilter />
          <MainContent />
        </Box>
      </Box>
    </Box>
  );
};

export default Category;
