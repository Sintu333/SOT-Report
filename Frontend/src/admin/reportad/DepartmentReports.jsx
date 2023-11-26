import { Card, CardContent } from '@mui/material'
import StudentTableView from '../../hod/StudentEnrolment/StudentTableView'
import HodSummarayTable from '../../hod/reportfaculty/HodSummaryTable'

export default function DepartmentReports({report, facultyReport}) {

    console.log('report',facultyReport)

  const pageSize = 3

  const chunkArray = (array, chunkSize) => {
    const result = []
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize))
    }
    return result
  }

  const reportSets = chunkArray(facultyReport ? facultyReport : [], pageSize)

  return (
    <>
      <Card
        style={{
          maxWidth: 1200,
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
          {report ? (
            <>
              <center>
                <h3>
                DEPARTMENT OF {report.departmentName}
                </h3>
              </center>
              <hr />
              <br />
              <br />
              <h4>Name of Department:{report.departmentName}</h4>
              <br />
              <h4>Head :{report.name}</h4>
              <br />
              <h4>Telephone:{report.telephone}</h4>
              <br />
              <h4>E-mail :{report.email}</h4>
              <br />
              <h4>Faculty Profile:</h4>
              <br />
              <center>
                <table border="1" style={{ borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      <th>Designation</th>
                      <th>Name and Qualification</th>
                      <th>Specialization</th>
                    </tr>
                  </thead>
                  <tbody>
                    {report.designation &&
                      report.designation.map((entry, index) => (
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
              {report.thrustAreasOfResearch}
              <br />
              <br />
              <h4>Brief Statement of Academic Activities and Achievements:</h4>
              {report.academicActivitiesAchievements}
              <br />
              <br />
              <h4>Students Profile:</h4>
              <br />
              <StudentTableView studentEnrolment={report.studentEnrolment} label={'Enrolment of student from different state of India and Aborad'} />
              <br />
              <h4>Degrees Awarded:</h4>
              <br />
              <StudentTableView studentEnrolment={report.degreeAwarded} label={'Degrees Awarded to students from different States of India and Abroad'} /> 
              <br />
              <br />
              <h4>Students Awarded Ph.D. Degree:</h4>
              <br />
              <center>
                <table border="1" style={{ borderCollapse: 'collapse' }}>
                  <tr>
                    <th>Name of Student</th>
                    <th>Title of Thesis</th>
                    <th>Name(s) of Supervisor(s)/ Joint Supervisor</th>
                  </tr>
                  <tbody>
                    {report.phdDegree.map((entry, index) => (
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
                <table border="1" style={{ borderCollapse: 'collapse' }}>
                  <tr>
                    <th>Name of the Student(s)</th>
                    <th>Name of the Programme</th>
                    <th>Post Held</th>
                    <th>Place of Work</th>
                  </tr>
                  <tbody>
                    {report.placement.map((entry, index) => (
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
                <table border="1" style={{ borderCollapse: 'collapse' }}>
                  <tr>
                    <th>Name of the Student(s)</th>
                    <th>Name of the Programme</th>
                    <th>Institution/ Organization</th>
                    <th>Country</th>
                  </tr>
                  <tbody>
                    {report.higherStudies.map((entry, index) => (
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
                <table border="1" style={{ borderCollapse: 'collapse' }}>
                  <tr>
                    <th>CSIR-UGC-NET</th>
                    <th>UGC Non-Net</th>
                    <th>Rajiv Gandhi National Fellowship (SC/ST)</th>
                    <th>Meritorious Fellowship</th>
                    <th>Maulana Azad National Fellowship</th>
                    <th>Others</th>
                  </tr>
                  <tbody>
                    {report.fellowship.map((entry, index) => (
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
              <h4>Teacher-in-Charge :{report.teacherInCharge}</h4>
              <br />
              <h4>Places/ Institutions Visited : {report.placesVisited}</h4>
              <br />
              <h4>
                Duration of Tour (Dates and number of days):
                {report.duration}
              </h4>
              <br />
              <h4>Purpose of Tour:{report.purpose}</h4>
              <br />
              <br />
              <h4>Courses Conducted:</h4>
              <br />
              <h4>Undergraduate:{report.undergraduate}</h4>
              <br />
              <h4>Semesters:</h4>
              <ol>
                {report.ugsemesters &&
                  report.ugsemesters.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}
              </ol>
              <br />
              <br />
              <br />
              <h4>Postgraduate:{report && report.postgraduate}</h4>
              <br />
              <h4>Semesters :</h4>
              <ol>
                {report &&
                  report.pgsemesters &&
                  report.pgsemesters.map((paper, index) => (
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
              <h4>&emsp;Organized(National ):</h4>
              <ol>
                {report.organizednational &&
                  report.organizednational.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}
              </ol>
              <br />
              <br />
              <h4>&emsp;Attended(National):</h4>
              <ol>
                {report &&
                  report.attendednational &&
                  report.attendednational.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}
              </ol>
              <br />
              <h4>&emsp;Organized(International):</h4>
              <ol>
                {report &&
                  report.organizedinternational &&
                  report.organizedinternational.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}
              </ol>
              <br />
              <br />
              <h4>&emsp;Attended(International):</h4>
              <ol>
                {report &&
                  report.attendedinternational &&
                  report.attendedinternational.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}
              </ol>
              <br />
              <br />
              <h4> Publications:</h4>
              <br />
              <h4>&emsp;(i) Research Papers:</h4>
              <ol>
                {report &&
                  report.publicationsugcCareJournals &&
                  report.publicationsugcCareJournals.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}
              </ol>
              <br />
              <br />
              <h4>&emsp;(ii) Books :</h4>
              <ol>
                {report &&
                  report.publicationsbookswithISBN &&
                  report.publicationsbookswithISBN.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}
              </ol>
              <br />
              <br />
              <h4>&emsp;(iii) Edited Books/Volumes</h4>
              <ol>
                {report &&
                  report.publicationseditedBooksVolumes &&
                  report.publicationseditedBooksVolumes.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}
              </ol>
              <br />
              <br />
              <h4>&emsp;(iv) Book Chapters</h4>
              <ol>
                {report &&
                  report.publicationsbooksChapters &&
                  report.publicationsbooksChapters.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}
              </ol>
              <br />
              <br />
              <h4>&emsp;(v) Proceedings of Seminar/Conferences</h4>{' '}
              <ol>
                {report &&
                  report.seminarsConferences &&
                  report.seminarsConferences.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}
              </ol>
              <br />
              <br />
              <h4>&emsp;(vi) Popular Articles (News Paper and Magazines)</h4>
              <ol>
                {report &&
                  report.publicationspopularArticles &&
                  report.publicationspopularArticles.map((paper, index) => (
                    <li key={index}>{paper}</li>
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
                &emsp;&emsp;&emsp;(A) Published:{' '}
                {report && report.patentsnationalpublished}
              </h4>
              <br />
              <h4>
                &emsp;&emsp;&emsp;(B) Granted:
                {report && report.patentsnationalgranted}
              </h4>
              <br />
              <h4>&emsp;&emsp;(ii) International:</h4>
              <br />
              <h4>
                &emsp;&emsp;&emsp;(A) Published:
                {report && report.patentsinternationalpublished}
              </h4>
              <br />
              <h4>
                &emsp;&emsp;&emsp;(B) Granted:
                {report && report.patentsinternationalgranted}
              </h4>
              <br />
              <h4>&emsp;(b) Policy report:</h4>
              <br />
              <h4>&emsp;&emsp;(i) National:</h4>{' '}
              <ol>
                {report &&
                  report.policyReportnational &&
                  report.policyReportnational.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}
              </ol>
              <br />
              <br />
              <h4>&emsp;&emsp;(ii) International:</h4>{' '}
              <ol>
                {report &&
                  report.policyReportinternational &&
                  report.policyReportinternational.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}
              </ol>
              <br />
              <br />
              <h4>&emsp;(c) E-Content developed (MOOCs/SWAYAM):</h4>{' '}
              <ol>
                {report &&
                  report.eContentDeveloped &&
                  report.eContentDeveloped.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}
              </ol>
              <br />
              <br />
              <h4>&emsp;(d) Consultancy:</h4>
              <br />
              <table border="1" style={{ borderCollapse: 'collapse' }}>
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
                  {report &&
                    report.consultancy.map((entry, index) => (
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
                <table border="1" style={{ borderCollapse: 'collapse' }}>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Funding Agency</th>
                    <th>Amount (Rs. In Lakhs)</th>
                  </tr>
                  <tbody>
                    {report &&
                      report.fundReceived.map((entry, index) => (
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
              <table border="1" style={{ borderCollapse: 'collapse' }}>
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
                  {report &&
                    report.researchProjects.map((entry, index) => (
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
              <br />
              <h4> Academic Collaborations:</h4>
              <br />
              <h4>&emsp;(i) National </h4>{' '}
              <ol>
                {report &&
                  report.academicCollaborationsnational &&
                  report.academicCollaborationsnational.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}
              </ol>
              <br />
              <br />
              <h4>&emsp;(ii) International</h4>{' '}
              <ol>
                {report &&
                  report.academicCollaborationsinternational &&
                  report.academicCollaborationsinternational.map(
                    (paper, index) => <li key={index}>{paper}</li>
                  )}

                {report &&
                  Array.isArray(report) &&
                  report.map((report, index) => (
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
                {report &&
                  report.honoursAwardsMemberships &&
                  report.honoursAwardsMemberships.map((paper, index) => (
                    <li key={index}>{paper}</li>
                  ))}
              </ol>
              <br />
              <br />
              <h4> Other Activities:</h4>{' '}
              <ol>
                {report &&
                  report.otherActivities &&
                  report.otherActivities.map((paper, index) => (
                    <li key={index}>{paper}</li>
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
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '30px',

              }}
            >
              {reportSets &&
                reportSets.map((reportSet, index) => (
                  <HodSummarayTable reports={reportSet} key={index} />
                ))}
            </div>
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
  )
}
