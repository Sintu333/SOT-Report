import React from "react";
import Dashboardfaculty from "./Dashboardfaculty";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import ArticleIcon from "@mui/icons-material/Article";

export default function Homefaculty() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Dashboardfaculty />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography paragraph>
            <br />
            <br />
            <br />
          </Typography>
          <Paper
            elevation={3}
            sx={{
              width: "50%",
              overflow: "hidden",
              margin: "20px 0px 0px 250px",
              borderColor: "primary.main",
              borderRadius: 3,
              boxShadow: 24,
            }}
          >
            <Typography variant="h4" align="center">
              <br />
              Annual Report
              <br />
              <Grid align="center">
                <Avatar
                  style={{ backgroundColor: "#2B65EC" }}
                  sx={{ width: 70, height: 70 }}
                >
                  <ArticleIcon sx={{ width: 65, height: 65 }} />
                </Avatar>
              </Grid>
            </Typography>
            <Typography align="left" padding="20px">
              An annual report of a university is a comprehensive document that
              provides an overview of the university's activities, achievements,
              and financial performance over the course of a year. These reports
              are typically prepared and published by universities to inform
              their various stakeholders, including students, faculty, staff,
              donors, government agencies, and the public, about the
              university's progress and status.
              <br />
              University annual reports serve as a means of accountability and
              transparency, demonstrating to stakeholders the university's
              commitment to its mission and goals. These reports are often
              published in various formats, including print and web-based
              versions, and are a valuable resource for individuals interested
              in the university's activities and performance over the course of
              a year.
            </Typography>
          </Paper>
        </Box>
      </Box>
    </>
  );
}
