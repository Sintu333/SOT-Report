import { useContext } from "react";
import Dashboardhod from "./Dashboardhod";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { UserContext } from "../Components/UserContext";

export default function Profilehod() {
  const { user } = useContext(UserContext);
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
          <Paper
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
              Profile
              <br />
              <Grid align="center">
                <Avatar
                  style={{ backgroundColor: "#9A2EFE" }}
                  sx={{ width: 70, height: 70 }}
                >
                  <AccountCircleIcon sx={{ width: 70, height: 70 }} />
                </Avatar>
              </Grid>
            </Typography>
            <Typography align="left" padding="20px" variant="h6">
              Name : {user.name}
              <br />
              Email : {user.email}
              <br />
              Department : {user.departmentName} <br />
              Designation : {user.designation}
              <br />
              Date of Joining : {user.dateJoining} <br />
              Name Of School : {user.schoolName} <br />
            </Typography>
          </Paper>
        </Box>
      </Box>
    </>
  );
}
