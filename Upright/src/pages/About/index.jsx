import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import name from "../../assets/img/img-03.jpg";
import about1 from "../../assets/img/img-about-01.jpg";
import Header from "../../components/Header";
import Carusel from "../../components/Carusel";

export default () => {
  return (
    <>
      <div id="about">
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
                  <Header text="About Upright CSS Template" />
                  <Box sx={{ display: "flex", mt: "7%" }}>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                      <Box sx={{ with: "100%" }}>
                        <Typography fontSize="100%" sx={{ lineHeight: 1.9 }}>
                          If you want to support TemplateMo, you <br /> can
                          contribute a small donation via PayPal. <br /> This
                          will be very helpful. Thank you
                        </Typography>
                        <br />
                        <Typography fontSize="100%" sx={{ lineHeight: 1.9 }}>
                          Aliquam ornare varius erat vel aliquet. <br /> Proin
                          ac neque a tortor tristique semper <br /> eget eget
                          sapien. Morbi vitae diam a odio <br /> lobortis mattis
                          sed nec justo.
                        </Typography>
                        <br />
                        <Typography fontSize="100%" sx={{ lineHeight: 1.9 }}>
                          Suspendisse sagittis tortor vel turpis <br /> aliquet,
                          vitae molestie erat luctus.
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                      <Box sx={{ with: "100%", px: "0.5%" }}>
                        <img src={about1} width="100%" alt="" />

                        <Typography
                          fontSize="100%"
                          sx={{ lineHeight: 1.9, mt: "3%" }}
                        >
                          <br />
                          Duis fringilla eget purus luctus sodales. Sed auctor
                          odio quis ligula dignissim efficitur vitae vitae quam.
                        </Typography>
                      </Box>
                    </Grid>
                  </Box>
                  <Box sx={{ mt: "10%", mb: "15%" }}>
                    <Carusel />
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
