import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import toast from "react-hot-toast";
import MenuItem from "@mui/material/MenuItem";

export default function Registeradmin() {
  const paperStyle = {
    padding: "30px 20px",
    width: 600,
    margin: "0 auto",
    backgroundColor: "lightGray",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const bodyStyle = {
    backgroundColor: "#454545",
    height: "100vh",
    width: "100%",
  };
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [dateJoining, setDateJoining] = useState("");
  const [designation, setDesignation] = useState("");

  const dept = [
    {
      value: "IT",
      label: "IT",
    },
    {
      value: "ECE",
      label: "ECE",
    },
    {
      value: "ENE",
      label: "ENE",
    },
    {
      value: "BME",
      label: "BME",
    },
    {
      value: "ARCH",
      label: "ARCH",
    },
    {
      value: "BSSS",
      label: "BSSS",
    },
    {
      value: "NANO",
      label: "NANO",
    },
  ];

  const post = [
    {
      value: "Professor",
      label: "Professor",
    },
    {
      value: "Associate Professor",
      label: "Associate Professor",
    },
    {
      value: "Assistant Professor",
      label: "Assistant Professor",
    },
  ];

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  // const fetchUsers = () => {
  //  axios.get("http://localhost:3000/Admindetail").then((res) => {
  //   //console.log(res.data)
  //  });
  //};

  //   const handleSubmit = (e) => {
  //     console.log("handle");
  //     e.preventDefault();
  //     const role = "Admin";

  //     if (name === "" || email === "" || password === "") {
  //       toast("All fields are required !");
  //       return;
  //     }

  //     axios
  //       .post("http://localhost:3000/Userregister", {
  //         name,
  //         email,
  //         password,
  //         role,
  //         departmentName,
  //         dateJoining,
  //         designation,
  //       })
  //       .then(() => {
  //         toast("Registration Successful");

  //         setName("");
  //         setEmail("");
  //         setPassword("");
  //         //setSchoolname("");
  //         //fetchUsers();
  //         navigate("/");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         console.log("Unable to register user");
  //       });
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/Userregister", {
        name,
        email,
        password,
        role: "Dean",
        departmentName,
        dateJoining,
        designation,
      });

      if (response.status === 201) {
        // Registration was successful
        console.log("User registered successfully:", response.data.message);
        toast.success("User created Successfuly");
        navigate("/");
      } else {
        // Handle other responses or errors
        console.error("Error registering user:", response.data.error);
        toast.error(response.data.error);
      }
    } catch (error) {
      // Handle network errors
      console.error("Network error:", error.message);
    }
  };

  return (
    <div>
      <div style={bodyStyle}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Grid>
          <Paper style={paperStyle}>
            <Grid align="center" xs={12} item>
              <Avatar style={avatarStyle}>
                <AccountCircleIcon />
              </Avatar>
              <h2 style={headerStyle}>REGISTER</h2>
              <Typography variant="caption" gutterBottom>
                Please fill this form to register your school !
              </Typography>
              <br />
              <br />
            </Grid>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid xs={6} item>
                  <TextField
                    fullWidth
                    required
                    label="Name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid xs={6} item>
                  <TextField
                    fullWidth
                    required
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid xs={6} item>
                  <TextField
                    fullWidth
                    required
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></TextField>
                </Grid>

                <Grid xs={6} item>
                  <TextField
                    fullWidth
                    required
                    select
                    label="Dept Name"
                    value={departmentName}
                    onChange={(e) => setDepartmentName(e.target.value)}
                  >
                    {dept.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid xs={6} item>
                  <TextField
                    type="date"
                    required
                    fullWidth
                    label="Date Of Joining"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={dateJoining}
                    onChange={(e) => setDateJoining(e.target.value)}
                  />
                </Grid>
                <Grid xs={6} item>
                  <TextField
                    fullWidth
                    select
                    required
                    label="Designaton"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                  >
                    {post.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid xs={12} item align="center">
                  <Button type="submit" variant="contained" color="primary">
                    Sign up
                  </Button>
                </Grid>
                <br />
              </Grid>
            </form>
          </Paper>
        </Grid>
      </div>
    </div>
  );
}
