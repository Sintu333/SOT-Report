import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { UserContext } from "../../Components/UserContext";
import { useContext } from "react";
import axios from "axios";
import DescriptionIcon from "@mui/icons-material/Description";
import { Link } from "react-router-dom";

export default function Reportfaculty() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [users, setUsers] = useState([]);
  const { user } = useContext(UserContext);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const userDepartment = user.departmentName;

  useEffect(() => {
    // Make the Axios GET request when the component mounts
    axios
      .get(`http://localhost:3000/HodFacultyList?department=${userDepartment}`)
      .then((response) => {
        setUsers(response.data.users);
        //console.log(response.data.users);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userDepartment]);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Typography
        gutterBottom
        variant="h5"
        component={"div"}
        sx={{ padding: "20px" }}
      >
        List of Faculties
      </Typography>

      <Stack direction="row" spacing={2}></Stack>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left" style={{ minWidth: "100px" }}>
                Name
              </TableCell>
              <TableCell align="left" style={{ minWidth: "100px" }}>
                Email
              </TableCell>
              <TableCell align="left" style={{ minWidth: "100px" }}>
                Department
              </TableCell>

              <TableCell align="left" style={{ minWidth: "100px" }}>
                Designation
              </TableCell>
              <TableCell align="left" style={{ minWidth: "100px" }}>
                Reports
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user, index) => {
                return (
                  <TableRow key={index} hover role="checkbox" tabIndex={-1}>
                    <TableCell key={user._id} align="left">
                      {user.name}
                    </TableCell>
                    <TableCell key={user._id} align="left">
                      {user.email}
                    </TableCell>
                    <TableCell key={user._id} align="left">
                      {user.departmentName}
                    </TableCell>
                    <TableCell key={user._id} align="left">
                      {user.designation}
                    </TableCell>
                    <TableCell align="left">
                      <Stack spacing={2} direction="row">
                        <Link to={`/FacultyReportHOD/${user._id}`}>
                          <DescriptionIcon
                            style={{
                              fontSize: "30px",
                              color: "#0d47a1",
                              cursor: "pointer",
                            }}
                            className='"cursor-pointer'
                          />
                        </Link>
                      </Stack>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
