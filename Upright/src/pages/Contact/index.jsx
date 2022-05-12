import {
  Box,
  Button,
  Container,
  Grid,
  InputBase,
  MenuItem,
  Select,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import name from "../../assets/img/img-04.jpg";
import Header from "../../components/Header";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Map from "../../components/Map";
// const locations = require("./locations.json");
import CallIcon from "@mui/icons-material/Call";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
const style = [
  {
    backgroundColor: "transparent",
    ":hover": { color: "blue" },
  },
];
export default () => {
  return (
    <>
      <div id="contact">
        <Grid container>
          <Grid container xs={12} sm={5} md={5} lg={5} xl={5}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              style={{
                backgroundImage: `url(${name})`,
                // backgroundRepeat: "repeat-y",
                backgroundSize: "auto",
                backgroundAttachment: "fixed",
                minHeight: "40vh",
                maxWidth: "100%",
                // border: 2,
              }}
            ></Grid>
          </Grid>
          <Grid item xs={12} sm={7} md={7} lg={7} xl={7} sx={{ my: "3%" }}>
            <Box sx={{ with: "100%" }}>
              <Container>
                <Box sx={{ px: "4.4%" }}>
                  <Header text="Contact Upright" />
                  <Box>
                    <Grid container sx={{ my: "5%" }}>
                      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Box>
                          <InputBase
                            sx={{
                              border: 1,
                              borderColor: "#CCCCCC",
                              px: "3%",
                              py: "2%",
                              width: "90%",
                              my: "3%",
                            }}
                            placeholder="Name"
                          />
                          <InputBase
                            sx={{
                              border: 1,
                              borderColor: "#CCCCCC",
                              px: "3%",
                              py: "2%",
                              width: "90%",
                              my: "3%",
                            }}
                            placeholder="Email
                                                    "
                          />
                          <Box sx={{ minWidth: 120, width: "90%" }}>
                            <FormControl fullWidth>
                              <NativeSelect
                                defaultValue={30}
                                inputProps={{
                                  name: "age",
                                  id: "uncontrolled-native",
                                }}
                                sx={{
                                  border: 1,
                                  borderColor: "#CCCCCC",
                                  px: "3%",
                                  py: "2%",
                                  color: "#8C8C8C",
                                  my: "5%",
                                }}
                              >
                                <option value={10}>UI / UX</option>
                                <option value={20}>Subject</option>
                                <option value={20}>Creative Design</option>
                                <option value={30}>Sales & Marketing</option>
                              </NativeSelect>
                            </FormControl>
                          </Box>
                          <TextareaAutosize
                            aria-label="empty textarea"
                            placeholder="Messej"
                            style={{
                              padding: "10px",
                              maxWidth: "90%",
                              minWidth: "90%",
                              width: "90%",
                              height: "25vh",
                              my: "3%",
                              borderColor: "#CCCCCC",
                            }}
                          />
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: "#006699",
                              borderRadius: 0,
                              width: "150px",
                              py: "3%",
                              my: "3%",
                            }}
                          >
                            Send
                          </Button>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Box sx={{ maxHeight: "50%", width: "90%" }}>
                          <Map />
                          <Typography sx={{ my: "5%" }}>
                            120-240 eget purus luctus sodales. Sed auctor odio
                            quis ligula dignissim efficitur vitae vitae quam
                            16502
                          </Typography>
                          <Typography
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              my: "3%",
                            }}
                          >
                            <CallIcon />
                            Tel: 010-020-0340
                          </Typography>
                          <Typography
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              my: "3%",
                            }}
                          >
                            <AlternateEmailIcon />
                            Email: info@company.com
                          </Typography>
                          <Box sx={{ display: "flex", gap: 3 }}>
                            <FacebookIcon sx={style} />
                            <TwitterIcon sx={style} />
                            <InstagramIcon sx={style} />
                            <YouTubeIcon sx={style} />
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Container>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
