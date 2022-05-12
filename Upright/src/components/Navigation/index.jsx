import { Box, Link, Typography } from "@mui/material";
import React from "react";

import HomeIcon from "@mui/icons-material/Home";
import CollectionsIcon from "@mui/icons-material/Collections";
import GroupsIcon from "@mui/icons-material/Groups";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import home from "../../assets/img/121212121212.PNG";
import "./style.css";
export default () => {
  const link = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    transition: "1s",
    height: "10vh",

    ":hover": {
      ml: 5,
    },
  };
  const text = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    height: "10vh",
  };
  return (
    <>
      <Box
        sx={{
          overflow: "hidden",
        }}
      >
        <Link underline="none" sx={link} href="#home">
          <Typography sx={text}>
            <HomeIcon />
            Home
          </Typography>
        </Link>
        <Link underline="none" sx={link} href="#gallery">
          <Typography sx={text}>
            <CollectionsIcon />
            Gallery
          </Typography>
        </Link>
        <Link underline="none" sx={link} href="#about">
          <Typography sx={text}>
            <GroupsIcon />
            About
          </Typography>
        </Link>
        <Link underline="none" sx={link} href="#contact">
          <Typography sx={text}>
            <ContactPhoneIcon />
            Contact
          </Typography>
        </Link>
        <Link underline="none" sx={link}>
          <Typography sx={text}>
            <ExitToAppIcon />
            External
          </Typography>
        </Link>
      </Box>
    </>
  );
};
