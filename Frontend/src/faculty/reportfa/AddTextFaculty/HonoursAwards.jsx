/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const HonoursAwards = ({ formData, setFormData }) => {
  const handleAddBooksISBN = () => {
    setFormData({
      ...formData,
      honoursAwardsMemberships: [...formData.honoursAwardsMemberships, ""],
    });
  };

  const handleDeleteBooksISBN = (index) => {
    const updatedHonoursAwardsMemberships = [
      ...formData.honoursAwardsMemberships,
    ];
    updatedHonoursAwardsMemberships.splice(index, 1);
    setFormData({
      ...formData,
      honoursAwardsMemberships: updatedHonoursAwardsMemberships,
    });
  };

  const handleBooksISBNChange = (index, value) => {
    const updatedHonoursAwardsMemberships = [
      ...formData.honoursAwardsMemberships,
    ];
    updatedHonoursAwardsMemberships[index] = value;
    setFormData({
      ...formData,
      honoursAwardsMemberships: updatedHonoursAwardsMemberships,
    });
  };

  return (
    <div>
      <Grid xs={12} item>
        {formData.honoursAwardsMemberships.map((paper, index) => (
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
              onChange={(e) => handleBooksISBNChange(index, e.target.value)}
            />
            <Button
              style={{ align: "center", height: "40px" }}
              color="error"
              variant="contained"
              onClick={() => handleDeleteBooksISBN(index)}
            >
              Delete
            </Button>
            <br />
            <br />
          </div>
        ))}
        <Button variant="contained" onClick={handleAddBooksISBN}>
          Add
        </Button>
        <br />
        <br />
      </Grid>
    </div>
  );
};

export default HonoursAwards;
