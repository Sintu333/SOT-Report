//import React from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { UserContext } from "../../Components/UserContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import SendIcon from "@mui/icons-material/Send";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";

export default function ReportForm() {
  const { user } = useContext(UserContext);

  const [formData, setFormData] = useState({
    schoolName: user.schoolName,
    dean: user.name,
    telephone: "",
    email: user.email,
    visionMission: "",
    departmentsCenters: "IT, ECE, ENE, BME, ARCH, NANO, BSSS",

    totalStudentsPhd: "",
    totalPublications: "",
    totalBooksChaptersProceedings: "",
    fundResearchProject: "",

    researchProjectscompleted: "",
    researchProjectsongoing: "",
    researchProjectsnew: "",

    fundConsultancyProject: "",
    ConsultancyProjectsnational: "",
    ConsultancyProjectsinternational: "",

    totalStudentsPlacedHigherStudies: "",

    totalPatents: "",

    patentsFilednational: "",
    patentsFiledinternational: "",

    patentsPublishednational: "",
    patentsPublishedinternational: "",

    patentsGrantednational: "",
    patentsGrantedinternational: "",

    totalPolicyDocuments: "",
    policyDocumentsApplied: "",
    policyDocumentsApproved: "",
    majorAchievementsHighlights: "",
    futurePlans: "",
  });

  const handleFieldChange = (event) => {
    //const { name, value } = event.target;
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
    //console.log(formData);
  };

  const handleSave = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/dean/dean-report", {
        reportData: formData,
        user
      });

      if (response.status === 201) {
        // Handle successful submission (e.g., show a success message)
        console.log("Report submitted successfully.");
        toast.success("Report submitted successfully");
      } else if (response.status === 400) {
        console.log(" Email already sent a report.");
        toast.error("User has already sent a report.");
      }
    } catch (error) {
      // Handle errors (e.g., display an error message)
      console.error("Error submitting the report:", error);
      toast.error("Error submitting the report");
    }
  };

  useEffect(() => {
  const fetchData = () => {
    axios
      .get(`http://localhost:3000/api/dean/dean-report/${user._id}`)
      .then((response) => {
        console.log(response.data);
        setFormData(response.data.reportData );
      })
      .catch((error) => {
        console.log(error);
      });
  };

    fetchData();
  }, [user._id]);


  return (
    <>
      <marquee>Last date for submission of annual report </marquee>
      <Typography gutterBottom variant="h4" align="center">
        Annual Report
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 900, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              Please fill up the form to submit your annual report.
            </Typography>
            <form >
              <Grid container spacing={2}>
                <Grid xs={12} item>
                  <h4>Name of School</h4>
                  <TextField
                    placeholder="Enter your School Name"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleFieldChange}
                    value={formData.schoolName}
                    name="schoolName"
                    id="schoolName"
                  />
                </Grid>
                <Grid xs={12} item>
                  <h4>Dean</h4>
                  <TextField
                    placeholder="Name of Dean"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleFieldChange}
                    value={formData.dean}
                    name="dean"
                    id="dean"
                  />
                </Grid>
                <Grid item xs={12}>
                  <h4>Telephone</h4>
                  <TextField
                    placeholder="Enter your Telephone number"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleFieldChange}
                    value={formData.telephone}
                    name="telephone"
                    id="telephone"
                  />
                </Grid>
                <Grid item xs={12}>
                  <h4>E-mail</h4>
                  <TextField
                    type="email"
                    placeholder="Enter your Email"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleFieldChange}
                    value={formData.email}
                    name="email"
                    id="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <h4>1. Vision and Mission of the School:</h4>
                  <TextField
                    multiline
                    placeholder="Enter your Vision and Mission here"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleFieldChange}
                    value={formData.visionMission}
                    name="visionMission"
                    id="visionMission"
                  />
                </Grid>
                <Grid item xs={12}>
                  <h4>2.Name of the Departments/Centers under the School</h4>
                  <TextField
                    multiline
                    placeholder="Enter Departments/Centers"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleFieldChange}
                    value={formData.departmentsCenters}
                    name="departmentsCenters"
                    id="departmentsCenters"
                  />
                </Grid>

                <Grid item xs={12}>
                  <br />
                  <h4>3.Salient Data of the School[during the current year]</h4>
                  <br />
                  <h4>Total No. of Students awarded Ph.D. Degree</h4>
                  <TextField
                    type="number"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleFieldChange}
                    value={formData.totalStudentsPhd}
                    name="totalStudentsPhd"
                    id="totalStudentsPhd"
                  />
                </Grid>
                <Grid item xs={12}>
                  <h4>
                    Total No. of Research Publications(Only UGC care journals)
                  </h4>

                  <TextField
                    type="number"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleFieldChange}
                    value={formData.totalPublications}
                    name="totalPublications"
                    id="totalPublications"
                  />
                </Grid>
                <Grid item xs={12}>
                  <h4>
                    Total No. of Books, Book Chapters, and Proceedings(Only with
                    ISBN)
                  </h4>

                  <TextField
                    type="number"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleFieldChange}
                    value={formData.totalBooksChaptersProceedings}
                    name="totalBooksChaptersProceedings"
                    id="totalBooksChaptersProceedings"
                  />
                </Grid>
                <Grid item xs={12}>
                  <h4>
                    Total No. of Research Projects (Fund Received in Lakhs)
                  </h4>

                  <TextField
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleFieldChange}
                    value={formData.fundResearchProject}
                    name="fundResearchProject"
                    id="fundResearchProject"
                  />
                </Grid>
                <Grid item xs={4}>
                  <h4>Completed</h4>

                  <TextField
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleFieldChange}
                    value={formData.researchProjectscompleted}
                    name="researchProjectscompleted"
                    id="ResearchProjectscompleted"
                  />
                </Grid>
                <Grid item xs={4}>
                  <h4>Ongoing</h4>

                  <TextField
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleFieldChange}
                    value={formData.researchProjectsongoing}
                    name="researchProjectsongoing"
                    id="ResearchProjectsongoing"
                  />
                </Grid>

                <Grid item xs={4}>
                  <h4>New</h4>
                  <TextField
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleFieldChange}
                    value={formData.researchProjectsnew}
                    name="researchProjectsnew"
                    id="ResearchProjectsnew"
                  />
                </Grid>
                <Grid item xs={12}>
                  <h4>
                    Total No. of Consultancy Projects (Fund Received in Lakhs)
                  </h4>
                  <TextField
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleFieldChange}
                    value={formData.fundConsultancyProject}
                    name="fundConsultancyProject"
                    id="fundConsultancyProject"
                  />
                </Grid>
                <Grid item xs={6}>
                  <h4>National</h4>
                  <TextField
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleFieldChange}
                    value={formData.ConsultancyProjectsnational}
                    name="ConsultancyProjectsnational"
                    id="ConsultancyProjectsnational"
                  />
                </Grid>
                <Grid item xs={6}>
                  <h4>International</h4>
                  <TextField
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleFieldChange}
                    value={formData.ConsultancyProjectsinternational}
                    name="ConsultancyProjectsinternational"
                    id="ConsultancyProjectsinternational"
                  />
                </Grid>
                <Grid item xs={12}>
                  <h4>
                    Total No. of Students Placed/Selected for Higher Studies
                  </h4>
                  <TextField
                    type="number"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleFieldChange}
                    value={formData.totalStudentsPlacedHigherStudies}
                    name="totalStudentsPlacedHigherStudies"
                    id="totalStudentsPlacedHigherStudies"
                  />
                </Grid>
                <Grid item xs={12}>
                  <h4>4. Total No. of Patents:</h4>
                  <TextField
                    type="number"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleFieldChange}
                    value={formData.totalPatents}
                    name="totalPatents"
                    id="totalPatents"
                  />
                </Grid>
                <Grid item xs={4}>
                  <h4>Patent(s) Filed</h4>
                </Grid>
                <Grid item xs={4}>
                  <h4>Patent(s) Published</h4>
                </Grid>
                <Grid item xs={4}>
                  <h4>Patent(s) Granted</h4>
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    type="number"
                    label="National"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleFieldChange}
                    value={formData.patentsFilednational}
                    name="patentsFilednational"
                    id="patentsFilednational"
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    type="number"
                    label="International"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleFieldChange}
                    value={formData.patentsFiledinternational}
                    name="patentsFiledinternational"
                    id="patentsFiledinternational"
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    type="number"
                    label="National"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleFieldChange}
                    value={formData.patentsPublishednational}
                    name="patentsPublishednational"
                    id="patentsPublishednational"
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    type="number"
                    label="International"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleFieldChange}
                    value={formData.patentsPublishedinternational}
                    name="patentsPublishedinternational"
                    id="patentsPublishedinternational"
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    type="number"
                    label="National"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleFieldChange}
                    value={formData.patentsGrantednational}
                    name="patentsGrantednational"
                    id="patentsGrantednational"
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    type="number"
                    label="International"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleFieldChange}
                    value={formData.patentsGrantedinternational}
                    name="patentsGrantedinternational"
                    id="patentsGrantedinternational"
                  />
                </Grid>
                <Grid item xs={12}>
                  <h4>5.Total No. of Policy Documents</h4>
                  <TextField
                    type="number"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleFieldChange}
                    value={formData.totalPolicyDocuments}
                    name="totalPolicyDocuments"
                    id="totalPolicyDocuments"
                  />
                </Grid>
                <Grid item xs={12}>
                  <h4>
                    Policy Documents Applied (Name of the Agency/Government)
                  </h4>
                  <TextField
                    multiline
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleFieldChange}
                    value={formData.policyDocumentsApplied}
                    name="policyDocumentsApplied"
                    id="policyDocumentsApplied"
                  />
                </Grid>
                <Grid item xs={12}>
                  <h4>
                    Policy Documents Approved/Accepted (Name of the
                    Agency/Government)
                  </h4>
                  <TextField
                    multiline
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleFieldChange}
                    value={formData.policyDocumentsApproved}
                    name="policyDocumentsApproved"
                    id="policyDocumentsApproved"
                  />
                </Grid>
                <Grid item xs={12}>
                  <h4>
                    6. Major Achievements/Highlights during the period (such as
                    International Funding/Collaborations, International/National
                    Awards):
                  </h4>
                  <TextField
                    multiline
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleFieldChange}
                    value={formData.majorAchievementsHighlights}
                    name="majorAchievementsHighlights"
                    id="majorAchievementsHighlights"
                  />
                </Grid>
                <Grid item xs={12}>
                  <h4>7. Future Plans</h4>
                  <TextField
                    multiline
                    variant="outlined"
                    fullWidth
                    required
                    onChange={handleFieldChange}
                    value={formData.futurePlans}
                    name="futurePlans"
                    id="futurePlans"
                  />
                </Grid>

                <Grid item xs={4} align="center">
                  <Button
                    endIcon={<SendIcon />}
                    variant="contained"
                    color="success"
                    onClick={handleSave}
                  >
                    Save & Submit Report
                  </Button>
                </Grid>

                <Grid item xs={4} align="center">
                  {/* <Button type="submit" variant="contained" color="primary">
                    Submit Report
                  </Button> */}
                </Grid>
                <Grid item xs={4} align="center">
                  <Link to="/viewdean">
                    <Button
                      startIcon={<DescriptionRoundedIcon />}
                      variant="contained"
                      color="warning"
                    >
                      View Report
                    </Button>
                  </Link>
                </Grid>

                <Grid />
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
