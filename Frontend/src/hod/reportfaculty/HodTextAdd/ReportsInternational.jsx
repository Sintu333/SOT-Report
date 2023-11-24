/* eslint-disable react/prop-types */

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const ReportsInternational = ({ formData, setFormData }) => {
  const handleAddReportsInternational = () => {
    setFormData({
      ...formData,
      policyReportinternational: [...formData.policyReportinternational, ""],
    });
  };

  const handleDeleteReportsInternational = (index) => {
    const updatedPolicyReportinternational = [
      ...formData.policyReportinternational,
    ];
    updatedPolicyReportinternational.splice(index, 1);
    setFormData({
      ...formData,
      policyReportinternational: updatedPolicyReportinternational,
    });
  };

  const handleReportsInternationalChange = (index, value) => {
    const updatedPolicyReportinternational = [
      ...formData.policyReportinternational,
    ];
    updatedPolicyReportinternational[index] = value;
    setFormData({
      ...formData,
      policyReportinternational: updatedPolicyReportinternational,
    });
  };

  return (
    <div>
      <Grid xs={12} item>
        {formData.policyReportinternational.map((paper, index) => (
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
                handleReportsInternationalChange(index, e.target.value)
              }
            />
            <Button
              style={{ align: "center", height: "40px" }}
              color="error"
              variant="contained"
              onClick={() => handleDeleteReportsInternational(index)}
            >
              Delete
            </Button>
            <br />
            <br />
          </div>
        ))}
        <Button variant="contained" onClick={handleAddReportsInternational}>
          Add
        </Button>
        <br />
        <br />
      </Grid>
    </div>
  );
};

export default ReportsInternational;
