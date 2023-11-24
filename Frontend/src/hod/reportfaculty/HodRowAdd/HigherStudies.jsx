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

const HigherStudies = ({ formData, setFormData }) => {
  const handleAddHigherStudies = () => {
    setFormData({
      ...formData,
      higherStudies: [
        ...formData.higherStudies,
        {
          name: "",
          programme: "",
          institution: "",
          country: "",
        },
      ],
    });
  };

  const handleDeleteHigherStudies = (index) => {
    const updatedHigherStudies = [...formData.higherStudies];
    updatedHigherStudies.splice(index, 1);
    setFormData({
      ...formData,
      higherStudies: updatedHigherStudies,
    });
  };

  const handleHigherStudiesChange = (index, field, value) => {
    const updatedHigherStudies = [...formData.higherStudies];
    updatedHigherStudies[index][field] = value;
    setFormData({
      ...formData,
      higherStudies: updatedHigherStudies,
    });
  };

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name of Student(s)</TableCell>
            <TableCell>Name of the Programme</TableCell>
            <TableCell>Institution/ Organization</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {formData.higherStudies.map((entry, index) => (
            <TableRow key={index}>
              <TableCell>
                <TextField
                  type="text"
                  value={entry.name}
                  onChange={(e) =>
                    handleHigherStudiesChange(index, "name", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="text"
                  value={entry.programme}
                  onChange={(e) =>
                    handleHigherStudiesChange(
                      index,
                      "programme",
                      e.target.value
                    )
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="text"
                  value={entry.institution}
                  onChange={(e) =>
                    handleHigherStudiesChange(
                      index,
                      "institution",
                      e.target.value
                    )
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="text"
                  value={entry.country}
                  onChange={(e) =>
                    handleHigherStudiesChange(index, "country", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDeleteHigherStudies(index)}
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
        onClick={handleAddHigherStudies}
      >
        Add Student
      </Button>
    </div>
  );
};

export default HigherStudies;
