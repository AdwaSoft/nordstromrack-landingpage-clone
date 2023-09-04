import {
  Box,
  Button,
  Container,
  CssBaseline,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import MobileScreenShareOutlinedIcon from "@mui/icons-material/MobileScreenShareOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
const StyledFooterButton = styled(Button)(({ theme }) => ({
  disableElevation: true,
  disableFocusRipple: true,
  textTransform: "capitalize !important",
  fontSize: "14px",
  color: theme.palette.alltextcolor.main,
  paddingBottom: "0px",
  fontWeight: 300,
  "&:hover": {
    color: theme.palette.primary.main,
    textDecoration: "underline",
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  paddingLeft: "10px",
}));
const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "start",
  alignItems: "start",
  flexDirection: "column",
  // width: "15%",
}));
const Footer = () => {
  return (
    <Box
      sx={{
        height: "370px",
        display: "flex",
        alignItems: "space-around",
        justifyContent: "space-between",
        flexDirection: "column",
        backgroundColor: "#F0F3F5",
        mt: 20,
      }}
    >
      <Container maxWidth="xl">
        <CssBaseline />
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="space-between"
          flexDirection="row"
          pt={4}
          mb={3}
          gap={6}
        >
          <StyledBox>
            <StyledTypography>Customer Service</StyledTypography>
            <StyledFooterButton component={Link} variant="text">
              Order Status
            </StyledFooterButton>
            <StyledFooterButton variant="text">GUest Return</StyledFooterButton>
            <StyledFooterButton variant="text">
              Shipping & Return Policy
            </StyledFooterButton>
            <StyledFooterButton variant="text">Gift Cards</StyledFooterButton>
            <StyledFooterButton
              sx={{
                justifySelf: "flex-start",
                alignSelf: "start",
              }}
              variant="text"
            >
              FAQ
            </StyledFooterButton>
            <StyledFooterButton variant="text">Contact Us</StyledFooterButton>
          </StyledBox>
          <StyledBox>
            <StyledTypography>About Us</StyledTypography>
            <StyledFooterButton variant="text">
              About Our Brand
            </StyledFooterButton>
            <StyledFooterButton variant="text">
              The Nordy club
            </StyledFooterButton>
            <StyledFooterButton variant="text">
              Store Locator
            </StyledFooterButton>
            <StyledFooterButton variant="text">All Brands</StyledFooterButton>
            <StyledFooterButton variant="text">Careers</StyledFooterButton>

            <StyledFooterButton variant="text">
              Get Email Updates
            </StyledFooterButton>
            <StyledFooterButton variant="text">
              Nordstrom Blog
            </StyledFooterButton>
            <StyledFooterButton variant="text">
              Nordy Podcast
            </StyledFooterButton>
          </StyledBox>
          <StyledBox>
            <StyledTypography>NordStrom Rack & The Community</StyledTypography>
            <StyledFooterButton variant="text">
              Corporate Social Responsibility
            </StyledFooterButton>
            <StyledFooterButton variant="text">
              Diversity,Inclusion & Belonging
            </StyledFooterButton>
            <StyledFooterButton variant="text">
              Big Brothers Big Sisters
            </StyledFooterButton>
            <StyledFooterButton variant="text">
              Donate Clothes
            </StyledFooterButton>
          </StyledBox>
          <StyledBox>
            <StyledTypography>Nordstrom Card</StyledTypography>
            <StyledFooterButton variant="text">
              Apply For a Nordstrom Card
            </StyledFooterButton>
            <StyledFooterButton variant="text">Payy My Bill</StyledFooterButton>
            <StyledFooterButton variant="text">
              Manage My Nordstrom Card
            </StyledFooterButton>
          </StyledBox>
          <StyledBox>
            <StyledTypography>Nordstrom,Inc.</StyledTypography>
            <StyledFooterButton variant="text">Nordstrom</StyledFooterButton>
            <StyledFooterButton variant="text">HauteLook</StyledFooterButton>
            <StyledFooterButton variant="text">
              Inverstor Relations
            </StyledFooterButton>
            <StyledFooterButton variant="text">
              Press release
            </StyledFooterButton>
            <StyledFooterButton variant="text">
              Nordstrom Media Network
            </StyledFooterButton>
          </StyledBox>

          <Box
            width="300px"
            pt={3}
            display="flex"
            flexDirection="column"
            rowGap={4}
          >
            <Box display="flex" alignItems="start" gap={2}>
              <IconButton disabled>
                <MobileScreenShareOutlinedIcon />
              </IconButton>
              <StyledFooterButton>Download Our App</StyledFooterButton>
            </Box>

            <Box display="flex" gap={2}>
              <IconButton>
                <FacebookOutlinedIcon />
              </IconButton>
              <IconButton>
                <TwitterIcon />
              </IconButton>
              <IconButton>
                <PinterestIcon />
              </IconButton>
              <IconButton>
                <InstagramIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap={6}>
          <StyledFooterButton>Privacy</StyledFooterButton>
          <StyledFooterButton>
            Don Not Sell My Personal Information
          </StyledFooterButton>
          <StyledFooterButton>Terms & Conditions</StyledFooterButton>
          <StyledFooterButton>Intereset Based Ads</StyledFooterButton>
          <StyledFooterButton>California Supply Chain Act</StyledFooterButton>
          <Typography> © 2023 Norstrom Rack</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
