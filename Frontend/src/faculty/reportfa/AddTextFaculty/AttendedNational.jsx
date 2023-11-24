/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const AttendedNational = ({ formData, setFormData }) => {
  const handleAddAttendedNational = () => {
    setFormData({
      ...formData,
      attendednational: [...formData.attendednational, ""],
    });
  };

  const handleDeleteAttendedNational = (index) => {
    const updatedAttendednational = [...formData.attendednational];
    updatedAttendednational.splice(index, 1);
    setFormData({
      ...formData,
      attendednational: updatedAttendednational,
    });
  };

  const handleAttendedNationalChange = (index, value) => {
    const updatedAttendednational = [...formData.attendednational];
    updatedAttendednational[index] = value;
    setFormData({
      ...formData,
      attendednational: updatedAttendednational,
    });
  };

  return (
    <div>
      <Grid xs={12} item>
        {formData.attendednational.map((paper, index) => (
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
                handleAttendedNationalChange(index, e.target.value)
              }
            />
            <Button
              style={{ align: "center", height: "40px" }}
              color="error"
              variant="contained"
              onClick={() => handleDeleteAttendedNational(index)}
            >
              Delete
            </Button>
            <br />
            <br />
          </div>
        ))}
        <Button variant="contained" onClick={handleAddAttendedNational}>
          Add
        </Button>
        <br />
        <br />
      </Grid>
    </div>
  );
};

export default AttendedNational;
