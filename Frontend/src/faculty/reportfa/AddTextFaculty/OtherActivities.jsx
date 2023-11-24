/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const OtherActivities = ({ formData, setFormData }) => {
  const handleAddOtherActivities = () => {
    setFormData({
      ...formData,
      otherActivities: [...formData.otherActivities, ""],
    });
  };

  const handleDeleteOtherActivities = (index) => {
    const updatedOtherActivities = [...formData.otherActivities];
    updatedOtherActivities.splice(index, 1);
    setFormData({
      ...formData,
      otherActivities: updatedOtherActivities,
    });
  };

  const handleOtherActivitiesChange = (index, value) => {
    const updatedOtherActivities = [...formData.otherActivities];
    updatedOtherActivities[index] = value;
    setFormData({
      ...formData,
      otherActivities: updatedOtherActivities,
    });
  };

  return (
    <div>
      <Grid xs={12} item>
        {formData.otherActivities.map((paper, index) => (
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
                handleOtherActivitiesChange(index, e.target.value)
              }
            />
            <Button
              style={{ align: "center", height: "40px" }}
              color="error"
              variant="contained"
              onClick={() => handleDeleteOtherActivities(index)}
            >
              Delete
            </Button>
            <br />
            <br />
          </div>
        ))}
        <Button variant="contained" onClick={handleAddOtherActivities}>
          Add
        </Button>
        <br />
        <br />
      </Grid>
    </div>
  );
};

export default OtherActivities;
