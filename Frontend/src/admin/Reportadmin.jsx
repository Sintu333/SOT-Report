//import React from "react";
import Dashboardadmin from "./Dashboardadmin";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ReportList from "./reportad/ReportList";

export default function Reportadmin() {
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
          <ReportList />
        </Box>
      </Box>
    </>
  );
}
