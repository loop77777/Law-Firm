import React from "react";
import { Box, Link } from "@mui/material";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "-webkit-fill-available",
        height: "110px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // backgroundColor: "page.secondary",
      }}
      px={3}
    >
      <img src={logo} alt="logo" />
      <Box
        sx={{
          display: "flex",
          gap: "1.5rem",
        }}
      >
        <Link href="/">Home</Link>
        <Link href="/">Attorney</Link>
        <Link href="/">Practice Areas</Link>
        <Link href="/">About Us</Link>
      </Box>
      <Link
        variant="contained"
        sx={{
          border: "2px solid #fff",
          fontWeight: "bold",
          fontSize: "1rem",
          padding: "0.5rem 1rem",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "page.main",
            // backgroundColor: "primary.main",
          },
        }}
      >
        Contact Now
      </Link>
    </Box>
  );
};

export default Header;
