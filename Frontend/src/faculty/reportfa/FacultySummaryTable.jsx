const FacultySummarayTable = ({ user, facultyReport }) => {
  return (
    <table border="1" style={{ borderCollapse: 'collapse', padding: 10 }}>
      <tr>
        <td rowSpan="3">Details of Faculties</td>
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
        <td>{facultyReport && facultyReport.fieldOfSpecialization}</td>
      </tr>
      <tr>
        <td rowSpan="2">(A)Teaching Experience (in Years)</td>
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
        <td rowSpan="16">(B) Research activities</td>
        <td>6</td>
        <td>Basic Research</td>
        <td></td>
        <td>{facultyReport && facultyReport.publicationsbasicResearch}</td>
      </tr>
      <tr>
        <td>7</td>
        <td>Applied Research</td>
        <td></td>
        <td>{facultyReport && facultyReport.publicationsappliedResearch}</td>
      </tr>
      <tr>
        <td>8</td>
        <td>Action Research</td>
        <td></td>
        <td>{facultyReport && facultyReport.publicationsactionResearch}</td>
      </tr>
      <tr>
        <td>9</td>
        <td>Project Submitted</td>
        <td></td>
        <td>{facultyReport && facultyReport.publicationsprojectSubmitted}</td>
      </tr>
      <tr>
        <td>10</td>
        <td>Ongoing Project </td>
        <td></td>
        <td>{facultyReport && facultyReport.publicationsongoingProject}</td>
      </tr>
      <tr>
        <td>11</td>
        <td rowSpan="2">Research Paper in UGC care list journals </td>
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
        <td rowSpan="2">Books /Books chapters Published </td>
        <td>Books</td>
        <td>
          {facultyReport && facultyReport.publicationsbookswithISBN.length}
        </td>
      </tr>
      <tr>
        <td>14</td>

        <td>Book Chapters</td>
        <td>
          {facultyReport && facultyReport.publicationsbooksChapters.length}
        </td>
      </tr>
      <tr>
        <td>15</td>
        <td>Popular Articles (Newspaper/ Magazines)</td>
        <td></td>
        <td>
          {facultyReport && facultyReport.publicationspopularArticles.length}
        </td>
      </tr>
      <tr>
        <td>16</td>
        <td rowSpan="2">Seminar / Conference/ Symposia organized </td>
        <td>National</td>
        <td>{facultyReport && facultyReport.organizednational.length}</td>
      </tr>
      <tr>
        <td>17</td>

        <td> International</td>
        <td>{facultyReport && facultyReport.organizedinternational.length}</td>
      </tr>
      <tr>
        <td>18</td>
        <td rowSpan="2">Seminar / Conference/ Symposia attended</td>
        <td>National</td>
        <td>{facultyReport && facultyReport.attendednational.length}</td>
      </tr>
      <tr>
        <td>19</td>

        <td> International</td>
        <td>{facultyReport && facultyReport.attendedinternational.length}</td>
      </tr>
      <tr>
        <td>20</td>
        <td>Conference Proceedings </td>
        <td></td>
        <td>{facultyReport && facultyReport.seminarsConferences.length}</td>
      </tr>
      <tr>
        <td>21</td>
        <td>Consultancy </td>
        <td></td>
        <td>{facultyReport && facultyReport.consultancy.length}</td>
      </tr>
      <tr>
        <td rowSpan="3">(C) Patent</td>
        <td>22</td>
        <td>Applied</td>
        <td></td>
        <td>{facultyReport && facultyReport.patentsnationalapplied}</td>
      </tr>
      <tr>
        <td>23</td>
        <td>Published</td>
        <td></td>
        <td>{facultyReport && facultyReport.patentsnationalpublished}</td>
      </tr>
      <tr>
        <td>24</td>
        <td>Granted</td>
        <td></td>
        <td>{facultyReport && facultyReport.patentsnationalgranted}</td>
      </tr>
      <tr>
        <td>(D) E-Content</td>
        <td>25</td>
        <td>MOOC/SWAYAM/ E-content developed</td>
        <td></td>
        <td>{facultyReport && facultyReport.eContentDeveloped.length}</td>
      </tr>
      <tr>
        <td rowSpan="5">(E) Any Other</td>
        <td>26</td>
        <td>Teaching /Extension /outreach activities</td>
        <td></td>
        <td>
          {facultyReport && facultyReport.teachingExtensionOutreachActivities}
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
          {facultyReport && facultyReport.honoursAwardsMemberships.length}
        </td>
      </tr>
      <tr>
        <td>29</td>
        <td rowSpan="2">Collaborations</td>
        <td>National</td>
        <td>
          {facultyReport && facultyReport.academicCollaborationsnational.length}
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
  )
}

export default FacultySummarayTable
