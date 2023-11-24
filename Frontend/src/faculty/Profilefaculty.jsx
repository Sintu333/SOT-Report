import { useContext } from "react";
import Dashboardfaculty from "./Dashboardfaculty";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { UserContext } from "../Components/UserContext";

export default function Profilefaculty() {
  const { user } = useContext(UserContext);
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
          <Card
            style={{
              maxWidth: 600,
              padding: "20px 5px",
              margin: "0 auto",
              border: "#2B65EC 2px",
              borderColor: "primary.main",
              borderRadius: 3,
              boxShadow: 24,
            }}
          >
            <CardContent>
              {/*<Paper
            sx={{
              width: "50%",
              overflow: "hidden",

              margin: "20px 0px 0px 250px",
            }}
          >*/}
              <Typography variant="h4" align="center">
                Profile
                <br />
                <Grid align="center">
                  <Avatar
                    style={{ backgroundColor: "#2B65EC" }}
                    sx={{ width: 70, height: 70 }}
                  >
                    <AccountCircleIcon sx={{ width: 70, height: 70 }} />
                  </Avatar>
                </Grid>
              </Typography>
              <Typography align="left" padding="20px">
                Name: {user.name}
                <br />
                Email : {user.email}
                <br />
                Department : {user.departmentName} <br />
                Designation : {user.designation}
                <br />
                Date of Joining : {user.dateJoining} <br />
                Name Of School : {user.schoolName} <br />
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
}
