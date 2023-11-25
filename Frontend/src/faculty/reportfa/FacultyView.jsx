//import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { UserContext } from '../../Components/UserContext'
import { useContext } from 'react'
import { Card, CardContent } from '@mui/material'

export default function FacultyView() {
  const [facultyReport, setFacultyReport] = useState(null)
  const { user } = useContext(UserContext)

  const email = user.email
  console.log(email)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://192.168.1.20:3000/api/reports/faculty-report/${user._id}`
      )

      setFacultyReport(response.data.reportData)
    }
    fetchData()
  }, [email, user._id])

  return (
    <>
      <>
        <Card
          style={{
            maxWidth: 900,
            padding: '20px 5px',
            margin: '0 auto',
            border: '#2B65EC 2px',
            borderColor: 'primary.main',
            borderRadius: 3,
            boxShadow: 24,
            backgroundColor: '#E6E6E6',
          }}
        >
          <CardContent>
            <center>
              <br />
              <br />
              <h3>FACULTY INFORMATION FOR NEHU ANNUAL REPORT (2023-2024)</h3>
            </center>
            <br />
            <hr />
            <br />
            <h4>1. Name of Faculty:{user.name}</h4>
            <br />
            <h4>
              2. Field of Specialization:
              {facultyReport && facultyReport.fieldOfSpecialization}
            </h4>
            <br />
            <h4> 3. Publications:</h4>
            <br />
            <h4>&emsp;(i) Research Papers:</h4>
            {facultyReport && facultyReport.publicationsugcCareJournals && (
              <ol>
                {facultyReport.publicationsugcCareJournals &&
                  facultyReport.publicationsugcCareJournals.map(
                    (paper, index) => {
                      if (paper) {
                        return <li key={index}>{paper}</li>
                      }
                    }
                  )}
              </ol>
            )}
            <br />
            <h4>&emsp;(ii) Books :</h4>
            <ol>
              {facultyReport &&
                facultyReport.publicationsbookswithISBN &&
                facultyReport.publicationsbookswithISBN.map((paper, index) => {
                  if (paper) {
                    return <li key={index}>{paper}</li>
                  }
                })}
            </ol>
            <br />
            <br />
            <h4>&emsp;(iii) Edited Books/Volumes:</h4>
            <ol>
              {facultyReport &&
                facultyReport.publicationseditedBooksVolumes &&
                facultyReport.publicationseditedBooksVolumes.map(
                  (paper, index) => {
                    if (paper) {
                      return <li key={index}>{paper}</li>
                    }
                  }
                )}
            </ol>
            <br />
            <br />
            <h4>&emsp;(iv) Book Chapters:</h4>
            <ol>
              {facultyReport &&
                facultyReport.publicationsbooksChapters &&
                facultyReport.publicationsbooksChapters.map((paper, index) => {
                  if (paper) {
                    return <li key={index}>{paper}</li>
                  }
                })}
            </ol>
            <br />
            <br />
            <h4>&emsp;(v) Proceedings of Seminar/Conferences:</h4>
            <ol>
              {facultyReport &&
                facultyReport.seminarsConferences &&
                facultyReport.seminarsConferences.map((paper, index) => {
                  if (paper) {
                    return <li key={index}>{paper}</li>
                  }
                })}
            </ol>
            <br />
            <br />
            <h4>&emsp;(vi) Popular Articles (News Paper and Magazines):</h4>
            <ol>
              {facultyReport &&
                facultyReport.publicationspopularArticles &&
                facultyReport.publicationspopularArticles.map(
                  (paper, index) => {
                    if (paper) {
                      return <li key={index}>{paper}</li>
                    }
                  }
                )}
            </ol>
            <br />
            <br />
            <h4> 4. IPR Items:</h4>
            <br />
            <h4>&emsp;(a) Patents:</h4>
            <br />
            <h4>&emsp;&emsp;(i) National:</h4>
            <br />
            <h4>
              &emsp;&emsp;&emsp;(A) Published:
              {facultyReport && facultyReport.patentsnationalpublished}
            </h4>
            <br />
            <h4>
              &emsp;&emsp;&emsp;(B) Granted:
              {facultyReport && facultyReport.patentsnationalgranted}
            </h4>
            <br />
            <h4>&emsp;&emsp;(ii) International:</h4>
            <br />
            <h4>
              &emsp;&emsp;&emsp;(A) Published:
              {facultyReport && facultyReport.patentsinternationalpublished}
            </h4>
            <br />
            <h4>
              &emsp;&emsp;&emsp;(B) Granted:
              {facultyReport && facultyReport.patentsinternationalgranted}
            </h4>
            <br />
            <h4>&emsp;(b) Policy Reports:</h4>
            <br />
            <h4>&emsp;&emsp;(i) National:</h4>
            <ol>
              {facultyReport &&
                facultyReport.policyReportnational &&
                facultyReport.policyReportnational.map((paper, index) => (
                  <li key={index}>{paper}</li>
                ))}
            </ol>
            <br />
            <br />
            <h4>&emsp;&emsp;(ii) International:</h4>
            <ol>
              {facultyReport &&
                facultyReport.policyReportinternational &&
                facultyReport.policyReportinternational.map((paper, index) => (
                  <li key={index}>{paper}</li>
                ))}
            </ol>
            <br />
            <br />
            <h4>&emsp;(c) E-Content developed (MOOCs/SWAYAM):</h4>
            <ol>
              {facultyReport &&
                facultyReport.eContentDeveloped &&
                facultyReport.eContentDeveloped.map((paper, index) => (
                  <li key={index}>{paper}</li>
                ))}
            </ol>{' '}
            <br />
            <br />
            <h4>&emsp;(d) Consultancy:</h4>
            <br />
            <table border='1' style={{ borderCollapse: 'collapse' }}>
              <thead>
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
              </thead>
              <tbody>
                {facultyReport &&
                  facultyReport.consultancy.map((entry, index) => (
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
            <h4>5.Research Projects:</h4>
            <br />
            <table border='1' style={{ borderCollapse: 'collapse' }}>
              <thead>
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
              </thead>
              <tbody>
                {facultyReport &&
                  facultyReport.researchProjects.map((entry, index) => (
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
            <h4>6. Seminar/Conference/Symposium/Extension Programme etc.</h4>
            <br />
            <h4>&emsp;(i) Organized:</h4>
            <ol>
              {facultyReport &&
                facultyReport.organizednational &&
                facultyReport.organizednational.map((paper, index) => (
                  <li key={index}>{paper}</li>
                ))}
            </ol>
            <br />
            <br />
            <ol>
              {facultyReport &&
                facultyReport.organizedinternational &&
                facultyReport.organizedinternational.map((paper, index) => (
                  <li key={index}>{paper}</li>
                ))}
            </ol>
            <br />
            <br />
            <h4>&emsp;(ii) Attended:</h4>
            <ol>
              {facultyReport &&
                facultyReport.attendednational &&
                facultyReport.attendednational.map((paper, index) => (
                  <li key={index}>{paper}</li>
                ))}
            </ol>
            <br />
            <br />
            <ol>
              {facultyReport &&
                facultyReport.attendedinternational &&
                facultyReport.attendedinternational.map((paper, index) => (
                  <li key={index}>{paper}</li>
                ))}
            </ol>
            <br />
            <br />
            <h4>7. Academic Collaborations</h4>
            <br />
            <h4>&emsp;(i) National </h4>
            <ol>
              {facultyReport &&
                facultyReport.academicCollaborationsnational &&
                facultyReport.academicCollaborationsnational.map(
                  (paper, index) => <li key={index}>{paper}</li>
                )}
            </ol>
            <br />
            <br />
            <h4>&emsp;(ii) International</h4>
            <ol>
              {facultyReport &&
                facultyReport.academicCollaborationsinternational &&
                facultyReport.academicCollaborationsinternational.map(
                  (paper, index) => <li key={index}>{paper}</li>
                )}
            </ol>
            <br />
            <br />
            <h4>8. Honours/Awards/Recognition/Membership/Fellowship:</h4>
            <ol>
              {facultyReport &&
                facultyReport.honoursAwardsMemberships &&
                facultyReport.honoursAwardsMemberships.map((paper, index) => (
                  <li key={index}>{paper}</li>
                ))}
            </ol>
            <br />
            <h4>9. Other Activities:</h4>
            <ol>
              {facultyReport &&
                facultyReport.otherActivities &&
                facultyReport.otherActivities.map((paper, index) => (
                  <li key={index}>{paper}</li>
                ))}
            </ol>
            <br />
            <br />
            <br />
            <hr />
            <br />
            <br />
            <center>
              <h3>SUMMARY SHEET FOR THE ACADEMIC YEAR 2024</h3>
              <br />
              <br />
              <table
                border='1'
                style={{ borderCollapse: 'collapse', padding: 10 }}
              >
                <tr>
                  <td rowSpan='3'>Details of Faculties</td>
                  <td>1</td>
                  <td>Name</td>
                  <td></td>
                  <td>{user.name}</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Date of Joining</td>
                  <td></td>
                  <td>{user.dateJoining}</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Field of specialisation</td>
                  <td></td>
                  <td>
                    {facultyReport && facultyReport.fieldOfSpecialization}
                  </td>
                </tr>
                <tr>
                  <td rowSpan='2'>(A)Teaching Experience (in Years)</td>
                  <td>4</td>
                  <td>UG</td>
                  <td></td>
                  <td>{facultyReport && facultyReport.teachingExperienceUG}</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>PG, including PhD</td>
                  <td></td>
                  <td>{facultyReport && facultyReport.teachingExperiencePG}</td>
                </tr>
                <tr>
                  <td rowSpan='16'>(B) Research activities</td>
                  <td>6</td>
                  <td>Basic Research</td>
                  <td></td>
                  <td>
                    {facultyReport && facultyReport.publicationsbasicResearch}
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Applied Research</td>
                  <td></td>
                  <td>
                    {facultyReport && facultyReport.publicationsappliedResearch}
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Action Research</td>
                  <td></td>
                  <td>
                    {facultyReport && facultyReport.publicationsactionResearch}
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Project Submitted</td>
                  <td></td>
                  <td>
                    {facultyReport &&
                      facultyReport.publicationsprojectSubmitted}
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Ongoing Project </td>
                  <td></td>
                  <td>
                    {facultyReport && facultyReport.publicationsongoingProject}
                  </td>
                </tr>
                <tr>
                  <td>11</td>
                  <td rowSpan='2'>Research Paper in UGC care list journals </td>
                  <td>Group I</td>
                  <td>{facultyReport && facultyReport.publicationsgroupI}</td>
                </tr>
                <tr>
                  <td>12</td>

                  <td>Group II</td>
                  <td>{facultyReport && facultyReport.publicationsgroupII}</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td rowSpan='2'>Books /Books chapters Published </td>
                  <td>Books</td>
                  <td>
                    {facultyReport &&
                      facultyReport.publicationsbookswithISBN.length}
                  </td>
                </tr>
                <tr>
                  <td>14</td>

                  <td>Book Chapters</td>
                  <td>
                    {facultyReport &&
                      facultyReport.publicationsbooksChapters.length}
                  </td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Popular Articles (Newspaper/ Magazines)</td>
                  <td></td>
                  <td>
                    {facultyReport &&
                      facultyReport.publicationspopularArticles.length}
                  </td>
                </tr>
                <tr>
                  <td>16</td>
                  <td rowSpan='2'>Seminar / Conference/ Symposia organized </td>
                  <td>National</td>
                  <td>
                    {facultyReport && facultyReport.organizednational.length}
                  </td>
                </tr>
                <tr>
                  <td>17</td>

                  <td> International</td>
                  <td>
                    {facultyReport &&
                      facultyReport.organizedinternational.length}
                  </td>
                </tr>
                <tr>
                  <td>18</td>
                  <td rowSpan='2'>Seminar / Conference/ Symposia attended</td>
                  <td>National</td>
                  <td>
                    {facultyReport && facultyReport.attendednational.length}
                  </td>
                </tr>
                <tr>
                  <td>19</td>

                  <td> International</td>
                  <td>
                    {facultyReport &&
                      facultyReport.attendedinternational.length}
                  </td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Conference Proceedings </td>
                  <td></td>
                  <td>
                    {facultyReport && facultyReport.seminarsConferences.length}
                  </td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>Consultancy </td>
                  <td></td>
                  <td>{facultyReport && facultyReport.consultancy.length}</td>
                </tr>
                <tr>
                  <td rowSpan='3'>(C) Patent</td>
                  <td>22</td>
                  <td>Applied</td>
                  <td></td>
                  <td>
                    {facultyReport && facultyReport.patentsnationalapplied}
                  </td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>Published</td>
                  <td></td>
                  <td>
                    {facultyReport && facultyReport.patentsnationalpublished}
                  </td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>Granted</td>
                  <td></td>
                  <td>
                    {facultyReport && facultyReport.patentsnationalgranted}
                  </td>
                </tr>
                <tr>
                  <td>(D) E-Content</td>
                  <td>25</td>
                  <td>MOOC/SWAYAM/ E-content developed</td>
                  <td></td>
                  <td>
                    {facultyReport && facultyReport.eContentDeveloped.length}
                  </td>
                </tr>
                <tr>
                  <td rowSpan='5'>(E) Any Other</td>
                  <td>26</td>
                  <td>Teaching /Extension /outreach activities</td>
                  <td></td>
                  <td>
                    {facultyReport &&
                      facultyReport.teachingExtensionOutreachActivities}
                  </td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>Responsibilities other than teaching</td>
                  <td></td>
                  <td>{facultyReport && facultyReport.otherThanTeaching}</td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>Awards/ Honours/ Recognition/ Membership/ Fellowship</td>
                  <td></td>
                  <td>
                    {facultyReport &&
                      facultyReport.honoursAwardsMemberships.length}
                  </td>
                </tr>
                <tr>
                  <td>29</td>
                  <td rowSpan='2'>Collaborations</td>
                  <td>National</td>
                  <td>
                    {facultyReport &&
                      facultyReport.academicCollaborationsnational.length}
                  </td>
                </tr>
                <tr>
                  <td>30</td>

                  <td>International</td>
                  <td>
                    {facultyReport &&
                      facultyReport.academicCollaborationsinternational.length}
                  </td>
                </tr>
              </table>
            </center>
            <br />
            <br />
            <br />
            <h4>
              &emsp;&emsp; Signature of
              <br />
              &emsp; Faculty Member
            </h4>
            <br />
            <br />
            <br />
            <br />
          </CardContent>
        </Card>
      </>
    </>
  )
}
