import Header from "../../components/Header";
import React, { useState, useEffect } from "react";
import { Button, Box, Grid, Typography, Container } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";

import TableRowsIcon from "@mui/icons-material/TableRows";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import PetsIcon from "@mui/icons-material/Pets";
import ApartmentIcon from "@mui/icons-material/Apartment";
import name from "../../assets/img/img-02.jpg";

import portrait1 from "../../assets/img/portraits/portrait-01.jpg";
import portrait3 from "../../assets/img/portraits/portrait-03.jpg";
import portrait2 from "../../assets/img/portraits/portrait-02.jpg";
import portrait4 from "../../assets/img/portraits/portrait-04.jpg";
import portrait5 from "../../assets/img/portraits/portrait-05.jpg";
import portrait6 from "../../assets/img/portraits/portrait-06.jpg";
import portrait7 from "../../assets/img/portraits/portrait-07.jpg";
import portrait8 from "../../assets/img/portraits/portrait-08.jpg";
import portrait9 from "../../assets/img/portraits/portrait-09.jpg";

import nature1 from "../../assets/img/nature/nature-01.jpg";
import nature2 from "../../assets/img/nature/nature-02.jpg";
import nature3 from "../../assets/img/nature/nature-03.jpg";
import nature4 from "../../assets/img/nature/nature-04.jpg";
import nature5 from "../../assets/img/nature/nature-05.jpg";
import nature6 from "../../assets/img/nature/nature-06.jpg";
import nature7 from "../../assets/img/nature/nature-07.jpg";
import nature8 from "../../assets/img/nature/nature-08.jpg";
import nature9 from "../../assets/img/nature/nature-09.jpg";

import animals1 from "../../assets/img/animals/animal-01.jpg";
import animals2 from "../../assets/img/animals/animal-02.jpg";
import animals3 from "../../assets/img/animals/animal-03.jpg";
import animals4 from "../../assets/img/animals/animal-04.jpg";
import animals5 from "../../assets/img/animals/animal-05.jpg";
import animals6 from "../../assets/img/animals/animal-06.jpg";
import animals7 from "../../assets/img/animals/animal-07.jpg";
import animals8 from "../../assets/img/animals/animal-08.jpg";
import animals9 from "../../assets/img/animals/animal-09.jpg";

import buildings1 from "../../assets/img/buildings/building-01.jpg";
import buildings2 from "../../assets/img/buildings/building-02.jpg";
import buildings3 from "../../assets/img/buildings/building-03.jpg";
import buildings4 from "../../assets/img/buildings/building-04.jpg";
import buildings5 from "../../assets/img/buildings/building-05.jpg";
import buildings6 from "../../assets/img/buildings/building-06.jpg";
import buildings7 from "../../assets/img/buildings/building-07.jpg";
import buildings8 from "../../assets/img/buildings/building-08.jpg";
import buildings9 from "../../assets/img/buildings/building-09.jpg";
export default () => {
  const data = {
    all: [
      portrait1,
      nature1,
      buildings1,
      animals1,

      portrait2,
      nature2,
      animals2,
      buildings2,
      buildings3,
    ],
    portraits: [
      portrait1,
      portrait2,
      portrait3,
      portrait4,
      portrait5,
      portrait6,
      portrait7,
      portrait8,
      portrait9,
    ],
    nature: [
      nature1,
      nature2,
      nature3,
      nature4,
      nature5,
      nature6,
      nature7,
      nature8,
      nature9,
    ],
    animals: [
      animals1,
      animals2,
      animals3,
      animals4,
      animals5,
      animals6,
      animals7,
      animals8,
      animals9,
    ],
    buildings: [
      buildings1,
      buildings2,
      buildings3,
      buildings4,
      buildings5,
      buildings6,
      buildings7,
      buildings8,
      buildings9,
    ],
  };
  const [week, setWeek] = useState([]);

  useEffect(() => {
    All();
  }, []);

  const Portraits = () => {
    setWeek(data.portraits);
  };

  const Nature = () => {
    setWeek(data.nature);
  };

  const Animals = () => {
    setWeek(data.animals);
  };

  const Buildings = () => {
    setWeek(data.buildings);
  };
  const All = () => {
    setWeek(data.all);
  };

  return (
    <>
      <div id="gallery">
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
            <Container>
              <Header text="Upright Gallery" />
              <Grid item>
                <Box sx={{ pt: "5%", pb: "5%" }}>
                  <Button sx={{}} onClick={All}>
                    {" "}
                    <TableRowsIcon sx={{ fontSize: "18px" }} /> All
                  </Button>
                  <Button sx={{ fontSize: "13px" }} onClick={Portraits}>
                    {" "}
                    <PermContactCalendarIcon sx={{ fontSize: "18px" }} />
                    Portraits
                  </Button>
                  <Button
                    sx={{ fontSize: "13px" }}
                    outline={true}
                    onClick={Nature}
                  >
                    {" "}
                    <EnergySavingsLeafIcon sx={{ fontSize: "18px" }} />
                    Nature
                  </Button>
                  <Button
                    sx={{ fontSize: "13px" }}
                    outline={true}
                    onClick={Animals}
                  >
                    <PetsIcon sx={{ fontSize: "18px" }} />
                    Animals
                  </Button>
                  <Button
                    sx={{ fontSize: "13px" }}
                    outline={true}
                    onClick={Buildings}
                  >
                    <ApartmentIcon sx={{ fontSize: "18px" }} /> Buildings
                  </Button>
                </Box>
              </Grid>

              <Grid item>
                <Grid container  textAlign={'center'} >
                  {" "}
                  {week.map((item, indx) => (
                    <Grid item key={indx} xs={12} sm={6} lg={4}>
                      <Box>
                        <ImageListItem>
                          <img
                            src={item}
                            srcSet={item}
                            loading="lazy"
                            style={{
                              width: "100%",
                              ":hover": {
                                opacity: 0.5,
                              },
                            }}
                          />
                        </ImageListItem>

                        <Typography
                          sx={{
                            gap: 20,
                            opacity: 0,
                            position: "relative",
                            bottom: 30,
                            transition: "0.6s",
                            ":hover": {
                              bgcolor: "rgba(255, 255,255,000)",
                              color: "#fff",
                              fontWeight: "bold",
                              backgroundSize: 80,
                              backgroundRepeat: "no-repeat",
                              opacity: 0.5,
                            },
                          }}
                        >
                          Dremy honey
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
