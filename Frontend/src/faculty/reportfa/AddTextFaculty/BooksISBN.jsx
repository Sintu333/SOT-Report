/* eslint-disable react/prop-types */
//import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const BooksISBN = ({ formData, setFormData }) => {
  const handleAddBooksISBN = () => {
    setFormData({
      ...formData,
      publicationsbookswithISBN: [...formData.publicationsbookswithISBN, ""],
    });
  };

  const handleDeleteBooksISBN = (index) => {
    const updatedPublicationsbookswithISBN = [
      ...formData.publicationsbookswithISBN,
    ];
    updatedPublicationsbookswithISBN.splice(index, 1);

    setFormData({
      ...formData,
      publicationsbookswithISBN: updatedPublicationsbookswithISBN,
    });
  };

  const handleBooksISBNChange = (index, value) => {
    const updatedPublicationsbookswithISBN = [
      ...formData.publicationsbookswithISBN,
    ];
    updatedPublicationsbookswithISBN[index] = value;

    setFormData({
      ...formData,
      publicationsbookswithISBN: updatedPublicationsbookswithISBN,
    });
  };

  return (
    <div>
      <Grid xs={12} item>
        {formData.publicationsbookswithISBN.map((paper, index) => (
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

export default BooksISBN;
