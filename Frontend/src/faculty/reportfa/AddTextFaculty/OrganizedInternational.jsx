/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const OrganizedInternational = ({ formData, setFormData }) => {
  const handleAddOrganizedInternational = () => {
    setFormData({
      ...formData,
      organizedinternational: [...formData.organizedinternational, ""],
    });
  };

  const handleDeleteOrganizedInternational = (index) => {
    const updatedOrganizedinternational = [...formData.organizedinternational];
    updatedOrganizedinternational.splice(index, 1);
    setFormData({
      ...formData,
      organizedinternational: updatedOrganizedinternational,
    });
  };

  const handleOrganizedInternationalChange = (index, value) => {
    const updatedOrganizedinternational = [...formData.organizedinternational];
    updatedOrganizedinternational[index] = value;
    setFormData({
      ...formData,
      organizedinternational: updatedOrganizedinternational,
    });
  };

  return (
    <div>
      <Grid xs={12} item>
        {formData.organizedinternational.map((paper, index) => (
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
                handleOrganizedInternationalChange(index, e.target.value)
              }
            />
            <Button
              style={{ align: "center", height: "40px" }}
              color="error"
              variant="contained"
              onClick={() => handleDeleteOrganizedInternational(index)}
            >
              Delete
            </Button>
            <br />
            <br />
          </div>
        ))}
        <Button variant="contained" onClick={handleAddOrganizedInternational}>
          Add
        </Button>
        <br />
        <br />
      </Grid>
    </div>
  );
};

export default OrganizedInternational;
