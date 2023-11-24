/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const OrganizedNational = ({ formData, setFormData }) => {
  const handleAddOrganizedNational = () => {
    setFormData({
      ...formData,
      organizednational: [...formData.organizednational, ""],
    });
  };

  const handleDeleteOrganizedNational = (index) => {
    const updatedOrganizednational = [...formData.organizednational];
    updatedOrganizednational.splice(index, 1);
    setFormData({
      ...formData,
      organizednational: updatedOrganizednational,
    });
  };

  const handleOrganizedNationalChange = (index, value) => {
    const updatedOrganizednational = [...formData.organizednational];
    updatedOrganizednational[index] = value;
    setFormData({
      ...formData,
      organizednational: updatedOrganizednational,
    });
  };

  return (
    <div>
      <Grid xs={12} item>
        {formData.organizednational.map((paper, index) => (
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
                handleOrganizedNationalChange(index, e.target.value)
              }
            />
            <Button
              style={{ align: "center", height: "40px" }}
              color="error"
              variant="contained"
              onClick={() => handleDeleteOrganizedNational(index)}
            >
              Delete
            </Button>
            <br />
            <br />
          </div>
        ))}
        <Button variant="contained" onClick={handleAddOrganizedNational}>
          Add
        </Button>
        <br />
        <br />
      </Grid>
    </div>
  );
};

export default OrganizedNational;
