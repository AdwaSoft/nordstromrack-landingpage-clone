import {
  Box,
  Button,
  Container,
  CssBaseline,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const DisplayInfoTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[7],

    fontSize: "10px",
    width: "200px",
    height: "25px",
    placement: "bottom-start",
    border: "1px solid #dedede",
  },
}));

const First = () => {
  return (
    <Stack mt={2} mb={5} justifyContent="center" alignItems="center" gap={2}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
        }}
      >
        More to Rack,easier and faster.
      </Typography>
      <CssBaseline />
      <DisplayInfoTooltip
        title={
          <Typography
            sx={{
              // padding: 1,
              pl: 1,
              fontSize: 13,
              color: "alltextColor",
            }}
          >
            Sign In or Create an Account
          </Typography>
        }
        arrow
        followCursor
      >
        <Button
          color="alltextcolor"
          variant="outlined"
          sx={{
            fontSize: "12px",
            fontWeight: 400,
            textTransform: "capitalize !important",
            pl: 3,
            pr: 3,
            pt: 1,
            pb: 1,
            borderColor: "primary.main",
            label: "ji",
          }}
        >
          Sign In or Create an Account
        </Button>
      </DisplayInfoTooltip>
    </Stack>
  );
};

export default First;
