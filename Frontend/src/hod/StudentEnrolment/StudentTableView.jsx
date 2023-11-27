import './style.css'

const StudentTableView = ({ studentEnrolment,label }) => {
  const tableStyle = {
    borderCollapse: 'collapse',
    width: '98%',
    marginTop: '20px',
    paddingLeft: '5px',
    paddingRight: '5px',
  }

  const thStyle = {
    border: '1px solid black',
    padding: '4px',
    textAlign: 'center',
    backgroundColor: '#f2f2f2',
  }

  const tdStyle = {
    border: '1px solid black',
    padding: '3px',
    textAlign: 'center',
  }

  return (
    <>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ flexGrow: 1, p: 3 }}>
            <br />
         
          <div
            style={{
              width: '100%',
            }}
          >
            <h4 style={{
                marginBottom: '20px',
            }} >
              <br />
              {label}
              <br />
            </h4>
            {
              <>
                {studentEnrolment.map((degree, degreeIndex) => (
                  <div key={degreeIndex}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                        }}
                      >
                        <span style={{ fontWeight: 'bold' }}>
                          ({degreeIndex + 1}) {degree.degreeName}
                        </span>
                      </div>
                      <table style={tableStyle}>
                        <thead>
                          <tr>
                            <th style={thStyle}>States</th>
                            <th colSpan="2" style={thStyle}>
                              Gen
                            </th>
                            <th colSpan="2" style={thStyle}>
                              ST
                            </th>
                            <th colSpan="2" style={thStyle}>
                              SC
                            </th>
                            <th colSpan="2" style={thStyle}>
                              OBC
                            </th>
                            <th colSpan="2" style={thStyle}>
                              EWS
                            </th>
                            <th colSpan="2" style={thStyle}>
                              PWD
                            </th>
                            <th colSpan="2" style={thStyle}>
                              Total
                            </th>
                          </tr>
                          <tr>
                            <th style={thStyle}></th>
                            <th style={thStyle}>M</th>
                            <th style={thStyle}>F</th>
                            <th style={thStyle}>M</th>
                            <th style={thStyle}>F</th>
                            <th style={thStyle}>M</th>
                            <th style={thStyle}>F</th>
                            <th style={thStyle}>M</th>
                            <th style={thStyle}>F</th>
                            <th style={thStyle}>M</th>
                            <th style={thStyle}>F</th>
                            <th style={thStyle}>M</th>
                            <th style={thStyle}>F</th>
                            <th style={thStyle}>M</th>
                            <th style={thStyle}>F</th>
                          </tr>
                        </thead>
                        <tbody>
                          {degree.students.map((row, index) => (
                            <tr key={index}>
                              <td style={tdStyle}>{row.state}</td>
                              <td style={tdStyle}>{row.genMale}</td>
                              <td style={tdStyle}>{row.genFemale}</td>
                              <td style={tdStyle}>{row.stMale}</td>
                              <td style={tdStyle}>{row.stFemale}</td>
                              <td style={tdStyle}>{row.scMale}</td>
                              <td style={tdStyle}>{row.scFemale}</td>
                              <td style={tdStyle}>{row.obcMale}</td>
                              <td style={tdStyle}>{row.obcFemale}</td>
                              <td style={tdStyle}>{row.ewsMale}</td>
                              <td style={tdStyle}>{row.ewsFemale}</td>
                              <td style={tdStyle}>{row.pwdMale}</td>
                              <td style={tdStyle}>{row.pwdFemale}</td>
                              <td style={tdStyle}>{row.totalMale}</td>
                              <td style={tdStyle}>{row.totalFemale}</td>
                            </tr>
                          ))}
                          <tr>
                            <th style={thStyle}>Total</th>
                            <th colSpan="2" style={tdStyle}>
                              {degree.totals.gen}
                            </th>
                            <th colSpan="2" style={tdStyle}>
                              {degree.totals.st}
                            </th>
                            <th colSpan="2" style={tdStyle}>
                              {degree.totals.sc}
                            </th>
                            <th colSpan="2" style={tdStyle}>
                              {degree.totals.obc}
                            </th>
                            <th colSpan="2" style={tdStyle}>
                              {degree.totals.ews}
                            </th>
                            <th colSpan="2" style={tdStyle}>
                              {degree.totals.pwd}
                            </th>
                            <th colSpan="2" style={tdStyle}>
                              {degree.totals.total}
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentTableView
