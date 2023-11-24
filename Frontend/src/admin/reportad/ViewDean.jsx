//import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { UserContext } from "../../Components/UserContext";
import { useContext } from "react";
import { Card, CardContent } from "@mui/material";

export default function ViewDean() {
  const [deanReport, setDeanReport] = useState(null);
  const { user } = useContext(UserContext);

  const email = user.email;
  console.log(email);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/DeanDetail/${email}`
      );

      setDeanReport(response.data);
    };
    fetchData();
  }, [email]);

  return (
    <>
      <Card
        style={{
          maxWidth: 900,
          padding: "20px 5px",
          margin: "0 auto",
          border: "#2B65EC 2px",
          borderColor: "primary.main",
          borderRadius: 3,
          boxShadow: 24,
          backgroundColor: "#E6E6E6",
        }}
      >
        <CardContent>
          <>
            <center>
              <br />

              <h3>ANNUAL REPORT 2023-2024</h3>
              <br />
            </center>
            <hr />
            <br />

            <br />
            <h4>&emsp;Name of School:{deanReport && deanReport.schoolName}</h4>
            <br />
            <h4>&emsp;Dean :{deanReport && deanReport.dean}</h4>
            <br />
            <h4>&emsp;Telephone :{deanReport && deanReport.telephone}</h4>
            <br />
            <h4>&emsp;E-mail :{deanReport && deanReport.email}</h4>
            <br />
            <h4>&emsp;1.Vision and Mission of the School :</h4>
            {deanReport && deanReport.visionMission}
            <br />
            <br />
            <h4>&emsp;2.Name of the Departments/Centres under the School:</h4>
            <br />
            <center>
              <table border="1" style={{ borderCollapse: "collapse" }}>
                <tr>
                  <th>Sl. No.</th>
                  <th>Name of the Department/ Center</th>
                </tr>
                <tr>
                  <td>01</td>
                  <td>Architecture</td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>Biomedical Engineering</td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>Basic Sciences and Social Sciences</td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>Information Technology</td>
                </tr>
                <tr>
                  <td>05</td>
                  <td>Electronics and Communication Engineering</td>
                </tr>
                <tr>
                  <td>06</td>
                  <td>Energy Engineering</td>
                </tr>
                <tr>
                  <td>07</td>
                  <td>Nanotechnology</td>
                </tr>
              </table>
            </center>
            <br />
            <h4>&emsp;3.Salient Data of the School:</h4>
            <br />
            <center>
              <table border="1" style={{ borderCollapse: "collapse" }}>
                <tr>
                  <td>Total No. of Students awarded Ph.D. Degree</td>
                  <td>{deanReport && deanReport.totalStudentsPhd}</td>
                </tr>
                <tr>
                  <td>Total No. of Research Publications</td>
                  <td>{deanReport && deanReport.totalPublications}</td>
                </tr>
                <tr>
                  <td>Total No. of Books, Book Chapters, and Proceedings</td>
                  <td>
                    {deanReport && deanReport.totalBooksChaptersProceedings}
                  </td>
                </tr>
                <tr>
                  <td>
                    Total No. of Research Projects (Fund Received in Lakhs)
                  </td>
                  <td>{deanReport && deanReport.fundResearchProject}</td>
                </tr>
                <tr>
                  <td>(a) Completed</td>
                  <td>{deanReport && deanReport.researchProjectscompleted}</td>
                </tr>
                <tr>
                  <td>(b) Ongoing</td>
                  <td>{deanReport && deanReport.researchProjectsongoing}</td>
                </tr>
                <tr>
                  <td>(c) New</td>
                  <td>{deanReport && deanReport.researchProjectsnew}</td>
                </tr>
                <tr>
                  <td>
                    Total No. of Consultancy Projects (Fund Received in Lakhs)
                  </td>
                  <td>{deanReport && deanReport.fundConsultancyProject}</td>
                </tr>
                <tr>
                  <td>(a) National</td>
                  <td>
                    {deanReport && deanReport.consultancyProjectsnational}
                  </td>
                </tr>
                <tr>
                  <td>(b) International</td>
                  <td>
                    {deanReport && deanReport.consultancyProjectsinternational}
                  </td>
                </tr>
                <tr>
                  <td>
                    Total No. of Students Placed/Selected for Higher Studies
                  </td>
                  <td>
                    {deanReport && deanReport.totalStudentsPlacedHigherStudies}
                  </td>
                </tr>
              </table>
            </center>
            <br />
            <h4>
              &emsp;4. Total No. of Patents:
              {deanReport && deanReport.totalPatents}
            </h4>

            <br />
            <center>
              <table border="1" style={{ borderCollapse: "collapse" }}>
                <tr>
                  <th colSpan="2">Patent(s) Filed</th>
                  <th colSpan="2">Patent(s) Published</th>
                  <th colSpan="2">Patent(s) Granted</th>
                </tr>
                <tr>
                  <th>National</th>
                  <th>International</th>
                  <th>National</th>
                  <th>International</th>
                  <th>National</th>
                  <th>International</th>
                </tr>
                <tr>
                  <td>{deanReport && deanReport.patentsFilednational}</td>
                  <td>{deanReport && deanReport.patentsFiledinternational}</td>
                  <td>{deanReport && deanReport.patentsPublishednational}</td>
                  <td>
                    {deanReport && deanReport.patentsPublishedinternational}
                  </td>
                  <td>{deanReport && deanReport.patentsGrantednational}</td>
                  <td>
                    {deanReport && deanReport.patentsGrantedinternational}
                  </td>
                </tr>
              </table>
            </center>
            <br />
            <h4>
              &emsp;5.Total No. of Policy Documents:
              {deanReport && deanReport.totalPolicyDocuments}
            </h4>
            <br />
            <center>
              <table border="1" style={{ borderCollapse: "collapse" }}>
                <tr>
                  <th>
                    Policy Documents Applied (Name of the Agency/Government)
                  </th>
                  <th>
                    Policy Documents Approved/Accepted (Name of the
                    Agency/Government)
                  </th>
                </tr>
                <tr>
                  <td>{deanReport && deanReport.policyDocumentsApplied}</td>
                  <td>{deanReport && deanReport.policyDocumentsApproved}</td>
                </tr>
              </table>
            </center>
            <br />
            <h4>
              &emsp; 6. Major Achievements/Highlights during the period (such as
              International Funding/Collaborations, International/National
              Awards):
            </h4>
            {deanReport && deanReport.majorAchievementsHighlights}
            <br />
            <br />
            <h4>&emsp;7. Future Plans:</h4>
            {deanReport && deanReport.futurePlans}
            <br />

            <br />
            <br />
            <br />
            <h4>
              &emsp;&emsp; Signature of
              <br />
              &emsp;&emsp;&emsp; Dean
            </h4>
            <br />
            <br />
            <br />
            <br />
          </>
        </CardContent>
      </Card>
    </>
  );
}
