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

const Placement = ({ formData, setFormData }) => {
  const handleAddPlacement = () => {
    setFormData({
      ...formData,
      placement: [
        ...formData.placement,
        {
          name: "",
          programme: "",
          post: "",
          place: "",
        },
      ],
    });
  };

  const handleDeletePlacement = (index) => {
    const updatedPlacement = [...formData.placement];
    updatedPlacement.splice(index, 1);
    setFormData({
      ...formData,
      placement: updatedPlacement,
    });
  };

  const handlePlacementChange = (index, field, value) => {
    const updatedPlacement = [...formData.placement];
    updatedPlacement[index][field] = value;
    setFormData({
      ...formData,
      placement: updatedPlacement,
    });
  };

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name of Student(s)</TableCell>
            <TableCell>Name of the Programme</TableCell>
            <TableCell>Post Held</TableCell>
            <TableCell>Place of Work</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {formData.placement.map((entry, index) => (
            <TableRow key={index}>
              <TableCell>
                <TextField
                  type="text"
                  value={entry.name}
                  onChange={(e) =>
                    handlePlacementChange(index, "name", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="text"
                  value={entry.programme}
                  onChange={(e) =>
                    handlePlacementChange(index, "programme", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="text"
                  value={entry.post}
                  onChange={(e) =>
                    handlePlacementChange(index, "post", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="text"
                  value={entry.place}
                  onChange={(e) =>
                    handlePlacementChange(index, "place", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDeletePlacement(index)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="contained" color="primary" onClick={handleAddPlacement}>
        Add Student
      </Button>
    </div>
  );
};

export default Placement;
