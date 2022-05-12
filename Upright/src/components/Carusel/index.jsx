import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import men1 from "../../assets/img/about-01.jpg";
import men2 from "../../assets/img/about-02.jpg";
import men3 from "../../assets/img/about-03.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper";
import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import second from "../../assets/img/about-01.jpg";
const Hov = () => {
  const [style, setStyle] = useState({ display: "none" });
  return (
    <div className="App">
      <Box
        sx={{
          border: 2,
          minHeight: "20vh",
          width: "100%",
        }}
        onMouseEnter={(e) => {
          setStyle({ display: "block" });
        }}
        onMouseLeave={(e) => {
          setStyle({ display: "none" });
        }}
      >
        <Box style={style}>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </Box>
      </Box>
    </div>
  );
};
const data = [
  { img: men1, text: "Calvin Walk" },
  { img: men2, text: "Jenifer Soft" },
  { img: men3, text: "David Rock" },
  { img: men1, text: "Calvin Second" },
  { img: men1, text: "Calvin Walk" },
  { img: men2, text: "Jenifer Soft" },
  { img: men3, text: "David Rock" },
  { img: men1, text: "Calvin Second" },
];
const style = [
  {
    color: "white",
    backgroundColor: "transparent",
    ":hover": { color: "blue" },
  },
];
const CardCarusel = data.map((item) => (
  <SwiperSlide>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "space-between",
        p: "5%",
        // border: 1,
      }}
    >
      <Box className="container">
        <img src={item.img} alt="" width="100%" class="image" />

        <Box class="overlay">
          <Box class="text">
            <FacebookIcon sx={style} />
            <TwitterIcon sx={style} />
            <InstagramIcon sx={style} />
          </Box>
        </Box>
      </Box>

      <Typography
        sx={{
          textAlign: "start",
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography sx={{ fontSize: "150%", color: "#3BB1B1" }}>
          {item.text}
        </Typography>
        <Typography fontSize="115%">
          Aliquam efficitur, velit ut aliquet molestie, nulla dolor faucibus
          neque, quis hendrerit.
        </Typography>
        <Typography sx={{ fontSize: "150%", color: "#3BB1B1" }}>
          Founder and CEO
        </Typography>
      </Typography>
    </Box>
  </SwiperSlide>
));
export default () => {
  return (
    <>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 1,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
      >
        <Box sx={{ width: "100%", my: "5%", p: "2%" }}>
          <Box
            sx={{
              display: "flex",
            }}
          >
            {CardCarusel}
          </Box>
        </Box>
      </Swiper>
    </>
  );
};

////////////////////////////////////////////////////////////////////////////////////////////

// import { Box, Container, Typography } from "@mui/material";
// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import men1 from "../../assets/img/about-01.jpg";
// import men2 from "../../assets/img/about-01.jpg";
// import men3 from "../../assets/img/about-01.jpg";
// import men4 from "../../assets/img/about-01.jpg";
// import StarIcon from "@mui/icons-material/Star";
// const responsive = {
// 	superLargeDesktop: {
// 		breakpoint: { max: 4000, min: 3000 },
// 		items: 5,
// 	},
// 	desktop: {
// 		breakpoint: { max: 3000, min: 1024 },
// 		items: 3,
// 	},
// 	tablet: {
// 		breakpoint: { max: 1024, min: 464 },
// 		items: 2,
// 	},
// 	mobile: {
// 		breakpoint: { max: 464, min: 0 },
// 		items: 1,
// 	},
// };
// const data = [
// 	{ rasm: men1, text1: "	Clasic Spiring", Narx: "$120.00", yulduz: "*****" },
// 	{ rasm: men2, text1: "	Clasic Spiring", Narx: "$120.00", yulduz: "*****" },
// 	{ rasm: men3, text1: "	Clasic Spiring", Narx: "$120.00", yulduz: "*****" },
// 	{ rasm: men1, text1: "	Clasic Spiring", Narx: "$120.00", yulduz: "*****" },
// 	{ rasm: men2, text1: "	Clasic Spiring", Narx: "$120.00", yulduz: "*****" },
// 	{ rasm: men3, text1: "	Clasic Spiring", Narx: "$120.00", yulduz: "*****" },
// ];
// const Mencard = data.map((item) => (
// 	<Box sx={{ width: "350px", displey: "felx", justifyContent: "center" }}>
// 		<img src={item.rasm} alt="" width="90%" />
// 		<Box
// 			sx={{
// 				width: "100%",
// 				display: { md: "flex", sm: "none", sm: "flex" },
// 				flexDirection: "row",
// 				justifyContent: "space-between",
// 			}}
// 		>
// 			<Typography sx={{ displey: "flex", flexWrap: "wrap" }}>
// 				<Typography variant="h6" fontWeight="bold">
// 					{item.text1}
// 				</Typography>
// 				<Typography>{item.Narx}</Typography>
// 			</Typography>
// 			<Typography>
// 				<StarIcon fontSize="string" />
// 				<StarIcon fontSize="string" />
// 				<StarIcon fontSize="string" />
// 				<StarIcon fontSize="string" />
// 				<StarIcon fontSize="string" />
// 			</Typography>
// 		</Box>
// 	</Box>
// ));

// const Gallery = () => {
// 	return (
// 		<div>
// 			<Container maxWidth="lg">
// 				<Box sx={{ paddingY: "10%" }}>
// 					<Typography variant="h4" fontWeight="bold">
// 						Men's latest
// 					</Typography>
// 					<Typography>
// 						Lorem ipsum dolor sit amet consectetur Sapiente, voluptatem.
// 					</Typography>
// 					<Box sx={{ paddingY: "50px" }}>
// 						<Carousel responsive={responsive}>{Mencard}</Carousel>
// 					</Box>
// 				</Box>
// 			</Container>
// 			<hr />
// 		</div>
// 	);
// };
// export default Gallery;
