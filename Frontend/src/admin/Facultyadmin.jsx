import React from "react";
import Dashboardadmin from "./Dashboardadmin";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FacultyList from "./facultyad/FacultyList";

export default function Facultyadmin() {
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
          <FacultyList />
        </Box>
      </Box>
    </>
  );
}
