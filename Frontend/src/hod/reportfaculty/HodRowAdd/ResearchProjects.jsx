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

const ResearchProjects = ({ formData, setFormData }) => {
  const handleAddResearchProjects = () => {
    setFormData({
      ...formData,
      researchProjects: [
        ...formData.researchProjects,
        {
          title: "",
          currentStatus: "",
          nameOfPlCopl: "",
          multiTenure: "",
          fundingAgency: "",
          fund: "",
        },
      ],
    });
  };

  const handleDeleteResearchProjects = (index) => {
    const updatedResearchProjects = [...formData.researchProjects];
    updatedResearchProjects.splice(index, 1);
    setFormData({
      ...formData,
      researchProjects: updatedResearchProjects,
    });
  };

  const handleResearchProjectsChange = (index, field, value) => {
    const updatedResearchProjects = [...formData.researchProjects];
    updatedResearchProjects[index][field] = value;
    setFormData({
      ...formData,
      researchProjects: updatedResearchProjects,
    });
  };

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Title of ResearchProjects Project(Total outlay in lakhs)
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
          {formData.researchProjects.map((entry, index) => (
            <TableRow key={index}>
              <TableCell>
                <TextField
                  type="text"
                  multiline
                  value={entry.title}
                  onChange={(e) =>
                    handleResearchProjectsChange(index, "title", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="text"
                  multiline
                  value={entry.currentStatus}
                  onChange={(e) =>
                    handleResearchProjectsChange(
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
                  value={entry.nameOfPlCopl}
                  onChange={(e) =>
                    handleResearchProjectsChange(
                      index,
                      "nameOfPlCopl",
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
                    handleResearchProjectsChange(
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
                    handleResearchProjectsChange(
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
                    handleResearchProjectsChange(index, "fund", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDeleteResearchProjects(index)}
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
        onClick={handleAddResearchProjects}
      >
        Add Research Projects
      </Button>
    </div>
  );
};

export default ResearchProjects;
