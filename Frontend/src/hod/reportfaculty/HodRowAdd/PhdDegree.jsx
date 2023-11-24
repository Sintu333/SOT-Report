/* eslint-disable react/prop-types */

import {
  TextField,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const PhdDegree = ({ formData, setFormData }) => {
  const handleAddPhdDegree = () => {
    setFormData({
      ...formData,
      phdDegree: [
        ...formData.phdDegree,
        {
          name: "",
          title: "",
          nameOfSupervisor: "",
        },
      ],
    });
  };

  const handleDeletePhdDegree = (index) => {
    const updatedPhdDegree = [...formData.phdDegree];
    updatedPhdDegree.splice(index, 1);
    setFormData({
      ...formData,
      phdDegree: updatedPhdDegree,
    });
  };

  const handlePhdDegreeChange = (index, field, value) => {
    const updatedPhdDegree = [...formData.phdDegree];
    updatedPhdDegree[index][field] = value;
    setFormData({
      ...formData,
      phdDegree: updatedPhdDegree,
    });
  };

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Name of Supervisor</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {formData.phdDegree.map((entry, index) => (
            <TableRow key={index}>
              <TableCell>
                <TextField
                  type="text"
                  value={entry.name}
                  onChange={(e) =>
                    handlePhdDegreeChange(index, "name", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="text"
                  value={entry.title}
                  onChange={(e) =>
                    handlePhdDegreeChange(index, "title", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="text"
                  value={entry.nameOfSupervisor}
                  onChange={(e) =>
                    handlePhdDegreeChange(
                      index,
                      "nameOfSupervisor",
                      e.target.value
                    )
                  }
                />
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDeletePhdDegree(index)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="contained" color="primary" onClick={handleAddPhdDegree}>
        Add Student
      </Button>
    </div>
  );
};

export default PhdDegree;
