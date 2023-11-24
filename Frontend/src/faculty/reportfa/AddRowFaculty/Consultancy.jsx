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

const Consultancy = ({ formData, setFormData }) => {
  const handleAddConsultancy = () => {
    setFormData({
      ...formData,
      consultancy: [
        ...formData.consultancy,
        {
          title: "",
          currentStatus: "",
          nameOfConsultant: "",
          multiTenure: "",
          fundingAgency: "",
          fund: "",
        },
      ],
    });
  };

  const handleDeleteConsultancy = (index) => {
    const updatedConsultancy = [...formData.consultancy];
    updatedConsultancy.splice(index, 1);
    setFormData({
      ...formData,
      consultancy: updatedConsultancy,
    });
  };

  const handleConsultancyChange = (index, field, value) => {
    const updatedConsultancy = [...formData.consultancy];
    updatedConsultancy[index][field] = value;
    setFormData({
      ...formData,
      consultancy: updatedConsultancy,
    });
  };

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Title of Consultancy Project(Total outlay in lakhs)
            </TableCell>
            <TableCell>Current Status(New/ ongoing/ completed)</TableCell>
            <TableCell>Name of Consultant</TableCell>
            <TableCell>Multi/Single Institute(Tenure)</TableCell>
            <TableCell>Funding Agency</TableCell>
            <TableCell>
              Fund received by NEHU in the year under report(in Lakhs)
            </TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {formData.consultancy.map((entry, index) => (
            <TableRow key={index}>
              <TableCell>
                <TextField
                  type="text"
                  multiline
                  value={entry.title}
                  onChange={(e) =>
                    handleConsultancyChange(index, "title", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="text"
                  multiline
                  value={entry.currentStatus}
                  onChange={(e) =>
                    handleConsultancyChange(
                      index,
                      "currentStatus",
                      e.target.value
                    )
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="text"
                  multiline
                  value={entry.nameOfConsultant}
                  onChange={(e) =>
                    handleConsultancyChange(
                      index,
                      "nameOfConsultant",
                      e.target.value
                    )
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="text"
                  multiline
                  value={entry.multiTenure}
                  onChange={(e) =>
                    handleConsultancyChange(
                      index,
                      "multiTenure",
                      e.target.value
                    )
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="text"
                  multiline
                  value={entry.fundingAgency}
                  onChange={(e) =>
                    handleConsultancyChange(
                      index,
                      "fundingAgency",
                      e.target.value
                    )
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="text"
                  multiline
                  value={entry.fund}
                  onChange={(e) =>
                    handleConsultancyChange(index, "fund", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDeleteConsultancy(index)}
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
        onClick={handleAddConsultancy}
      >
        Add Consultancy
      </Button>
    </div>
  );
};

export default Consultancy;
