import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import './style.css'

const DegreeAwardedTable = ({ formData, setFormData }) => {
  const { degreeAwarded } = formData

  const handleDegreeNameChange = (degreeIndex, value) => {
    const updatedEnrolment = [...degreeAwarded]
    updatedEnrolment[degreeIndex].degreeName = value
    setFormData({ ...formData, degreeAwarded: updatedEnrolment })
  }

  const handleInputChange = (degreeIndex, studentIndex, field, value) => {
    const updatedEnrolment = [...degreeAwarded]
    updatedEnrolment[degreeIndex].students[studentIndex][field] = value
    setFormData({ ...formData, degreeAwarded: updatedEnrolment })
  }

  const handleTotalsChange = (degreeIndex, field, value) => {
    const updatedEnrolment = [...degreeAwarded]
    updatedEnrolment[degreeIndex].totals[field] = value
    setFormData({ ...formData, degreeAwarded: updatedEnrolment })
  }

  const handleAddDegree = () => {
    const updatedEnrolment = [...degreeAwarded]
    updatedEnrolment.push({
      degreeName: '',
      students: [
        {
          state: '',
          genMale: '',
          genFemale: '',
          stMale: '',
          stFemale: '',
          scMale: '',
          scFemale: '',
          obcMale: '',
          obcFemale: '',
          ewsMale: '',
          ewsFemale: '',
          pwdMale: '',
          pwdFemale: '',
          totalMale: '',
          totalFemale: '',
        },
      ],
      totals: {
        gen: '',
        st: '',
        sc: '',
        obc: '',
        ews: '',
        pwd: '',
        subTotal: '',
      },
    })
    setFormData({ ...formData, degreeAwarded: updatedEnrolment })
  }

  const tableStyle = {
    borderCollapse: 'collapse',
    width: '98%',
    marginTop: '20px',
    paddingLeft: '5px',
    paddingRight: '5px',
  }

  const inputStyle = {
    width: '100%',
    padding: '0px',
    margin: '0px',
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

  const handleAddRow = (degreeIndex) => {
    const updatedEnrolment = [...degreeAwarded]
    updatedEnrolment[degreeIndex].students.push({
      state: '',
      genMale: '',
      genFemale: '',
      stMale: '',
      stFemale: '',
      scMale: '',
      scFemale: '',
      obcMale: '',
      obcFemale: '',
      ewsMale: '',
      ewsFemale: '',
      pwdMale: '',
      pwdFemale: '',
      totalMale: '',
      totalFemale: '',
    })
    setFormData({ ...formData, degreeAwarded: updatedEnrolment })
  }

  const handleDeleteLastRow = (degreeIndex) => {
    const updatedEnrolment = [...degreeAwarded]
    const lastRowIndex = updatedEnrolment[degreeIndex].students.length - 1
    if (lastRowIndex >= 0) {
      updatedEnrolment[degreeIndex].students.splice(lastRowIndex, 1)
      setFormData({ ...formData, degreeAwarded: updatedEnrolment })
    }
  }

  const handleDeleteDegree = (degreeIndex) => {
    const updatedEnrolment = [...degreeAwarded]
    updatedEnrolment.splice(degreeIndex, 1)
    setFormData({ ...formData, degreeAwarded: updatedEnrolment })
  }

  return (
    <>
      <Box sx={{ display: 'flex', width: '100%'  }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography paragraph>
            <br />
          </Typography>
          <Paper
            elevation={3}
            sx={{
              width: '100%',
              borderColor: 'primary.main',
            }}
          >
            <Typography variant="h5" fontWeight={'bold'} align="center">
              <br />
              Degrees Awarded to students from different States of India and Abroad
              <br />
            </Typography>
            <Box
              style={{
                columnGap: 20,
                marginTop: 30,
                paddingBottom: 20,
              }}
            ></Box>
            {
              <>
                {degreeAwarded.map((degree, degreeIndex) => (
                  <Box key={degreeIndex}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingBottom: 20,
                        flexDirection: 'column',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <span style={{ fontWeight: 'bold' }}>
                          ({degreeIndex + 1})
                        </span>
                        <TextField
                          type="text"
                          placeholder="Enter Degree Name"
                          value={degree.degreeName}
                          onChange={(e) =>
                            handleDegreeNameChange(degreeIndex, e.target.value)
                          }
                          style={{ marginLeft: 20, width: '100%' }}
                        />
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
                              <td style={tdStyle}>
                                <input
                                  className="tableInput"
                                  style={inputStyle}
                                  type="text"
                                  value={row.state}
                                  onChange={(e) =>
                                    handleInputChange(
                                      degreeIndex,
                                      index,
                                      'state',
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td style={tdStyle}>
                                <input
                                  className="tableInput"
                                  style={inputStyle}
                                  type="text"
                                  value={row.genMale}
                                  onChange={(e) =>
                                    handleInputChange(
                                      degreeIndex,
                                      index,
                                      'genMale',
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td style={tdStyle}>
                                <input
                                  className="tableInput"
                                  style={inputStyle}
                                  type="text"
                                  value={row.genFemale}
                                  onChange={(e) =>
                                    handleInputChange(
                                      degreeIndex,
                                      index,
                                      'genFemale',
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td style={tdStyle}>
                                <input
                                  className="tableInput"
                                  style={inputStyle}
                                  type="text"
                                  value={row.stMale}
                                  onChange={(e) =>
                                    handleInputChange(
                                      degreeIndex,
                                      index,
                                      'stMale',
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td style={tdStyle}>
                                <input
                                  className="tableInput"
                                  style={inputStyle}
                                  type="text"
                                  value={row.stFemale}
                                  onChange={(e) =>
                                    handleInputChange(
                                      degreeIndex,
                                      index,
                                      'stFemale',
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td style={tdStyle}>
                                <input
                                  className="tableInput"
                                  style={inputStyle}
                                  type="text"
                                  value={row.scMale}
                                  onChange={(e) =>
                                    handleInputChange(
                                      degreeIndex,
                                      index,
                                      'scMale',
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td style={tdStyle}>
                                <input
                                  className="tableInput"
                                  style={inputStyle}
                                  type="text"
                                  value={row.scFemale}
                                  onChange={(e) =>
                                    handleInputChange(
                                      degreeIndex,
                                      index,
                                      'scFemale',
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td style={tdStyle}>
                                <input
                                  className="tableInput"
                                  style={inputStyle}
                                  type="text"
                                  value={row.obcMale}
                                  onChange={(e) =>
                                    handleInputChange(
                                      degreeIndex,
                                      index,
                                      'obcMale',
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td style={tdStyle}>
                                <input
                                  className="tableInput"
                                  style={inputStyle}
                                  type="text"
                                  value={row.obcFemale}
                                  onChange={(e) =>
                                    handleInputChange(
                                      degreeIndex,
                                      index,
                                      'obcFemale',
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td style={tdStyle}>
                                <input
                                  className="tableInput"
                                  style={inputStyle}
                                  type="text"
                                  value={row.ewsMale}
                                  onChange={(e) =>
                                    handleInputChange(
                                      degreeIndex,
                                      index,
                                      'ewsMale',
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td style={tdStyle}>
                                <input
                                  className="tableInput"
                                  style={inputStyle}
                                  type="text"
                                  value={row.ewsFemale}
                                  onChange={(e) =>
                                    handleInputChange(
                                      degreeIndex,
                                      index,
                                      'ewsFemale',
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td style={tdStyle}>
                                <input
                                  className="tableInput"
                                  style={inputStyle}
                                  type="text"
                                  value={row.pwdMale}
                                  onChange={(e) =>
                                    handleInputChange(
                                      degreeIndex,
                                      index,
                                      'pwdMale',
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td style={tdStyle}>
                                <input
                                  className="tableInput"
                                  style={inputStyle}
                                  type="text"
                                  value={row.pwdFemale}
                                  onChange={(e) =>
                                    handleInputChange(
                                      degreeIndex,
                                      index,
                                      'pwdFemale',
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td style={tdStyle}>
                                <input
                                  className="tableInput"
                                  style={inputStyle}
                                  type="text"
                                  value={row.totalMale}
                                  onChange={(e) =>
                                    handleInputChange(
                                      degreeIndex,
                                      index,
                                      'totalMale',
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td style={tdStyle}>
                                <input
                                  className="tableInput"
                                  style={inputStyle}
                                  type="text"
                                  value={row.totalFemale}
                                  onChange={(e) =>
                                    handleInputChange(
                                      degreeIndex,
                                      index,
                                      'totalFemale',
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                            </tr>
                          ))}
                          <tr>
                            <th style={thStyle}>Total</th>
                            <th colSpan="2" style={tdStyle}>
                              <input
                                type="text"
                                style={inputStyle}
                                className="tableInput"
                                placeholder="Gen"
                                value={degree.totals.gen}
                                onChange={(e) =>
                                  handleTotalsChange(
                                    degreeIndex,
                                    'gen',
                                    e.target.value
                                  )
                                }
                              />
                            </th>
                            <th colSpan="2" style={tdStyle}>
                              <input
                                className="tableInput"
                                name="st"
                                style={inputStyle}
                                type="text"
                                value={degree.totals.st}
                                onChange={(e) =>
                                  handleTotalsChange(
                                    degreeIndex,
                                    'st',
                                    e.target.value
                                  )
                                }
                              />
                            </th>
                            <th colSpan="2" style={tdStyle}>
                              <input
                                className="tableInput"
                                name="sc"
                                style={inputStyle}
                                type="text"
                                value={degree.totals.sc}
                                onChange={(e) =>
                                  handleTotalsChange(
                                    degreeIndex,
                                    'sc',
                                    e.target.value
                                  )
                                }
                              />
                            </th>
                            <th colSpan="2" style={tdStyle}>
                              <input
                                className="tableInput"
                                name="obc"
                                style={inputStyle}
                                type="text"
                                value={degree.totals.obc}
                                onChange={(e) =>
                                  handleTotalsChange(
                                    degreeIndex,
                                    'obc',
                                    e.target.value
                                  )
                                }
                              />
                            </th>
                            <th colSpan="2" style={tdStyle}>
                              <input
                                className="tableInput"
                                name="ews"
                                style={inputStyle}
                                type="text"
                                value={degree.totals.ews}
                                onChange={(e) =>
                                  handleTotalsChange(
                                    degreeIndex,
                                    'ews',
                                    e.target.value
                                  )
                                }
                              />
                            </th>
                            <th colSpan="2" style={tdStyle}>
                              <input
                                className="tableInput"
                                name="pwd"
                                style={inputStyle}
                                type="text"
                                value={degree.totals.pwd}
                                onChange={(e) =>
                                  handleTotalsChange(
                                    degreeIndex,
                                    'pwd',
                                    e.target.value
                                  )
                                }
                              />
                            </th>
                            <th colSpan="2" style={tdStyle}>
                              <input
                                className="tableInput"
                                name="subTotal"
                                style={inputStyle}
                                type="text"
                                value={degree.totals.subTotal}
                                onChange={(e) =>
                                  handleTotalsChange(
                                    degreeIndex,
                                    'subTotal',
                                    e.target.value
                                  )
                                }
                              />
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        columnGap: 8,
                        marginLeft: 20,
                        paddingBottom: 20,
                      }}
                    >
                      {/* <Button
                        variant="outlined"
                        style={{ fontWeight: 'bold' }}
                        color="error"
                        onClick={removeLastRow}
                      >
                        Remove last row
                      </Button> */}
                      <Button
                        variant="contained"
                        style={{ fontWeight: 'bold' }}
                        onClick={() => handleAddRow(degreeIndex)}
                      >
                        Add row
                      </Button>
                      <Button
                        variant="contained"
                        color="warning"
                        style={{ fontWeight: 'bold' }}
                        onClick={() => handleDeleteLastRow(degreeIndex)}
                      >
                        Delete last row
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        style={{ fontWeight: 'bold' }}
                        onClick={() => handleDeleteDegree(degreeIndex)}
                      >
                        Delete Degree
                      </Button>
                    </div>
                  </Box>
                ))}
                <div>
                  <Button
                    variant="contained"
                    style={{
                      fontWeight: 'bold',
                      marginBottom: 20,
                      marginLeft: 20,
                      marginTop: 20,
                    }}
                    onClick={handleAddDegree}
                  >
                    Add Degree
                  </Button>
                </div>
              </>
            }
          </Paper>
        </Box>
      </Box>
    </>
  )
}

export default DegreeAwardedTable
