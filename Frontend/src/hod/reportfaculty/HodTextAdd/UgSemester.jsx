/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const UgSemester = ({ formData, setFormData }) => {
  const handleAddEContent = () => {
    setFormData({
      ...formData,
      ugsemesters: [...formData.ugsemesters, ""],
    });
  };

  const handleDeleteEContent = (index) => {
    const updatedUgsemesters = [...formData.ugsemesters];
    updatedUgsemesters.splice(index, 1);
    setFormData({
      ...formData,
      ugsemesters: updatedUgsemesters,
    });
  };

  const handleEContentChange = (index, value) => {
    const updatedUgsemesters = [...formData.ugsemesters];
    updatedUgsemesters[index] = value;
    setFormData({
      ...formData,
      ugsemesters: updatedUgsemesters,
    });
  };

  return (
    <div>
      <Grid xs={12} item>
        {formData.ugsemesters.map((paper, index) => (
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
              onChange={(e) => handleEContentChange(index, e.target.value)}
            />
            <Button
              style={{ align: "center", height: "40px" }}
              color="error"
              variant="contained"
              onClick={() => handleDeleteEContent(index)}
            >
              Delete
            </Button>
            <br />
            <br />
          </div>
        ))}
        <Button variant="contained" onClick={handleAddEContent}>
          Add
        </Button>
        <br />
        <br />
      </Grid>
    </div>
  );
};

export default UgSemester;
