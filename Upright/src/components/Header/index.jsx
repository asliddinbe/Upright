import React from "react";
import { Box, Typography } from "@mui/material";

export default (props) => {
  return (
    <>
      <Box>
        <Typography fontSize="200%" sx={{ color: "#006699" }}>
          {props.text}
        </Typography>

        <hr
          style={{
            width: "100%",
            height: "4px",
            backgroundColor: "#CCCCCC",
            border: 0,
            opacity: 1,
          }}
        />
      </Box>
    </>
  );
};
