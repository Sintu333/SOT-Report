import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function AddHod({ close, closeEvent }) {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [departmentName, setDepartmentName] = useState('')
  const [dateJoining, setDateJoining] = useState('')
  const [designation, setDesignation] = useState('')

  const dept = [
    {
      value: 'Information Technology',
      label: 'Information Technology',
    },
    {
      value: 'Electronics and Communication Engineering',
      label: 'Electronics and Communication Engineering',
    },
    {
      value: 'Energy Engineering',
      label: 'Energy Engineering',
    },
    {
      value: 'Biomedical Engineering',
      label: 'Biomedical Engineering',
    },
    {
      value: 'Architecture',
      label: 'Architecture',
    },
    {
      value: 'Basic Sciences and Social Sciences',
      label: 'Basic Sciences and Social Sciences',
    },
    {
      value: 'Nanotechnology',
      label: 'Nanotechnology',
    },
  ]

  const post = [
    {
      value: 'Professor',
      label: 'Professor',
    },
    {
      value: 'Associate Professor',
      label: 'Associate Professor',
    },
    {
      value: 'Assistant Professor',
      label: 'Assistant Professor',
    },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/api/users', {
        name,
        username,
        email,
        password,
        role: 'HOD',
        departmentName,
        dateJoining,
        designation,
      })

      if (response.status === 201) {
        // Registration was successful
        console.log('User registered successfully:', response.data.message)
        toast.success('HOD created Successfuly')
        close()

        //navigate("/facultyadmin");
        //this.handleCloseModal();
      } else {
        // Handle other responses or errors
        console.error('Error registering user:', response.data.error)
        toast.error(response.data.error)
      }
    } catch (error) {
      // Handle network errors
      console.error('Network error:', error.message)
    }
  }

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant='h5' align='center'>
        Add HOD
      </Typography>
      <IconButton
        style={{ position: 'absolute', top: '0', right: '0' }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box height={20} />
      <Grid>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid xs={6} item>
              <TextField
                fullWidth
                label='Username'
                placeholder='Enter an username'
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid xs={6} item>
              <TextField fullWidth label='User role' required value={'HOD'} />
            </Grid>
            <Grid xs={6} item>
              <TextField
                fullWidth
                label='Name'
                placeholder='Enter your name'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid xs={6} item>
              <TextField
                fullWidth
                required
                label='Email'
                placeholder='Enter your email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid xs={6} item>
              <TextField
                fullWidth
                required
                label='Password'
                placeholder='Enter your password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></TextField>
            </Grid>

            <Grid xs={6} item>
              <TextField
                fullWidth
                required
                select
                label='Dept Name'
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
                type='date'
                fullWidth
                required
                label='Date Of Joining'
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
                label='Designaton'
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                required
              >
                {post.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid xs={12} item align='center'>
              <Button
                type='submit'
                variant='contained'
                color='success'
                //onClick={this.handleCloseModal}
              >
                ADD HOD
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Box sx={{ m: 4 }} />
    </>
  )
}
