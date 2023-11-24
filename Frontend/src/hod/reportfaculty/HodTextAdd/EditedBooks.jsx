/* eslint-disable react/prop-types */
//import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const EditedBooks = ({ formData, setFormData }) => {
  const handleAddEditedBooks = () => {
    setFormData({
      ...formData,
      publicationseditedBooksVolumes: [
        ...formData.publicationseditedBooksVolumes,
        "",
      ],
    });
  };

  const handleDeleteEditedBooks = (index) => {
    const updatedPublicationsEditedBooksVolumes = [
      ...formData.publicationseditedBooksVolumes,
    ];
    updatedPublicationsEditedBooksVolumes.splice(index, 1);

    setFormData({
      ...formData,
      publicationseditedBooksVolumes: updatedPublicationsEditedBooksVolumes,
    });
  };

  const handleEditedBooksChange = (index, value) => {
    const updatedPublicationsEditedBooksVolumes = [
      ...formData.publicationseditedBooksVolumes,
    ];
    updatedPublicationsEditedBooksVolumes[index] = value;

    setFormData({
      ...formData,
      publicationseditedBooksVolumes: updatedPublicationsEditedBooksVolumes,
    });
  };

  return (
    <div>
      <Grid xs={12} item>
        {formData.publicationseditedBooksVolumes.map((paper, index) => (
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
              onChange={(e) => handleEditedBooksChange(index, e.target.value)}
            />
            <Button
              style={{ align: "center", height: "40px" }}
              color="error"
              variant="contained"
              onClick={() => handleDeleteEditedBooks(index)}
            >
              Delete
            </Button>
            <br />
            <br />
          </div>
        ))}
        <Button variant="contained" onClick={handleAddEditedBooks}>
          Add
        </Button>
        <br />
        <br />
      </Grid>
    </div>
  );
};

export default EditedBooks;
