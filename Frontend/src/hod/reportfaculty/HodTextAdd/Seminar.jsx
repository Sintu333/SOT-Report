/* eslint-disable react/prop-types */
// import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const Seminar = ({ formData, setFormData }) => {
  const handleAddSeminar = () => {
    setFormData({
      ...formData,
      seminarsConferences: [...formData.seminarsConferences, ""],
    });
  };

  const handleDeleteSeminar = (index) => {
    const updatedSeminarsConferences = [...formData.seminarsConferences];
    updatedSeminarsConferences.splice(index, 1);
    setFormData({
      ...formData,
      seminarsConferences: updatedSeminarsConferences,
    });
  };

  const handleSeminarChange = (index, value) => {
    const updatedSeminarsConferences = [...formData.seminarsConferences];
    updatedSeminarsConferences[index] = value;
    setFormData({
      ...formData,
      seminarsConferences: updatedSeminarsConferences,
    });
  };

  return (
    <div>
      <Grid xs={12} item>
        {formData.seminarsConferences.map((paper, index) => (
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
              onChange={(e) => handleSeminarChange(index, e.target.value)}
            />
            <Button
              style={{ align: "center", height: "40px" }}
              color="error"
              variant="contained"
              onClick={() => handleDeleteSeminar(index)}
            >
              Delete
            </Button>
          </div>
        ))}
        <Button variant="contained" onClick={handleAddSeminar}>
          Add
        </Button>
        <br />
        <br />
      </Grid>
    </div>
  );
};

export default Seminar;
