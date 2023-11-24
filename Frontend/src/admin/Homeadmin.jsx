import React from "react";
import Dashboardadmin from "./Dashboardadmin";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Paper, Grid, Stack } from "@mui/material";

export default function Homeadmin() {
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
          <Grid>
            <Paper
              elevation={3}
              sx={{
                width: "70%",
                overflow: "hidden",
                margin: "20px 0px 0px 150px",
                borderColor: "primary.main",
                borderRadius: 3,
                boxShadow: 24,
                padding: 3,
              }}
            >
              <Grid align="center" container spacing={2}>
                <Grid
                  xs={12}
                  item
                  style={{ backgroundColor: "#3090C7" }}
                  sx={{ borderRadius: 10, boxShadow: 24, padding: 1 }}
                >
                  <Typography variant="h5" align="center" color={"#FFFFFF"}>
                    Annual Report For SOT
                  </Typography>
                </Grid>
                <Grid xs={12} item textAlign={"left"}>
                  <h4>•About Annual Report</h4>
                </Grid>

                <Grid
                  xs={12}
                  item
                  style={{ backgroundColor: "#3090C7" }}
                  sx={{ borderRadius: 2, boxShadow: 24, padding: 1 }}
                >
                  <Typography align="center" color={"#FFFFFF"}>
                    The Annual Report showcases the diverse activities and
                    achievements of various Academic Departments, Centres,
                    Administrative Departments and Central Services of the
                    School Of Technology during the academic year.
                  </Typography>
                </Grid>
                <Grid xs={12} item textAlign={"left"}>
                  <h4>•Vision of School of Technology</h4>
                </Grid>

                <Grid
                  xs={12}
                  item
                  style={{ backgroundColor: "#3090C7" }}
                  sx={{ borderRadius: 2, boxShadow: 24, padding: 1 }}
                >
                  <Typography align="center" color={"#FFFFFF"}>
                    To be a leader among educational institutions by building a
                    tradition of innovation, problem-solving and
                    interdisciplinary collaboration to meet the changing needs
                    of society.
                  </Typography>
                </Grid>
                <Grid xs={12} item textAlign={"left"}>
                  <h4>•Departments</h4>
                </Grid>

                <Stack spacing={2}>
                  <Grid
                    xs={12}
                    item
                    style={{ backgroundColor: "#3090C7" }}
                    sx={{ borderRadius: 2, boxShadow: 24, padding: 1 }}
                  >
                    <Typography align="center" color={"#FFFFFF"}>
                      Department of Information Technology
                    </Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    item
                    style={{ backgroundColor: "#3090C7" }}
                    sx={{ borderRadius: 2, boxShadow: 24, padding: 1 }}
                  >
                    <Typography align="center" color={"#FFFFFF"}>
                      Department of Electronics and Communication Engineering
                    </Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    item
                    style={{ backgroundColor: "#3090C7" }}
                    sx={{ borderRadius: 2, boxShadow: 24, padding: 1 }}
                  >
                    <Typography align="center" color={"#FFFFFF"}>
                      Department of Energy Engineering
                    </Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    item
                    style={{ backgroundColor: "#3090C7" }}
                    sx={{ borderRadius: 2, boxShadow: 24, padding: 1 }}
                  >
                    <Typography align="center" color={"#FFFFFF"}>
                      Department of Biomedical Engineering
                    </Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    item
                    style={{ backgroundColor: "#3090C7" }}
                    sx={{ borderRadius: 2, boxShadow: 24, padding: 1 }}
                  >
                    <Typography align="center" color={"#FFFFFF"}>
                      Department of Architecture
                    </Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    item
                    style={{ backgroundColor: "#3090C7" }}
                    sx={{ borderRadius: 2, boxShadow: 24, padding: 1 }}
                  >
                    <Typography align="center" color={"#FFFFFF"}>
                      Department of Nanotechnology
                    </Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    item
                    style={{ backgroundColor: "#3090C7" }}
                    sx={{ borderRadius: 2, boxShadow: 24, padding: 1 }}
                  >
                    <Typography align="center" color={"#FFFFFF"}>
                      Department of Basic Sciences and Social Sciences
                    </Typography>
                  </Grid>
                </Stack>
              </Grid>

              <Typography align="left" padding="20px"></Typography>
            </Paper>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
