//import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { UserContext } from "../../Components/UserContext";
import { useContext } from "react";
import { Card, CardContent } from "@mui/material";

export default function HodView() {
  const [hodReport, setHodReport] = useState(null);
  const [reports, setReports] = useState(null);
  const { user } = useContext(UserContext);

  const email = user.email;
  console.log(email);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/HodDetail/${email}`
      );

      const reportResponse = await axios.get(
        `http://localhost:3000/report/${user.departmentName}`
      );

      console.log(reportResponse.data);

      setReports(reportResponse.data);
      setHodReport(response.data);
    };
    fetchData();
  }, [email, user.departmentName]);

  return (
    <>
      <Card
        style={{
          maxWidth: 1200,
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
          {hodReport ? (
            <>
              <center>
                <h3>
                  INFORMATION FORMAT OF DEPARTMENT/CENTRE <br />
                  NEHU ANNUAL REPORT 2022-2023
                </h3>
              </center>
              <hr />
              <br />
              <br />
              <h4>Name of Department:{user.departmentName}</h4>
              <br />
              <h4>Head :{hodReport && hodReport.name}</h4>
              <br />
              <h4>Telephone:{hodReport && hodReport.telephone}</h4>
              <br />
              <h4>E-mail :{hodReport && hodReport.email}</h4>
              <br />
              <h4>Faculty Profile:</h4>
              <br />
              <center>
                <table border="1" style={{ borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      <th>Designation</th>
                      <th>Name and Qualification</th>
                      <th>Specialization</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hodReport &&
                      hodReport.designation.map((entry, index) => (
                        <tr key={index}>
                          <td>{entry.post}</td>
                          <td>{entry.name}</td>
                          <td>{entry.specialization}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </center>
              <br />
              <h4>Thrust Areas of Research:</h4>
              {hodReport && hodReport.thrustAreasOfResearch}
              <br />
              <br />
              <h4>Brief Statement of Academic Activities and Achievements:</h4>
              {hodReport && hodReport.academicActivitiesAchievements}
              <br />
              <br />
              <h4>Students Profile:</h4>
              <br />
              <h4>
                &emsp;B.Tech :{hodReport && hodReport.studentsProfilebTech}
              </h4>
              <br />
              <h4>
                &emsp;M.Tech :{hodReport && hodReport.studentsProfilemTech}
              </h4>
              <br />
              <h4>&emsp;Ph.D. :{hodReport && hodReport.studentsProfilephd}</h4>
              <br />
              <h4>
                Enrolment of students & Degrees awarded from different States of
                India and Abroad:
              </h4>
              <br />
              <br />
              <h4>Students Awarded Ph.D. Degree:</h4>
              <br />
              <center>
                <table border="1" style={{ borderCollapse: "collapse" }}>
                  <tr>
                    <th>Name of Student</th>
                    <th>Title of Thesis</th>
                    <th>Name(s) of Supervisor(s)/ Joint Supervisor</th>
                  </tr>
                  <tbody>
                    {hodReport &&
                      hodReport.phdDegree.map((entry, index) => (
                        <tr key={index}>
                          <td>{entry.name}</td>
                          <td>{entry.title}</td>
                          <td>{entry.nameOfSupervisor}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </center>
              <br />
              <h4>Placement of Students:</h4>
              <br />
              <center>
                <table border="1" style={{ borderCollapse: "collapse" }}>
                  <tr>
                    <th>Name of the Student(s)</th>
                    <th>Name of the Programme</th>
                    <th>Post Held</th>
                    <th>Place of Work</th>
                  </tr>
                  <tbody>
                    {hodReport &&
                      hodReport.placement.map((entry, index) => (
                        <tr key={index}>
                          <td>{entry.name}</td>
                          <td>{entry.programme}</td>
                          <td>{entry.post}</td>
                          <td>{entry.place}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </center>
              <br />
              <h4>Students selected for Higher Studies:</h4>
              <br />
              <center>
                <table border="1" style={{ borderCollapse: "collapse" }}>
                  <tr>
                    <th>Name of the Student(s)</th>
                    <th>Name of the Programme</th>
                    <th>Institution/ Organization</th>
                    <th>Country</th>
                  </tr>
                  <tbody>
                    {hodReport &&
                      hodReport.higherStudies.map((entry, index) => (
                        <tr key={index}>
                          <td>{entry.name}</td>
                          <td>{entry.programme}</td>
                          <td>{entry.institution}</td>
                          <td>{entry.country}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </center>
              <br />
              <h4>Research Fellowship:</h4>
              <br />
              <center>
                <table border="1" style={{ borderCollapse: "collapse" }}>
                  <tr>
                    <th>CSIR-UGC-NET</th>
                    <th>UGC Non-Net</th>
                    <th>Rajiv Gandhi National Fellowship (SC/ST)</th>
                    <th>Meritorious Fellowship</th>
                    <th>Maulana Azad National Fellowship</th>
                    <th>Others</th>
                  </tr>
                  <tbody>
                    {hodReport &&
                      hodReport.fellowship.map((entry, index) => (
                        <tr key={index}>
                          <td>{entry.csir}</td>
                          <td>{entry.ugc}</td>
                          <td>{entry.rajivGandhi}</td>
                          <td>{entry.meritorious}</td>
                          <td>{entry.azad}</td>
                          <td>{entry.others}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </center>
              <br />
              <h4>Fieldwork/ Educational Tour of Students:</h4>
              <br />
              <h4>
                Teacher-in-Charge :{hodReport && hodReport.teacherInCharge}
              </h4>
              <br />
              <h4>
                Places/ Institutions Visited :{" "}
                {hodReport && hodReport.placesVisited}
              </h4>
              <br />
              <h4>
                Duration of Tour (Dates and number of days):
                {hodReport && hodReport.duration}
              </h4>
              <br />
              <h4>Purpose of Tour:{hodReport && hodReport.purpose}</h4>
              <br />
              <br />
              <h4>Courses Conducted:</h4>
              <br />
              <h4>Undergraduate:{hodReport && hodReport.undergraduate}</h4>
              <br />
              <h4>Semesters:</h4>
              <ol>
                {hodReport &&
                  hodReport.ugsemesters &&
                  hodReport.ugsemesters.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}
              </ol>
              <br />
              <br />
              <br />
              <h4>Postgraduate:{hodReport && hodReport.postgraduate}</h4>
              <br />
              <h4>Semesters :</h4>
              <ol>
                {hodReport &&
                  hodReport.pgsemesters &&
                  hodReport.pgsemesters.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}
              </ol>
              <br />
              <br />
              <h4>
                Seminars/Conferences/Workshops/Symposia/Extension Programmes
                (National/International):
              </h4>
              <br />
              <h4>&emsp;Organized:</h4>
              <ol>
                {hodReport &&
                  hodReport.conferencesOrganized &&
                  hodReport.conferencesOrganized.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}
              </ol>
              <br />
              <br />
              <h4>&emsp;Attended:</h4>
              <ol>
                {hodReport &&
                  hodReport.conferencesAttended &&
                  hodReport.conferencesAttended.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}
              </ol>
              <br />
              <br />
              <h4> Publications:</h4>
              <br />
              <h4>&emsp;(i) Research Papers:</h4>
              <ol>
                {hodReport &&
                  hodReport.publicationsugcCareJournals &&
                  hodReport.publicationsugcCareJournals.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}
                {/* {reports.map((report, index) => (
                  <li key={index}>{report.publicationsugcCareJournals}</li>
                ))} */}
                {/* {reports &&
                  reports.map((report, index) => (
                    <div key={index}>
                      {report &&
                        report.publicationsugcCareJournals.map(
                          (paper, jIndex) => <li key={jIndex}>{paper}</li>
                        )}
                    </div>
                  ))} */}

                {reports &&
                  Array.isArray(reports) &&
                  reports.map((report, index) => (
                    <div key={index}>
                      {report &&
                        report.publicationsugcCareJournals.map(
                          (paper, jIndex) => <li key={jIndex}>{paper}</li>
                        )}
                    </div>
                  ))}
              </ol>
              <br />
              <br />
              <h4>&emsp;(ii) Books :</h4>
              <ol>
                {hodReport &&
                  hodReport.publicationsbookswithISBN &&
                  hodReport.publicationsbookswithISBN.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}

                {reports &&
                  Array.isArray(reports) &&
                  reports.map((report, index) => (
                    <div key={index}>
                      {report.publicationsbookswithISBN.map((paper, jIndex) => (
                        <li key={jIndex}>{paper}</li>
                      ))}
                    </div>
                  ))}
              </ol>
              <br />
              <br />
              <h4>&emsp;(iii) Edited Books/Volumes</h4>
              <ol>
                {hodReport &&
                  hodReport.publicationseditedBooksVolumes &&
                  hodReport.publicationseditedBooksVolumes.map(
                    (paper, index) => <li key={index}>{paper}</li>
                  )}

                {reports &&
                  Array.isArray(reports) &&
                  reports.map((report, index) => (
                    <div key={index}>
                      {report.publicationseditedBooksVolumes.map(
                        (paper, jIndex) => (
                          <li key={jIndex}>{paper}</li>
                        )
                      )}
                    </div>
                  ))}
              </ol>
              <br />
              <br />
              <h4>&emsp;(iv) Book Chapters</h4>
              <ol>
                {hodReport &&
                  hodReport.publicationsbooksChapters &&
                  hodReport.publicationsbooksChapters.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}

                {reports &&
                  Array.isArray(reports) &&
                  reports.map((report, index) => (
                    <div key={index}>
                      {report.publicationsbooksChapters.map((paper, jIndex) => (
                        <li key={jIndex}>{paper}</li>
                      ))}
                    </div>
                  ))}
              </ol>
              <br />
              <br />
              <h4>&emsp;(v) Proceedings of Seminar/Conferences</h4>{" "}
              <ol>
                {hodReport &&
                  hodReport.seminarsConferences &&
                  hodReport.seminarsConferences.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}

                {reports &&
                  Array.isArray(reports) &&
                  reports.map((report, index) => (
                    <div key={index}>
                      {report.seminarsConferences.map((paper, jIndex) => (
                        <li key={jIndex}>{paper}</li>
                      ))}
                    </div>
                  ))}
              </ol>
              <br />
              <br />
              <h4>&emsp;(vi) Popular Articles (News Paper and Magazines)</h4>
              <ol>
                {hodReport &&
                  hodReport.publicationspopularArticles &&
                  hodReport.publicationspopularArticles.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}

                {reports &&
                  Array.isArray(reports) &&
                  reports.map((report, index) => (
                    <div key={index}>
                      {report.publicationspopularArticles.map(
                        (paper, jIndex) => (
                          <li key={jIndex}>{paper}</li>
                        )
                      )}
                    </div>
                  ))}
              </ol>
              <br />
              <br />
              <h4> IPR Items:</h4>
              <br />
              <h4>&emsp;(a) Patents:</h4>
              <br />
              <h4>&emsp;&emsp;(i) National:</h4>
              <br />
              <h4>
                &emsp;&emsp;&emsp;(A) Published:{" "}
                {hodReport && hodReport.patentsnationalpublished}
              </h4>
              <br />
              <h4>
                &emsp;&emsp;&emsp;(B) Granted:
                {hodReport && hodReport.patentsnationalgranted}
              </h4>
              <br />
              <h4>&emsp;&emsp;(ii) International:</h4>
              <br />
              <h4>
                &emsp;&emsp;&emsp;(A) Published:
                {hodReport && hodReport.patentsinternationalpublished}
              </h4>
              <br />
              <h4>
                &emsp;&emsp;&emsp;(B) Granted:
                {hodReport && hodReport.patentsinternationalgranted}
              </h4>
              <br />
              <h4>&emsp;(b) Policy Reports:</h4>
              <br />
              <h4>&emsp;&emsp;(i) National:</h4>{" "}
              <ol>
                {hodReport &&
                  hodReport.policyReportnational &&
                  hodReport.policyReportnational.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}

                {reports &&
                  Array.isArray(reports) &&
                  reports.map((report, index) => (
                    <div key={index}>
                      {report.policyReportnational.map((paper, jIndex) => (
                        <li key={jIndex}>{paper}</li>
                      ))}
                    </div>
                  ))}
              </ol>
              <br />
              <br />
              <h4>&emsp;&emsp;(ii) International:</h4>{" "}
              <ol>
                {hodReport &&
                  hodReport.policyReportinternational &&
                  hodReport.policyReportinternational.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}

                {reports &&
                  Array.isArray(reports) &&
                  reports.map((report, index) => (
                    <div key={index}>
                      {report.policyReportinternational.map((paper, jIndex) => (
                        <li key={jIndex}>{paper}</li>
                      ))}
                    </div>
                  ))}
              </ol>
              <br />
              <br />
              <h4>&emsp;(c) E-Content developed (MOOCs/SWAYAM):</h4>{" "}
              <ol>
                {hodReport &&
                  hodReport.eContentDeveloped &&
                  hodReport.eContentDeveloped.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}

                {reports &&
                  Array.isArray(reports) &&
                  reports.map((report, index) => (
                    <div key={index}>
                      {report.eContentDeveloped.map((paper, jIndex) => (
                        <li key={jIndex}>{paper}</li>
                      ))}
                    </div>
                  ))}
              </ol>
              <br />
              <br />
              <h4>&emsp;(d) Consultancy:</h4>
              <br />
              <table border="1" style={{ borderCollapse: "collapse" }}>
                <tr>
                  <th>Title of Consultancy Project (Total outlay in Lakhs)</th>
                  <th>Current Status (New /on-going/ completed)</th>
                  <th>Name of the Consultant</th>
                  <th>Multi/Single Institute (Tenure)</th>
                  <th>Funding Agency</th>
                  <th>
                    Fund received by NEHU in the year under report (in Lakhs)
                  </th>
                </tr>
                <tbody>
                  {hodReport &&
                    hodReport.consultancy.map((entry, index) => (
                      <tr key={index}>
                        <td>{entry.title}</td>
                        <td>{entry.currentStatus}</td>
                        <td>{entry.nameOfConsultant}</td>
                        <td>{entry.multiTenure}</td>
                        <td>{entry.fundingAgency}</td>
                        <td>{entry.fund}</td>
                      </tr>
                    ))}

                  {reports &&
                    reports.consultancy &&
                    reports.consultancy.map((entry, index) => (
                      <tr key={index}>
                        <td>{entry.title}</td>
                        <td>{entry.currentStatus}</td>
                        <td>{entry.nameOfConsultant}</td>
                        <td>{entry.multiTenure}</td>
                        <td>{entry.fundingAgency}</td>
                        <td>{entry.fund}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <br />
              <h4>Funds Received during the current Year:</h4>
              <br />
              <h4>
                Bulk Grant to Department/Centre/Section etc. other than EMR
                grant:
              </h4>
              <br />
              <center>
                <table border="1" style={{ borderCollapse: "collapse" }}>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Funding Agency</th>
                    <th>Amount (Rs. In Lakhs)</th>
                  </tr>
                  <tbody>
                    {hodReport &&
                      hodReport.fundReceived.map((entry, index) => (
                        <tr key={index}>
                          <td>{entry.srNo}</td>
                          <td>{entry.agency}</td>
                          <td>{entry.amount}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </center>
              <h4>EMR Research Projects to individual faculty members:</h4>
              <br />
              <table border="1" style={{ borderCollapse: "collapse" }}>
                <tr>
                  <th>Title of Project (Total outlay in Lakhs)</th>
                  <th>Current Status (New /on-going/ completed)</th>
                  <th>Name (Pl/Co-Pl)</th>
                  <th>Multi/Single Institute (Tenure)</th>
                  <th>Funding Agency</th>
                  <th>
                    Fund received by NEHU in the year under report (in Lakhs)
                  </th>
                </tr>
                <tbody>
                  {hodReport &&
                    hodReport.researchProjects.map((entry, index) => (
                      <tr key={index}>
                        <td>{entry.title}</td>
                        <td>{entry.currentStatus}</td>
                        <td>{entry.nameOfPlCopl}</td>
                        <td>{entry.multiTenure}</td>
                        <td>{entry.fundingAgency}</td>
                        <td>{entry.fund}</td>
                      </tr>
                    ))}

                  {reports &&
                    reports.researchProjects &&
                    reports.researchProjects.map((entry, index) => (
                      <tr key={index}>
                        <td>{entry.title}</td>
                        <td>{entry.currentStatus}</td>
                        <td>{entry.nameOfPlCopl}</td>
                        <td>{entry.multiTenure}</td>
                        <td>{entry.fundingAgency}</td>
                        <td>{entry.fund}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <br />
              <h4> Seminar/Conference/Symposium/Extension Programme etc.</h4>
              <br />
              <h4>&emsp;(i) Organized:</h4>
              <ol>
                {hodReport &&
                  hodReport.organizednational &&
                  hodReport.organizednational.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}

                {reports &&
                  Array.isArray(reports) &&
                  reports.map((report, index) => (
                    <div key={index}>
                      {report.organizednational.map((paper, jIndex) => (
                        <li key={jIndex}>{paper}</li>
                      ))}
                    </div>
                  ))}

                {reports &&
                  Array.isArray(reports) &&
                  reports.map((report, index) => (
                    <div key={index}>
                      {report.organizedinternational.map((paper, jIndex) => (
                        <li key={jIndex}>{paper}</li>
                      ))}
                    </div>
                  ))}
              </ol>
              <br />
              <br />
              <h4>&emsp;(ii) Attended:</h4>{" "}
              <ol>
                {hodReport &&
                  hodReport.attendednational &&
                  hodReport.attendednational.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}

                {reports &&
                  Array.isArray(reports) &&
                  reports.map((report, index) => (
                    <div key={index}>
                      {report.attendednational.map((paper, jIndex) => (
                        <li key={jIndex}>{paper}</li>
                      ))}
                    </div>
                  ))}

                {reports &&
                  Array.isArray(reports) &&
                  reports.map((report, index) => (
                    <div key={index}>
                      {report.attendedinternational.map((paper, jIndex) => (
                        <li key={jIndex}>{paper}</li>
                      ))}
                    </div>
                  ))}
              </ol>
              <br />
              <br />
              <h4> Academic Collaborations:</h4>
              <br />
              <h4>&emsp;(i) National </h4>{" "}
              <ol>
                {hodReport &&
                  hodReport.academicCollaborationsnational &&
                  hodReport.academicCollaborationsnational.map(
                    (paper, index) => <li key={index}>{paper}</li>
                  )}

                {reports &&
                  Array.isArray(reports) &&
                  reports.map((report, index) => (
                    <div key={index}>
                      {report.academicCollaborationsnational.map(
                        (paper, jIndex) => (
                          <li key={jIndex}>{paper}</li>
                        )
                      )}
                    </div>
                  ))}
              </ol>
              <br />
              <br />
              <h4>&emsp;(ii) International</h4>{" "}
              <ol>
                {hodReport &&
                  hodReport.academicCollaborationsinternational &&
                  hodReport.academicCollaborationsinternational.map(
                    (paper, index) => <li key={index}>{paper}</li>
                  )}

                {reports &&
                  Array.isArray(reports) &&
                  reports.map((report, index) => (
                    <div key={index}>
                      {report.academicCollaborationsinternational.map(
                        (paper, jIndex) => (
                          <li key={jIndex}>{paper}</li>
                        )
                      )}
                    </div>
                  ))}
              </ol>
              <br />
              <br />
              <h4> Honours/Awards/Recognition/Membership/Fellowship:</h4>
              <ol>
                {hodReport &&
                  hodReport.honoursAwardsMemberships &&
                  hodReport.honoursAwardsMemberships.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}

                {reports &&
                  Array.isArray(reports) &&
                  reports.map((report, index) => (
                    <div key={index}>
                      {report.honoursAwardsMemberships.map((paper, jIndex) => (
                        <li key={jIndex}>{paper}</li>
                      ))}
                    </div>
                  ))}
              </ol>
              <br />
              <br />
              <h4> Other Activities:</h4>{" "}
              <ol>
                {hodReport &&
                  hodReport.otherActivities &&
                  hodReport.otherActivities.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}

                {reports &&
                  Array.isArray(reports) &&
                  reports.map((report, index) => (
                    <div key={index}>
                      {report.otherActivities.map((paper, jIndex) => (
                        <li key={jIndex}>{paper}</li>
                      ))}
                    </div>
                  ))}
              </ol>
              <br />
              <br />
              <br />
              <hr />
            </>
          ) : (
            <p>No users found in the report.</p>
          )}
          <br />
          <br />
          <center>
            <h3>SUMMARY SHEET FOR THE ACADEMIC YEAR 2024</h3>
            <br />
            <br />
            {/* {reports && Array.isArray(reports) && reports.length > 0 ? ( */}
            <table border="1" style={{ borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td rowSpan="3">Details of Faculties</td>
                  <td>1</td>
                  <td>Name</td>
                  <td></td>

                  {reports &&
                    Array.isArray(reports) &&
                    reports.map((report, index) => (
                      <td key={index + 1}>{report.name}</td>
                    ))}

                  {/*<td>{reports && reports[0].name}</td>
                <td>{reports && reports[1].name}</td>
                <td>{reports && reports[2].name}</td>
                <td>{reports && reports[3].name}</td>
                 <td>{reports && reports[4].name}</td>
                <td>{reports && reports[5].name}</td>
                <td>{reports && reports[6].name}</td>
                <td>{reports && reports[7].name}</td>
                <td>{reports && reports[8].name}</td>
                <td>{reports && reports[9].name}</td>
                <td>{reports && reports[10].name}</td>
                <td>{reports && reports[11].name}</td>
                <td>{reports && reports[12].name}</td>
                <td>{reports && reports[13].name}</td>
                <td>{reports && reports[14].name}</td> */}
                </tr>
                <tr>
                  <td>2</td>
                  <td>Date of Joining</td>
                  <td></td>

                  {reports &&
                    Array.isArray(reports) &&
                    reports.map((report, index) => (
                      <td key={index + 1}>{report.user.dateJoining}</td>
                    ))}
                </tr>
                <tr>
                  <td>3</td>
                  <td>Field of specialisation</td>
                  <td></td>

                  {reports &&
                    Array.isArray(reports) &&
                    reports.map((report, index) => (
                      <td key={index + 1}>{report.fieldOfSpecialization}</td>
                    ))}
                </tr>
                <tr>
                  <td rowSpan="2">(A)Teaching Experience (in Years)</td>
                  <td>4</td>
                  <td>UG</td>
                  <td></td>

                  {reports &&
                    Array.isArray(reports) &&
                    reports.map((report, index) => (
                      <td key={index + 1}>{report.teachingExperienceUG}</td>
                    ))}
                </tr>
                <tr>
                  <td>5</td>
                  <td>PG, including PhD</td>
                  <td></td>

                  {reports &&
                    Array.isArray(reports) &&
                    reports.map((report, index) => (
                      <td key={index + 1}>{report.teachingExperiencePG}</td>
                    ))}
                </tr>
                <tr>
                  <td rowSpan="16">(B) Research activities</td>
                  <td>6</td>
                  <td>Basic Research</td>
                  <td></td>

                  {reports &&
                    Array.isArray(reports) &&
                    reports.map((report, index) => (
                      <td key={index + 1}>
                        {report.publicationsbasicResearch}
                      </td>
                    ))}
                </tr>
                <tr>
                  <td>7</td>
                  <td>Applied Research</td>
                  <td></td>

                  {reports &&
                    Array.isArray(reports) &&
                    reports.map((report, index) => (
                      <td key={index + 1}>
                        {report.publicationsappliedResearch}
                      </td>
                    ))}
                </tr>
                <tr>
                  <td>8</td>
                  <td>Action Research</td>
                  <td></td>

                  {reports &&
                    Array.isArray(reports) &&
                    reports.map((report, index) => (
                      <td key={index + 1}>
                        {report.publicationsactionResearch}
                      </td>
                    ))}
                </tr>
                <tr>
                  <td>9</td>
                  <td>Project Submitted</td>
                  <td></td>

                  {reports &&
                    Array.isArray(reports) &&
                    reports.map((report, index) => (
                      <td key={index + 1}>
                        {report.publicationsprojectSubmitted}
                      </td>
                    ))}
                </tr>
                <tr>
                  <td>10</td>
                  <td>Ongoing Project </td>
                  <td></td>

                  {reports &&
                    Array.isArray(reports) &&
                    reports.map((report, index) => (
                      <td key={index + 1}>
                        {report.publicationsongoingProject}
                      </td>
                    ))}
                </tr>
                <tr>
                  <td>11</td>
                  <td rowSpan="2">Research Paper in UGC care list journals </td>
                  <td>Group I</td>

                  {reports &&
                    Array.isArray(reports) &&
                    reports.map((report, index) => (
                      <td key={index + 1}>{report.publicationsgroupI}</td>
                    ))}
                </tr>
                <tr>
                  <td>12</td>

                  <td>Group II</td>

                  {reports &&
                    Array.isArray(reports) &&
                    reports.map((report, index) => (
                      <td key={index + 1}>{report.publicationsgroupII}</td>
                    ))}
                </tr>
                <tr>
                  <td>13</td>
                  <td rowSpan="2">Books /Books chapters Published </td>
                  <td>Books</td>

                  {reports &&
                    Array.isArray(reports) &&
                    reports.map((report, index) => (
                      <td key={index + 1}>
                        {report.publicationsbookswithISBN.length}
                      </td>
                    ))}
                </tr>
                <tr>
                  <td>14</td>

                  <td>Book Chapters</td>

                  {reports &&
                    Array.isArray(reports) &&
                    reports.map((report, index) => (
                      <td key={index + 1}>
                        {report.publicationsbooksChapters.length}
                      </td>
                    ))}
                </tr>
                <tr>
                  <td>15</td>
                  <td>Popular Articles (Newspaper/ Magazines)</td>
                  <td></td>

                  {reports &&
                    Array.isArray(reports) &&
                    reports.map((report, index) => (
                      <td key={index + 1}>
                        {report.publicationspopularArticles.length}
                      </td>
                    ))}
                </tr>
                <tr>
                  <td>16</td>
                  <td rowSpan="2">Seminar / Conference/ Symposia organized </td>
                  <td>National</td>

                  {reports &&
                    Array.isArray(reports) &&
                    reports.map((report, index) => (
                      <td key={index + 1}>{report.organizednational.length}</td>
                    ))}
                </tr>
                <tr>
                  <td>17</td>

                  <td> International</td>

                  {reports &&
                    Array.isArray(reports) &&
                    reports.map((report, index) => (
                      <td key={index + 1}>
                        {report.organizedinternational.length}
                      </td>
                    ))}
                </tr>
                <tr>
                  <td>18</td>
                  <td rowSpan="2">Seminar / Conference/ Symposia attended</td>
                  <td>National</td>

                  {reports &&
                    Array.isArray(reports) &&
                    reports.map((report, index) => (
                      <td key={index + 1}>{report.attendednational.length}</td>
                    ))}
                </tr>
                <tr>
                  <td>19</td>

                  <td> International</td>

                  {reports &&
                    Array.isArray(reports) &&
                    reports.map((report, index) => (
                      <td key={index + 1}>
                        {report.attendedinternational.length}
                      </td>
                    ))}
                </tr>
                <tr>
                  <td>20</td>
                  <td>Conference Proceedings </td>
                  <td></td>

                  {reports &&
                    Array.isArray(reports) &&
                    reports.map((report, index) => (
                      <td key={index + 1}>
                        {report.seminarsConferences.length}
                      </td>
                    ))}
                </tr>
                <tr>
                  <td>21</td>
                  <td>Consultancy </td>
                  <td></td>

                  {reports &&
                    Array.isArray(reports) &&
                    reports.map((report, index) => (
                      <td key={index + 1}>{report.consultancy.length}</td>
                    ))}
                </tr>
                <tr>
                  <td rowSpan="3">(C) Patent</td>
                  <td>22</td>
                  <td>Applied</td>
                  <td></td>

                  {reports &&
                    Array.isArray(reports) &&
                    reports.map((report, index) => (
                      <td key={index + 1}>{report.patentsnationalapplied}</td>
                    ))}
                </tr>
                <tr>
                  <td>23</td>
                  <td>Published</td>
                  <td></td>

                  {reports &&
                    Array.isArray(reports) &&
                    reports.map((report, index) => (
                      <td key={index + 1}>{report.patentsnationalpublished}</td>
                    ))}
                </tr>
                <tr>
                  <td>24</td>
                  <td>Granted</td>
                  <td></td>

                  {reports &&
                    Array.isArray(reports) &&
                    reports.map((report, index) => (
                      <td key={index + 1}>{report.patentsnationalgranted}</td>
                    ))}
                </tr>
                <tr>
                  <td>(D) E-Content</td>
                  <td>25</td>
                  <td>MOOC/SWAYAM/ E-content developed</td>
                  <td></td>

                  {reports &&
                    Array.isArray(reports) &&
                    reports.map((report, index) => (
                      <td key={index + 1}>{report.eContentDeveloped.length}</td>
                    ))}
                </tr>
                <tr>
                  <td rowSpan="5">(E) Any Other</td>
                  <td>26</td>
                  <td>Teaching /Extension /outreach activities</td>
                  <td></td>

                  {reports &&
                    Array.isArray(reports) &&
                    reports.map((report, index) => (
                      <td key={index + 1}>
                        {report.teachingExtensionOutreachActivities}
                      </td>
                    ))}
                </tr>
                <tr>
                  <td>27</td>
                  <td>Responsibilities other than teaching</td>
                  <td></td>

                  {reports &&
                    Array.isArray(reports) &&
                    reports.map((report, index) => (
                      <td key={index + 1}>{report.otherThanTeaching}</td>
                    ))}
                </tr>
                <tr>
                  <td>28</td>
                  <td>Awards/ Honours/ Recognition/ Membership/ Fellowship</td>
                  <td></td>

                  {reports &&
                    Array.isArray(reports) &&
                    reports.map((report, index) => (
                      <td key={index + 1}>
                        {report.honoursAwardsMemberships.length}
                      </td>
                    ))}
                </tr>
                <tr>
                  <td>29</td>
                  <td rowSpan="2">Collaborations</td>
                  <td>National</td>

                  {reports &&
                    Array.isArray(reports) &&
                    reports.map((report, index) => (
                      <td key={index + 1}>
                        {report.academicCollaborationsnational.length}
                      </td>
                    ))}
                </tr>
                <tr>
                  <td>30</td>

                  <td>International</td>

                  {reports &&
                    Array.isArray(reports) &&
                    reports.map((report, index) => (
                      <td key={index + 1}>
                        {report.academicCollaborationsinternational.length}
                      </td>
                    ))}
                </tr>
              </tbody>
            </table>
            {/* ) : (
              <p>No users found in the report.</p>
            )} */}
          </center>
          <br />
          <br />
          <br />
          <h4>
            &emsp;&emsp; Signature of
            <br />
            &emsp;&emsp;&emsp; HOD
          </h4>
          <br />
          <br />
          <br />
          <br />
        </CardContent>
      </Card>
    </>
  );
}
