/* eslint-disable react/prop-types */
//import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const BooksChapters = ({ formData, setFormData }) => {
  const handleAddBooksChapters = () => {
    setFormData({
      ...formData,
      publicationsbooksChapters: [...formData.publicationsbooksChapters, ""],
    });
  };

  const handleDeleteBooksChapters = (index) => {
    const updatedPublicationsbooksChapters = [
      ...formData.publicationsbooksChapters,
    ];
    updatedPublicationsbooksChapters.splice(index, 1);
    setFormData({
      ...formData,
      publicationsbooksChapters: updatedPublicationsbooksChapters,
    });
  };

  const handleBooksChaptersChange = (index, value) => {
    const updatedPublicationsbooksChapters = [
      ...formData.publicationsbooksChapters,
    ];
    updatedPublicationsbooksChapters[index] = value;
    setFormData({
      ...formData,
      publicationsbooksChapters: updatedPublicationsbooksChapters,
    });
  };

  return (
    <div>
      <Grid xs={12} item>
        {formData.publicationsbooksChapters.map((paper, index) => (
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
              onChange={(e) => handleBooksChaptersChange(index, e.target.value)}
            />
            <Button
              style={{ align: "center", height: "40px" }}
              color="error"
              variant="contained"
              onClick={() => handleDeleteBooksChapters(index)}
            >
              Delete
            </Button>
            <br />
            <br />
          </div>
        ))}
        <Button variant="contained" onClick={handleAddBooksChapters}>
          Add
        </Button>
        <br />
        <br />
      </Grid>
    </div>
  );
};

export default BooksChapters;
