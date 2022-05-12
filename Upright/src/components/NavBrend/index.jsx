import { Box, Typography } from "@mui/material";
import React from "react";

export default () => {
  return (
    <>
      <Box sx={{ width: "100%", height: "150px" }}>
        <Box
          sx={{
            width: "85%",
            height: "100%",
            float: "right",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#006699",
          }}
        >
          <Typography sx={{ fontSize: 40, fontWeight: "545", color: "white" }}>
            Upright
          </Typography>
        </Box>
      </Box>
    </>
  );
};
