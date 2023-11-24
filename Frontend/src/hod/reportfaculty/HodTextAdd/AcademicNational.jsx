/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const AcademicNational = ({ formData, setFormData }) => {
  const handleAddAcademicCollaborationsnational = () => {
    setFormData({
      ...formData,
      academicCollaborationsnational: [
        ...formData.academicCollaborationsnational,
        "",
      ],
    });
  };

  const handleDeleteAcademicCollaborationsnational = (index) => {
    const updatedAcademicCollaborationsnational = [
      ...formData.academicCollaborationsnational,
    ];
    updatedAcademicCollaborationsnational.splice(index, 1);
    setFormData({
      ...formData,
      academicCollaborationsnational: updatedAcademicCollaborationsnational,
    });
  };

  const handleAcademicCollaborationsnationalChange = (index, value) => {
    const updatedAcademicCollaborationsnational = [
      ...formData.academicCollaborationsnational,
    ];
    updatedAcademicCollaborationsnational[index] = value;
    setFormData({
      ...formData,
      academicCollaborationsnational: updatedAcademicCollaborationsnational,
    });
  };

  return (
    <div>
      <Grid xs={12} item>
        {formData.academicCollaborationsnational.map((paper, index) => (
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
                handleAcademicCollaborationsnationalChange(
                  index,
                  e.target.value
                )
              }
            />
            <Button
              style={{ align: "center", height: "40px" }}
              color="error"
              variant="contained"
              onClick={() => handleDeleteAcademicCollaborationsnational(index)}
            >
              Delete
            </Button>
            <br />
            <br />
          </div>
        ))}
        <Button
          variant="contained"
          onClick={handleAddAcademicCollaborationsnational}
        >
          Add
        </Button>
        <br />
        <br />
      </Grid>
    </div>
  );
};

export default AcademicNational;
