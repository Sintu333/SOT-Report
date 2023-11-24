/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const AttendedInternational = ({ formData, setFormData }) => {
  const handleAddAttendedinternational = () => {
    setFormData({
      ...formData,
      attendedinternational: [...formData.attendedinternational, ""],
    });
  };

  const handleDeleteAttendedinternational = (index) => {
    const updatedAttendedinternational = [...formData.attendedinternational];
    updatedAttendedinternational.splice(index, 1);
    setFormData({
      ...formData,
      attendedinternational: updatedAttendedinternational,
    });
  };

  const handleAttendedinternationalChange = (index, value) => {
    const updatedAttendedinternational = [...formData.attendedinternational];
    updatedAttendedinternational[index] = value;
    setFormData({
      ...formData,
      attendedinternational: updatedAttendedinternational,
    });
  };

  return (
    <div>
      <Grid xs={12} item>
        {formData.attendedinternational.map((paper, index) => (
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
                handleAttendedinternationalChange(index, e.target.value)
              }
            />
            <Button
              style={{ align: "center", height: "40px" }}
              color="error"
              variant="contained"
              onClick={() => handleDeleteAttendedinternational(index)}
            >
              Delete
            </Button>
            <br />
            <br />
          </div>
        ))}
        <Button variant="contained" onClick={handleAddAttendedinternational}>
          Add
        </Button>
        <br />
        <br />
      </Grid>
    </div>
  );
};

export default AttendedInternational;
