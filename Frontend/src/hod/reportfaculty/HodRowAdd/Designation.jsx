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

const Designation = ({ formData, setFormData }) => {
  const handleAddDesignation = () => {
    setFormData({
      ...formData,
      designation: [
        ...formData.designation,
        {
          post: "",
          name: "",
          specialization: "",
        },
      ],
    });
  };

  const handleDeleteDesignation = (index) => {
    const updatedDesignation = [...formData.designation];
    updatedDesignation.splice(index, 1);
    setFormData({
      ...formData,
      designation: updatedDesignation,
    });
  };

  const handleDesignationChange = (index, field, value) => {
    const updatedDesignation = [...formData.designation];
    updatedDesignation[index][field] = value;
    setFormData({
      ...formData,
      designation: updatedDesignation,
    });
  };

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Designation</TableCell>
            <TableCell>Name and Qualification</TableCell>
            <TableCell>Specialization</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {formData.designation.map((entry, index) => (
            <TableRow key={index}>
              <TableCell>
                <TextField
                  type="text"
                  value={entry.post}
                  onChange={(e) =>
                    handleDesignationChange(index, "post", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="text"
                  value={entry.name}
                  onChange={(e) =>
                    handleDesignationChange(index, "name", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="text"
                  value={entry.specialization}
                  onChange={(e) =>
                    handleDesignationChange(
                      index,
                      "specialization",
                      e.target.value
                    )
                  }
                />
              </TableCell>

              <TableCell>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDeleteDesignation(index)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddDesignation}
      >
        Add Student
      </Button>
    </div>
  );
};

export default Designation;
