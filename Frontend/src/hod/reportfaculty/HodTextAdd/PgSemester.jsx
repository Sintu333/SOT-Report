/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const PgSemester = ({ formData, setFormData }) => {
  const handleAddEContent = () => {
    setFormData({
      ...formData,
      pgsemesters: [...formData.pgsemesters, ""],
    });
  };

  const handleDeleteEContent = (index) => {
    const updatedPgsemesters = [...formData.pgsemesters];
    updatedPgsemesters.splice(index, 1);
    setFormData({
      ...formData,
      pgsemesters: updatedPgsemesters,
    });
  };

  const handleEContentChange = (index, value) => {
    const updatedPgsemesters = [...formData.pgsemesters];
    updatedPgsemesters[index] = value;
    setFormData({
      ...formData,
      pgsemesters: updatedPgsemesters,
    });
  };

  return (
    <div>
      <Grid xs={12} item>
        {formData.pgsemesters.map((paper, index) => (
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

export default PgSemester;
