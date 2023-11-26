const HodSummarayTable = ({ reports }) => {

  console.log('summmary table',reports)

  if (reports.length === 0) {
    return <div>hello</div>
  } else {
    return (
      <table border="1" style={{ borderCollapse: 'collapse', padding: 10, width: '100%' }}>
        <tr>
          <td rowSpan="3">Details of Faculties</td>
          <td>1</td>
          <td>Name</td>
          <td></td>
          {reports.map((report, i) => {
            return <td key={i}>{report.user.name}</td>
          })}
        </tr>
        <tr>
          <td>2</td>
          <td>Date of Joining</td>
          <td></td>
          {reports.map((report, i) => {
            return <td key={i}>{report.user.dateJoining}</td>
          })}
        </tr>
        <tr>
          <td>3</td>
          <td>Field of specialisation</td>
          <td></td>
          {reports.map((report, i) => {
            return <td key={i}>{report.reportData.fieldOfSpecialization}</td>
          })}
        </tr>
        <tr>
          <td rowSpan="2">(A)Teaching Experience (in Years)</td>
          <td>4</td>
          <td>UG</td>
          <td></td>
          {reports.map((report, i) => {
            return <td key={i}>{report.reportData.teachingExperienceUG}</td>
          })}
        </tr>
        <tr>
          <td>5</td>
          <td>PG, including PhD</td>
          <td></td>
          {reports.map((report, i) => {
            return <td key={i}>{report.reportData.teachingExperiencePG}</td>
          })}
        </tr>
        <tr>
          <td rowSpan="16">(B) Research activities</td>
          <td>6</td>
          <td>Basic Research</td>
          <td></td>
          {reports.map((report, i) => {
            return (
              <td key={i}>{report.reportData.publicationsbasicResearch}</td>
            )
          })}
        </tr>
        <tr>
          <td>7</td>
          <td>Applied Research</td>
          <td></td>
          {reports.map((report, i) => {
            return (
              <td key={i}>{report.reportData.publicationsappliedResearch}</td>
            )
          })}
        </tr>
        <tr>
          <td>8</td>
          <td>Action Research</td>
          <td></td>
          {reports.map((report, i) => {
            return (
              <td key={i}>{report.reportData.publicationsactionResearch}</td>
            )
          })}
        </tr>
        <tr>
          <td>9</td>
          <td>Project Submitted</td>
          <td></td>
          {reports.map((report, i) => {
            return (
              <td key={i}>{report.reportData.publicationsprojectSubmitted}</td>
            )
          })}
        </tr>
        <tr>
          <td>10</td>
          <td>Ongoing Project </td>
          <td></td>
          {reports.map((report, i) => {
            return <td key={i}>{report.reportData.fieldOfSpecialization}</td>
          })}
        </tr>
        <tr>
          <td>11</td>
          <td rowSpan="2">Research Paper in UGC care list journals </td>
          <td>Group I</td>
          {reports.map((report, i) => {
            return <td key={i}>{report.reportData.publicationsgroupI}</td>
          })}{' '}
        </tr>
        <tr>
          <td>12</td>
          <td>Group II</td>
          {reports.map((report, i) => {
            return <td key={i}>{report.reportData.publicationsgroupII}</td>
          })}{' '}
        </tr>
        <tr>
          <td>13</td>
          <td rowSpan="2">Books /Books chapters Published </td>
          <td>Books</td>
          {reports.map((report, i) => {
            return (
              <td key={i}>
                {report.reportData.publicationsbookswithISBN.length}
              </td>
            )
          })}
        </tr>
        <tr>
          <td>14</td>

          <td>Book Chapters</td>
          {reports.map((report, i) => {
            return (
              <td key={i}>
                {report.reportData.publicationsbooksChapters.length}
              </td>
            )
          })}
        </tr>
        <tr>
          <td>15</td>
          <td>Popular Articles (Newspaper/ Magazines)</td>
          <td></td>
          {reports.map((report, i) => {
            return (
              <td key={i}>
                {report.reportData.publicationspopularArticles.length}
              </td>
            )
          })}
        </tr>
        <tr>
          <td>16</td>
          <td rowSpan="2">Seminar / Conference/ Symposia organized </td>
          <td>National</td>
          {reports.map((report, i) => {
            return <td key={i}>{report.reportData.organizednational.length}</td>
          })}{' '}
        </tr>
        <tr>
          <td>17</td>

          <td> International</td>
          {reports.map((report, i) => {
            return (
              <td key={i}>{report.reportData.organizedinternational.length}</td>
            )
          })}
        </tr>
        <tr>
          <td>18</td>
          <td rowSpan="2">Seminar / Conference/ Symposia attended</td>
          <td>National</td>
          {reports.map((report, i) => {
            return <td key={i}>{report.reportData.attendednational.length}</td>
          })}{' '}
        </tr>
        <tr>
          <td>19</td>

          <td> International</td>
          {reports.map((report, i) => {
            return (
              <td key={i}>{report.reportData.attendedinternational.length}</td>
            )
          })}
        </tr>
        <tr>
          <td>20</td>
          <td>Conference Proceedings </td>
          <td></td>
          {reports.map((report, i) => {
            return (
              <td key={i}>{report.reportData.seminarsConferences.length}</td>
            )
          })}
        </tr>
        <tr>
          <td>21</td>
          <td>Consultancy </td>
          <td></td>
          {reports.map((report, i) => {
            return <td key={i}>{report.reportData.consultancy.length}</td>
          })}{' '}
        </tr>
        <tr>
          <td rowSpan="3">(C) Patent</td>
          <td>22</td>
          <td>Applied</td>
          <td></td>
          {reports.map((report, i) => {
            return <td key={i}>{report.reportData.patentsnationalapplied}</td>
          })}{' '}
        </tr>
        <tr>
          <td>23</td>
          <td>Published</td>
          <td></td>
          {reports.map((report, i) => {
            return <td key={i}>{report.reportData.patentsnationalpublished}</td>
          })}{' '}
        </tr>
        <tr>
          <td>24</td>
          <td>Granted</td>
          <td></td>
          {reports.map((report, i) => {
            return <td key={i}>{report.reportData.patentsnationalgranted}</td>
          })}{' '}
        </tr>
        <tr>
          <td>(D) E-Content</td>
          <td>25</td>
          <td>MOOC/SWAYAM/ E-content developed</td>
          <td></td>
          {reports.map((report, i) => {
            return <td key={i}>{report.reportData.eContentDeveloped.length}</td>
          })}{' '}
        </tr>
        <tr>
          <td rowSpan="5">(E) Any Other</td>
          <td>26</td>
          <td>Teaching /Extension /outreach activities</td>
          <td></td>
          {reports.map((report, i) => {
            return (
              <td key={i}>
                {report.reportData.teachingExtensionOutreachActivities}
              </td>
            )
          })}
        </tr>
        <tr>
          <td>27</td>
          <td>Responsibilities other than teaching</td>
          <td></td>
          {reports.map((report, i) => {
            return <td key={i}>{report.reportData.otherThanTeaching}</td>
          })}{' '}
        </tr>
        <tr>
          <td>28</td>
          <td>Awards/ Honours/ Recognition/ Membership/ Fellowship</td>
          <td></td>
          {reports.map((report, i) => {
            return (
              <td key={i}>
                {report.reportData.honoursAwardsMemberships.length}
              </td>
            )
          })}
        </tr>
        <tr>
          <td>29</td>
          <td rowSpan="2">Collaborations</td>
          <td>National</td>
          {reports.map((report, i) => {
            return (
              <td key={i}>
                {report.reportData.academicCollaborationsnational.length}
              </td>
            )
          })}
        </tr>
        <tr>
          <td>30</td>

          <td>International</td>
          {reports.map((report, i) => {
            return (
              <td key={i}>
                {report.reportData.academicCollaborationsinternational.length}
              </td>
            )
          })}
        </tr>
      </table>
    )
  }
}

export default HodSummarayTable
