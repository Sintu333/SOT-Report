/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const ReportsNational = ({ formData, setFormData }) => {
  const handleAddReportsNational = () => {
    setFormData({
      ...formData,
      policyReportnational: [...formData.policyReportnational, ""],
    });
  };

  const handleDeleteReportsNational = (index) => {
    const updatedPolicyReportnational = [...formData.policyReportnational];
    updatedPolicyReportnational.splice(index, 1);
    setFormData({
      ...formData,
      policyReportnational: updatedPolicyReportnational,
    });
  };

  const handleReportsNationalChange = (index, value) => {
    const updatedPolicyReportnational = [...formData.policyReportnational];
    updatedPolicyReportnational[index] = value;
    setFormData({
      ...formData,
      policyReportnational: updatedPolicyReportnational,
    });
  };

  return (
    <div>
      <Grid xs={12} item>
        {formData.policyReportnational.map((paper, index) => (
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
                handleReportsNationalChange(index, e.target.value)
              }
            />
            <Button
              style={{ align: "center", height: "40px" }}
              color="error"
              variant="contained"
              onClick={() => handleDeleteReportsNational(index)}
            >
              Delete
            </Button>
            <br />
            <br />
          </div>
        ))}
        <Button variant="contained" onClick={handleAddReportsNational}>
          Add
        </Button>
        <br />
        <br />
      </Grid>
    </div>
  );
};

export default ReportsNational;
