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

const ResearchFellowship = ({ formData, setFormData }) => {
  const handleAddFellowship = () => {
    setFormData({
      ...formData,
      fellowship: [
        ...formData.fellowship,
        {
          csir: "",
          ugc: "",
          rajivGandhi: "",
          meritorious: "",
          azad: "",
          others: "",
        },
      ],
    });
  };

  const handleDeleteFellowship = (index) => {
    const updatedFellowship = [...formData.fellowship];
    updatedFellowship.splice(index, 1);
    setFormData({
      ...formData,
      fellowship: updatedFellowship,
    });
  };

  const handleFellowshipChange = (index, field, value) => {
    const updatedFellowship = [...formData.fellowship];
    updatedFellowship[index][field] = value;
    setFormData({
      ...formData,
      fellowship: updatedFellowship,
    });
  };

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>CSIR-UGC-NET</TableCell>
            <TableCell>UGC Non-Net</TableCell>
            <TableCell>Rajiv Gandhi National Fellowship(SC/ ST)</TableCell>
            <TableCell>Meritorious Fellowship</TableCell>
            <TableCell>Maulana Azad National Fellowship</TableCell>
            <TableCell>Others</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {formData.fellowship.map((entry, index) => (
            <TableRow key={index}>
              <TableCell>
                <TextField
                  type="text"
                  value={entry.csir}
                  onChange={(e) =>
                    handleFellowshipChange(index, "csir", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="text"
                  value={entry.ugc}
                  onChange={(e) =>
                    handleFellowshipChange(index, "ugc", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="text"
                  value={entry.rajivGandhi}
                  onChange={(e) =>
                    handleFellowshipChange(index, "rajivGandhi", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="text"
                  value={entry.meritorious}
                  onChange={(e) =>
                    handleFellowshipChange(index, "meritorious", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="text"
                  value={entry.azad}
                  onChange={(e) =>
                    handleFellowshipChange(index, "azad", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="text"
                  value={entry.others}
                  onChange={(e) =>
                    handleFellowshipChange(index, "others", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDeleteFellowship(index)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="contained" color="primary" onClick={handleAddFellowship}>
        Add Student
      </Button>
    </div>
  );
};

export default ResearchFellowship;
