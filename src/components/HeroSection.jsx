import { Box, Button, Typography } from "@mui/material";
import React from "react";
import heroImage from "../assets/HeroImage.svg";

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      px={3}
    >
      <section
        style={{
          display: "grid",
          gap: "3rem",
        }}
      >
        <Box>
          <Typography variant="h2">You don't have to</Typography>
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            Fight them Alone.
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              textWrap: "balance",
            }}
          >
            We are here to help you with all your legal needs. We are a team of
            experienced lawyers who are passionate about helping you. We have
            been in business for over 10 years and have helped thousands of
            people just like you.
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1">
            <input type="text" />
            <Button variant="contained">Let's Talk</Button>
          </Typography>
        </Box>
      </section>
      <Box width={"27.71944rem"} height={"35.55675rem"}>
        <img
          src={heroImage}
          width={"100%"}
          height={"100%"}
          alt="Criminal Lawyer"
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
