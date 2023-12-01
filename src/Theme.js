import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#E3B748", // Yellow
    },
    page: {
      main: "#1D1D1D", // Black
      secondary: "#111111", // Dark Black
    },
    text: {
      primary: "#ffffff",
    },
    icon: {
      primary: "#FDD65B", // Yellow
    },
    newsLetter: {
      background: "rgba(71, 71, 71, 0.50)", // Grey
    },
    footer: {
      background: "#1D1D1D", // Black
    },
  },
  typography: {
    fontFamily: "Inter",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "2.6875rem",
          background: "#E3B748",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Inter",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          textDecoration: "none",
          fontWeight: 500,
          fontSize: "0.8rem",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
