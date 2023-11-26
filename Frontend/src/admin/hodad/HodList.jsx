//import * as React from "react";
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import { useState, useEffect } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { Button, Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
//import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete'

import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import AddHod from './AddHod'
import axios from 'axios'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderColor: 'primary.main',
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
}

export default function HodList() {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [users, setUsers] = useState([])

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  //console.log(users);
  const fetchUser = () => {
    axios
      .get('http://localhost:3000/api/users/hod')
      .then((response) => {
        setUsers(response.data.users)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    // Make the Axios POST request when the component mounts
    fetchUser()
  }, [])

  const deleteUser = async ({ userId }) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/users/${userId}`
      )
      console.log('User deleted:', response.data)
      fetchUser()
      // Handle success, update state, or perform any necessary actions after deletion
    } catch (error) {
      console.error('Error deleting user:', error)
      // Handle error, show a message, or perform any necessary actions
    }
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Typography
        gutterBottom
        variant='h5'
        component={'div'}
        sx={{ padding: '20px' }}
      >
        List of HODs
      </Typography>
      <div>
        <Modal
          open={open}
          //onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <AddHod close={() => setOpen(false)} closeEvent={handleClose} />
          </Box>
        </Modal>
      </div>
      <Stack direction='row-reverse' spacing={2}>
        {/* <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={users}
          onChange={(e, v) => filterData(v)}
          getOptionalLabel={(users) => users.name || ""}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} size="small" label="Search" />
          )}
        />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography> */}
        <Button
          color='success'
          variant='contained'
          endIcon={<AddCircleOutlineIcon />}
          onClick={handleOpen}
        >
          Add
        </Button>
      </Stack>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              <TableCell align='left' style={{ minWidth: '100px' }}>
                <h3>Name</h3>
              </TableCell>
              <TableCell align='left' style={{ minWidth: '100px' }}>
                <h3>Email</h3>
              </TableCell>
              <TableCell align='left' style={{ minWidth: '100px' }}>
                <h3>Department</h3>
              </TableCell>

              <TableCell align='left' style={{ minWidth: '100px' }}>
                <h3>Designation</h3>
              </TableCell>
              <TableCell align='left' style={{ minWidth: '100px' }}>
                <h3>Action</h3>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user, index) => {
                return (
                  <TableRow key={index} hover role='checkbox' tabIndex={-1}>
                    <TableCell key={user._id} align='left'>
                      {user.name}
                    </TableCell>
                    <TableCell key={user._id} align='left'>
                      {user.email}
                    </TableCell>
                    <TableCell key={user._id} align='left'>
                      {user.departmentName}
                    </TableCell>
                    <TableCell key={user._id} align='left'>
                      {user.designation}
                    </TableCell>

                    <TableCell key={user._id} align='left'>
                      <Stack spacing={2} direction='row'>
                        {/* <EditIcon
                          style={{
                            fontSize: "20px",
                            color: "#0d47a1",
                            cursor: "pointer",
                          }}
                          className='"cursor-pointer'
                          //onClick{()=> editUser(row.id)}
                        /> */}
                        <DeleteIcon
                          style={{
                            fontSize: '20px',
                            color: '#b71c1c',
                            cursor: 'pointer',
                          }}
                          onClick={() => deleteUser({ userId: user._id })}
                        />
                      </Stack>
                    </TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
