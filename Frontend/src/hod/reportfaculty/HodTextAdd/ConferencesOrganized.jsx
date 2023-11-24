/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const ConferencesOrganized = ({ formData, setFormData }) => {
  const handleAddConferencesOrganized = () => {
    setFormData({
      ...formData,
      conferencesOrganized: [...formData.conferencesOrganized, ""],
    });
  };

  const handleDeleteConferencesOrganized = (index) => {
    const updatedConferencesOrganized = [...formData.conferencesOrganized];
    updatedConferencesOrganized.splice(index, 1);
    setFormData({
      ...formData,
      conferencesOrganized: updatedConferencesOrganized,
    });
  };

  const handleConferencesOrganizedChange = (index, value) => {
    const updatedConferencesOrganized = [...formData.conferencesOrganized];
    updatedConferencesOrganized[index] = value;
    setFormData({
      ...formData,
      conferencesOrganized: updatedConferencesOrganized,
    });
  };

  return (
    <div>
      <Grid xs={12} item>
        {formData.conferencesOrganized.map((paper, index) => (
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
                handleConferencesOrganizedChange(index, e.target.value)
              }
            />
            <Button
              style={{ align: "center", height: "40px" }}
              color="error"
              variant="contained"
              onClick={() => handleDeleteConferencesOrganized(index)}
            >
              Delete
            </Button>
            <br />
            <br />
          </div>
        ))}
        <Button variant="contained" onClick={handleAddConferencesOrganized}>
          Add
        </Button>
        <br />
        <br />
      </Grid>
    </div>
  );
};

export default ConferencesOrganized;
