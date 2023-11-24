/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const AcademicInternational = ({ formData, setFormData }) => {
  const handleAddAcademicCollaborationsinternational = () => {
    setFormData({
      ...formData,
      academicCollaborationsinternational: [
        ...formData.academicCollaborationsinternational,
        "",
      ],
    });
  };

  const handleDeleteAcademicCollaborationsinternational = (index) => {
    const updatedAcademicCollaborationsinternational = [
      ...formData.academicCollaborationsinternational,
    ];
    updatedAcademicCollaborationsinternational.splice(index, 1);

    setFormData({
      ...formData,
      academicCollaborationsinternational:
        updatedAcademicCollaborationsinternational,
    });
  };

  const handleAcademicCollaborationsinternationalChange = (index, value) => {
    const updatedAcademicCollaborationsinternational = [
      ...formData.academicCollaborationsinternational,
    ];
    updatedAcademicCollaborationsinternational[index] = value;

    setFormData({
      ...formData,
      academicCollaborationsinternational:
        updatedAcademicCollaborationsinternational,
    });
  };

  return (
    <div>
      <Grid xs={12} item>
        {formData.academicCollaborationsinternational.map((paper, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              margin: 10,
            }}
          >
            <TextField
              fullWidth
              multiline
              type="text"
              value={paper}
              onChange={(e) =>
                handleAcademicCollaborationsinternationalChange(
                  index,
                  e.target.value
                )
              }
            />
            <Button
              style={{ align: "center", height: "40px" }}
              variant="contained"
              color="error"
              onClick={() =>
                handleDeleteAcademicCollaborationsinternational(index)
              }
            >
              Delete
            </Button>
            <br />
            <br />
          </div>
        ))}
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddAcademicCollaborationsinternational}
        >
          Add
        </Button>
        <br />
        <br />
      </Grid>
    </div>
  );
};

export default AcademicInternational;
