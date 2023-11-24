/* eslint-disable react/prop-types */
//import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const UgcCareJournals = ({ formData, setFormData }) => {
  const handleAddUgcCareJournals = () => {
    setFormData({
      ...formData,
      publicationsugcCareJournals: [
        ...formData.publicationsugcCareJournals,
        "",
      ],
    });
  };

  const handleDeleteUgcCareJournals = (index) => {
    const updatedPublicationsUgcCareJournals = [
      ...formData.publicationsugcCareJournals,
    ];
    updatedPublicationsUgcCareJournals.splice(index, 1);

    setFormData({
      ...formData,
      publicationsugcCareJournals: updatedPublicationsUgcCareJournals,
    });
  };

  const handleUgcCareJournalsChange = (index, value) => {
    const updatedPublicationsUgcCareJournals = [
      ...formData.publicationsugcCareJournals,
    ];
    updatedPublicationsUgcCareJournals[index] = value;

    setFormData({
      ...formData,
      publicationsugcCareJournals: updatedPublicationsUgcCareJournals,
    });
  };

  return (
    <div>
      <Grid xs={12} item>
        {formData.publicationsugcCareJournals.map((paper, index) => (
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
                handleUgcCareJournalsChange(index, e.target.value)
              }
            />
            <Button
              style={{ align: "center", height: "40px" }}
              variant="contained"
              color="error"
              onClick={() => handleDeleteUgcCareJournals(index)}
            >
              Delete
            </Button>
            <br />
            <br />
          </div>
        ))}
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddUgcCareJournals}
        >
          Add
        </Button>
        <br />
        <br />
      </Grid>
    </div>
  );
};

export default UgcCareJournals;
