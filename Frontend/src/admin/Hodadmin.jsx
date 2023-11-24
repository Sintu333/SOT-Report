import React from "react";
import Dashboardadmin from "./Dashboardadmin";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HodList from "./hodad/HodList";

export default function Hodadmin() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Dashboardadmin />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography paragraph>
            <br />
            <br />
            <br />
          </Typography>
          <HodList />
        </Box>
      </Box>
    </>
  );
}
