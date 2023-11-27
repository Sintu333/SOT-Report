import { useState } from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import axios from "axios"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export default function LoginModal({ close }) {
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  //const { setUser } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault()

    if (username === "" || password === "") {
      toast.error("All fields are required !")
      return
    }

    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        username: username,
        password: password,
      })

      const { user, token } = response.data
      console.log(user)

      // Store token and role in local storage or context as needed
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))
      close()

      //setUser(user);

      // Redirect based on role
      if (user.role === "Dean") {
        navigate("/dashadmin")
      } else if (user.role === "HOD") {
        navigate("/dashhod")
      } else if (user.role === "Faculty") {
        navigate("/dashfaculty")
      }
      toast.success("Login Successful")
    } catch (error) {
      console.log("Login Error", error.response.data.message)
      toast.error("Invalid Credentials")
    }
  }

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h6" align="center">
        Login
      </Typography>

      <Box height={20} />
      <Grid>
        <form onSubmit={handleLogin}>
          <Grid container spacing={2}>
            <Grid xs={12} item>
              <TextField
                fullWidth
                label="Username"
                placeholder="Enter an username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>

            <Grid xs={12} item>
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
            <Grid xs={12} item></Grid>
            <Grid xs={12} item align="center">
              <Button
                type="submit"
                variant="contained"
                color="success"
                onClick={handleLogin}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Box sx={{ m: 4 }} />
    </>
  )
}
