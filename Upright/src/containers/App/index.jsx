import { Grid } from "@mui/material";
import React from "react";

import { useRoutes } from "react-router-dom";
import Saidbar from "../../components/Saidbar";
import { routes } from "../../routes/routes";

export default () => {
  const content = useRoutes(routes);
  return (
    <>
      <Grid containe>
        <Grid item xs={0} sm={0} md={3} lg={3} xl={3}>
          <Saidbar />
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
          {content}{" "}
        </Grid>
      </Grid>
    </>
  );
};
