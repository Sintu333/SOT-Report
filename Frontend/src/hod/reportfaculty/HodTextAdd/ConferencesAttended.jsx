/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const ConferencesAttended = ({ formData, setFormData }) => {
  const handleAddConferencesAttended = () => {
    setFormData({
      ...formData,
      conferencesAttended: [...formData.conferencesAttended, ""],
    });
  };

  const handleDeleteConferencesAttended = (index) => {
    const updatedConferencesAttended = [...formData.conferencesAttended];
    updatedConferencesAttended.splice(index, 1);
    setFormData({
      ...formData,
      conferencesAttended: updatedConferencesAttended,
    });
  };

  const handleConferencesAttendedChange = (index, value) => {
    const updatedConferencesAttended = [...formData.conferencesAttended];
    updatedConferencesAttended[index] = value;
    setFormData({
      ...formData,
      conferencesAttended: updatedConferencesAttended,
    });
  };

  return (
    <div>
      <Grid xs={12} item>
        {formData.conferencesAttended.map((paper, index) => (
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
                handleConferencesAttendedChange(index, e.target.value)
              }
            />
            <Button
              style={{ align: "center", height: "40px" }}
              color="error"
              variant="contained"
              onClick={() => handleDeleteConferencesAttended(index)}
            >
              Delete
            </Button>
            <br />
            <br />
          </div>
        ))}
        <Button variant="contained" onClick={handleAddConferencesAttended}>
          Add
        </Button>
        <br />
        <br />
      </Grid>
    </div>
  );
};

export default ConferencesAttended;
