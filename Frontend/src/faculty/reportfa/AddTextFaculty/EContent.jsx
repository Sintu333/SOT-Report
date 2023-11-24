/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const EContent = ({ formData, setFormData }) => {
  const handleAddEContent = () => {
    setFormData({
      ...formData,
      eContentDeveloped: [...formData.eContentDeveloped, ""],
    });
  };

  const handleDeleteEContent = (index) => {
    const updatedEContentDeveloped = [...formData.eContentDeveloped];
    updatedEContentDeveloped.splice(index, 1);
    setFormData({
      ...formData,
      eContentDeveloped: updatedEContentDeveloped,
    });
  };

  const handleEContentChange = (index, value) => {
    const updatedEContentDeveloped = [...formData.eContentDeveloped];
    updatedEContentDeveloped[index] = value;
    setFormData({
      ...formData,
      eContentDeveloped: updatedEContentDeveloped,
    });
  };

  return (
    <div>
      <Grid xs={12} item>
        {formData.eContentDeveloped.map((paper, index) => (
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

export default EContent;
