/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const PopularArticles = ({ formData, setFormData }) => {
  const handleAddPopularArticles = () => {
    setFormData({
      ...formData,
      publicationspopularArticles: [
        ...formData.publicationspopularArticles,
        "",
      ],
    });
  };

  const handleDeletePopularArticles = (index) => {
    const updatedPublicationspopularArticles = [
      ...formData.publicationspopularArticles,
    ];
    updatedPublicationspopularArticles.splice(index, 1);
    setFormData({
      ...formData,
      publicationspopularArticles: updatedPublicationspopularArticles,
    });
  };

  const handlePopularArticlesChange = (index, value) => {
    const updatedPublicationspopularArticles = [
      ...formData.publicationspopularArticles,
    ];
    updatedPublicationspopularArticles[index] = value;
    setFormData({
      ...formData,
      publicationspopularArticles: updatedPublicationspopularArticles,
    });
  };

  return (
    <div>
      <Grid xs={12} item>
        {formData.publicationspopularArticles.map((paper, index) => (
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
                handlePopularArticlesChange(index, e.target.value)
              }
            />
            <Button
              style={{ align: "center", height: "40px" }}
              color="error"
              variant="contained"
              onClick={() => handleDeletePopularArticles(index)}
            >
              Delete
            </Button>
            <br />
            <br />
          </div>
        ))}
        <Button variant="contained" onClick={handleAddPopularArticles}>
          Add
        </Button>
        <br />
        <br />
      </Grid>
    </div>
  );
};

export default PopularArticles;
