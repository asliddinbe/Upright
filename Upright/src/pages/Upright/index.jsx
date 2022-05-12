import { Box, Container, Grid, Typography, Button, Link } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import name from "../../assets/img/img-01.jpg";
import name1 from "../../assets/img/rasm1.PNG";
import name2 from "../../assets/img/rasm2.PNG";
import name3 from "../../assets/img/img-home-01.jpg";

export default () => {
  const data = [
    {
      rasm: require("../../assets/img/1.png"),
      text: "Upright is free responsive HTML CSS \
        template by TemplateMo. You can \
         feel free to adapt and apply this \
          layout for your commercial or non-  commercial websites.",
      sana: "24 September 2020",
    },
    {
      rasm: require("../../assets/img/3.png"),
      text: "You are not allowed to re-distribute \
       this te  mplate as a ZIP file on any \
       template collection website for the template\
        download purpose. Please contact us for more information.",
      sana: "22 September 2020",
    },
    {
      rasm: require("../../assets/img/2.png"),
      text: "You may want to support us by making a small donation via PayPal. That will be helpful. We hope you like this Upright Template for your work.",
      sana: "12 September 2020",
    },
  ];
  return (
    <>
      <div id="home">
        <Grid container>
          <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
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
                height: "100%",
                maxWidth: "100%",
                // border: 2,
              }}
            ></Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={7}
            md={7}
            lg={7}
            xl={7}
            sx={{
              my: "3%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {/* header */}
            <Container>
              <Header text="Welcome to Upright" />
              <Box sx={{ pt: "7%" }} />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                  <Box sx={{ width: "100%" }}>
                    <Box sx={{ height: "190px" }}>
                      <img
                        src={name1}
                        width={"40%"}
                        style={{ float: "right" }}
                      />
                    </Box>
                    <Typography sx={{ lineHeight: 2 }}>
                      Leftmost column is placed for logo and main menu. After
                      that is an image column. Right side column is a 100%
                      full-width content. <br /> <br /> Right side can put many
                      contents and it will scroll up / down. Left side is fixed.
                      Parallax Image changes for different pages.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <Box sx={{ height: "190px" }}>
                    <img src={name2} width={"40%"} style={{ float: "right" }} />
                  </Box>
                  <Typography sx={{ lineHeight: 2 }}>
                    Quisque tincidunt, sem rutrum euismod ornare, tortor arcu
                    tempus lorem, accumsan suscipit mauris lorem at lorem.
                    Praesent feugiat mi at tortor tincidunt, ac consequat ante
                    cursus. <br /> <Box sx={{ mb: "5%" }} />
                    <Button
                      sx={{
                        border: 1,
                        borderRadius: "0px",
                        float: "right",
                        fontSize: 18,
                        pt: 1.5,
                        pb: 1.5,
                        pl: 5,
                        pr: 5,
                        color: "white",
                        borderColor: "#006698",
                        bgcolor: "#006698",
                        ":hover": {
                          color: "#006698",
                          borderColor: "white",
                          bgcolor: "white",
                        },
                      }}
                    >
                      Next Page
                    </Button>
                  </Typography>
                </Grid>
              </Grid>
            </Container>
            <Container>
              <hr
                style={{
                  width: "40%",
                  marginTop: "10%",
                  marginBottom: "5%",
                }}
              />
            </Container>
            <Container>
              <Grid
                container
                item
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  widht: "90%",
                }}
              >
                <Grid xs={12} sm={12} md={8} lg={8} xl={8} item>
                  {data.map((item, idx) => (
                    <Box key={idx} sx={{ display: "flex", mt: "5%" }}>
                      <img src={item.rasm} width={"15%"} height={"15%"} />
                      <Typography>
                        <Link sx={{ textDecoration: "none", ml: "10%" }}>
                          {item.sana}
                        </Link>
                        <Typography
                          sx={{
                            ml: "10%",
                            color: "#666666",
                            lineHeight: "27px",
                          }}
                        >
                          {item.text}
                        </Typography>
                      </Typography>
                    </Box>
                  ))}
                </Grid>
                <Grid xs={12} sm={12} md={4} lg={4} xl={4} item>
                  <Box sx={{ ml: "10%" }}>
                    <img src={name3} width={"90%"} height={"400px"} />
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
