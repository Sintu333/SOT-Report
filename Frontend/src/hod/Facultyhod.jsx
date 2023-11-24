//import React from "react";
import Dashboardhod from "./Dashboardhod";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Reportfaculty from "./reportfaculty/Reportfaculty";

export default function Facultyhod() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Dashboardhod />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography paragraph>
            <br />
            <br />
            <br />
          </Typography>
          <Reportfaculty />
        </Box>
      </Box>
    </>
  );
}
