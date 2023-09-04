import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#186ADC",
      light: "#327FEF",
      contrastText: "#fff",
    },
    secondary: {
      main: "#030202",
    },
    alltextcolor: {
      main: "#030202",
      light: "#f5f5f5",
    },
    common: {
      white: "white",
    },

    bigpromo: {
      main: "#98C6C2",
    },
    bigpromo2: {
      main: "#FFEB99",
    },
    warning: {
      main: "#fe201f",
    },
    commonwhite: {
      main: "#ececec",
    },
  },
  typography: {
    fontSize: 12,
  },

  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "14px",
          color: "black",
          backgroundColor: "black",
          border: "1px solid #dedede",
          borderRadius: 0,
        },
        arrow: {
          fontSize: 16,
          width: 17,
          "&::before": {
            border: "1px solid #dedede",
            backgroundColor: "#fff",
            boxSizing: "border-box",
          },
        },
      },
    },
  },
});
