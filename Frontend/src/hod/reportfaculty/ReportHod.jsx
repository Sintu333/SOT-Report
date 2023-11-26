/* eslint-disable react/no-unescaped-entities */
//import React from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from '@mui/material'
import { UserContext } from '../../Components/UserContext'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import UgSemester from './HodTextAdd/UgSemester'
import PgSemester from './HodTextAdd/PgSemester'
import OtherActivities from './HodTextAdd/OtherActivities'
import PhdDegree from './HodRowAdd/PhdDegree'
import Placement from './HodRowAdd/PlacementStudents'
import HigherStudies from './HodRowAdd/HigherStudies'
import ResearchFellowship from './HodRowAdd/ResearchFellowship'
import FundsReceived from './HodRowAdd/FundsReceved'
import Designation from './HodRowAdd/Designation'
import SendIcon from '@mui/icons-material/Send'
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded'
import StudentEnrolmentTable from '../StudentEnrolment/StudentEnrolmentTable'
import DegreeAwardedTable from '../StudentEnrolment/DegreeAwardedTable'

export default function ReportHod() {
  const { user } = useContext(UserContext)

  const [formData, setFormData] = useState({
    departmentName: user.departmentName || '',
    name: user.name || '',
    telephone: '',
    email: user.email || '',
    designation: [
      {
        post: '',
        name: '',
        specialization: '',
      },
    ],

    thrustAreasOfResearch: [''],
    academicActivitiesAchievements: [''],

    studentsProfilebTech: '',
    studentsProfilemTech: '',
    studentsProfilephd: '',
    studentEnrolment: [],
    degreeAwarded: [],

    phdDegree: [
      {
        name: '',
        title: '',
        nameOfSupervisor: '',
      },
    ],

    placement: [
      {
        name: '',
        programme: '',
        post: '',
        place: '',
      },
    ],

    higherStudies: [
      {
        name: '',
        programme: '',
        institution: '',
        country: '',
      },
    ],

    fellowship: [
      {
        csir: '',
        ugc: '',
        rajivGandhi: '',
        meritorious: '',
        azad: '',
        others: '',
      },
    ],

    teacherInCharge: [''],
    placesVisited: [''],
    duration: [''],
    purpose: [''],

    undergraduate: [''],
    ugsemesters: [''],
    postgraduate: [''],
    pgsemesters: [''],
    phdCourses: [''],

    patentsnationalpublished: '',
    patentsnationalgranted: '',

    patentsinternationalpublished: '',
    patentsinternationalgranted: '',
    fundReceived: [
      {
        srNo: '',
        agency: '',
        amount: '',
      },
    ],

    researchProjects: [
      {
        title: '',
        currentStatus: '',
        nameOfPlCopl: '',
        multiTenure: '',
        fundingAgency: '',
        fund: '',
      },
    ],

    honoursAwardsMemberships: [''],
    otherActivities: [''],
  })

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`http://localhost:3000/api/hod/hod-report/${user._id}`)
        .then((response) => {
          console.log(response.data)
          setFormData(response.data.reportData)
        })
        .catch((error) => {
          console.log(error)
        })
    }

    fetchData()
  }, [user._id])

  const handleFieldChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSave = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/hod/hod-report`,
        {
          reportData: formData,
          user,
        }
      )

      if (response.status === 201) {
        // Handle successful save (e.g., show a success message)
        console.log('Data saved successfully.')
        toast.success('Data saved successfully')
      } else if (response.status === 400) {
        console.log('Error saving data.')
        toast.error('Data not saved.')
      }
    } catch (error) {
      // Handle errors (e.g., display an error message)
      console.error('Error saving data:', error)
      toast.error('Error saving data')
    }
  }

  return (
    <>
      <marquee>Last date for submission of annual report </marquee>
      <Typography gutterBottom variant="h4" align="center">
        Annual Report
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 1200, padding: '20px 5px', margin: '0 auto' }}>
          <CardContent>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              Please fill up the form to submit your annual report.
              <br />
              <br />
            </Typography>
            <form>
              <Grid container spacing={2}>
                <Grid xs={12} item>
                  <h4>Name of Department:</h4>
                  <br />
                  <TextField
                    placeholder="Department Name"
                    label="Name of Department"
                    variant="outlined"
                    fullWidth
                    //defaultValue={user.departmentName}
                    onChange={handleFieldChange}
                    value={formData.departmentName}
                    name="departmentName"
                    id="departmentName"
                  />
                </Grid>
                <Grid xs={12} item>
                  <h4>Head:</h4>
                  <br />
                  <TextField
                    label="Head"
                    variant="outlined"
                    fullWidth
                    //defaultValue={user.name}
                    onChange={handleFieldChange}
                    value={formData.name}
                    name="name"
                    id="name"
                  />
                </Grid>
                <Grid xs={12} item>
                  <h4>Telephone:</h4>
                  <br />
                  <TextField
                    label="Telephone"
                    variant="outlined"
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.telephone}
                    name="telephone"
                    id="telephone"
                  />
                </Grid>
                <Grid xs={12} item>
                  <h4>Email:</h4>
                  <br />
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    //defaultValue={user.email}
                    onChange={handleFieldChange}
                    value={formData.email}
                    name="email"
                    id="email"
                  />
                </Grid>
                <Grid xs={12} item>
                  <h4>Faculty Profile:</h4>
                </Grid>
                <Designation formData={formData} setFormData={setFormData} />

                <Grid xs={12} item>
                  <h4>Thrust Areas of Research:</h4>
                  <br />
                  <TextField
                    label="Thrust Areas of Research"
                    variant="outlined"
                    fullWidth
                    multiline
                    onChange={handleFieldChange}
                    value={formData.thrustAreasOfResearch}
                    name="thrustAreasOfResearch"
                    id="thrustAreasOfResearch"
                  />
                </Grid>
                <Grid xs={12} item>
                  <h4>
                    Brief Statement of Academic Activities and Achievements:
                  </h4>
                  <br />
                  <TextField
                    label="Brief Statement of Academic Activities and Achievements"
                    variant="outlined"
                    fullWidth
                    multiline
                    onChange={handleFieldChange}
                    value={formData.academicActivitiesAchievements}
                    name="academicActivitiesAchievements"
                    id="academicActivitiesAchievements"
                  />
                </Grid>
                <Grid xs={12} item>
                  <h4>Students' Profile:</h4>
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="B.Tech"
                    variant="outlined"
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.studentsProfilebTech}
                    name="studentsProfilebTech"
                    id="studentsProfilebTech"
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="M.Tech"
                    variant="outlined"
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.studentsProfilemTech}
                    name="studentsProfilemTech"
                    id="studentsProfilemTech"
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="Ph.D."
                    variant="outlined"
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.studentsProfilephd}
                    name="studentsProfilephd"
                    id="studentsProfilephd"
                  />
                </Grid>
                <StudentEnrolmentTable
                  formData={formData}
                  setFormData={setFormData}
                />
                <DegreeAwardedTable
                  formData={formData}
                  setFormData={setFormData}
                />
                <Grid xs={12} item>
                  <h4>Students Awarded Ph.D. Degree</h4>
                </Grid>
                <PhdDegree formData={formData} setFormData={setFormData} />
                <Grid xs={12} item>
                  <br />
                  <h4>Placement of Students</h4>
                </Grid>
                <Placement formData={formData} setFormData={setFormData} />
                <Grid xs={12} item>
                  <br />
                  <h4>Students selected for Higher Studies</h4>
                </Grid>
                <HigherStudies formData={formData} setFormData={setFormData} />

                <Grid xs={12} item>
                  <br />
                  <h4>Research Fellowship</h4>
                  <ResearchFellowship
                    formData={formData}
                    setFormData={setFormData}
                  />
                </Grid>

                <Grid xs={12} item>
                  <br />
                  <h4>Fieldwork/ Educational Tour of Students</h4>
                </Grid>
                <Grid xs={12} item>
                  Teacher-in-Charge :
                  <TextField
                    variant="outlined"
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.teacherInCharge}
                    name="teacherInCharge"
                    id="teacherInCharge"
                  />
                </Grid>
                <Grid xs={12} item>
                  Places/ Institutions Visited :
                  <TextField
                    variant="outlined"
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.placesVisited}
                    name="placesVisited"
                    id="placesVisited"
                  />
                </Grid>
                <Grid xs={12} item>
                  Duration of Tour(Dates and number of days) :
                  <TextField
                    variant="outlined"
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.duration}
                    name="duration"
                    id="duration"
                  />
                </Grid>
                <Grid xs={12} item>
                  Purpose of Tour :
                  <TextField
                    variant="outlined"
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.purpose}
                    name="purpose"
                    id="purpose"
                  />
                </Grid>
                <Grid xs={12} item>
                  <br />
                  <h4>Courses Conducted</h4>
                </Grid>
                <Grid xs={12} item>
                  <h4>Undergraduate:</h4>
                  <TextField
                    variant="outlined"
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.undergraduate}
                    name="undergraduate"
                    id="undergraduate"
                  />
                </Grid>
                <Grid xs={12} item>
                  Semesters
                  <UgSemester formData={formData} setFormData={setFormData} />
                </Grid>

                <Grid xs={12} item>
                  <h4>Postgraduate :</h4>
                  <TextField
                    variant="outlined"
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.postgraduate}
                    name="postgraduate"
                    id="postgraduate"
                  />
                </Grid>
                <Grid xs={12} item>
                  Semesters
                  <PgSemester formData={formData} setFormData={setFormData} />
                </Grid>

                <Grid xs={12} item>
                  <br />
                  <h4>Ph.D. Courses :</h4>
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    variant="outlined"
                    fullWidth
                    multiline
                    onChange={handleFieldChange}
                    value={formData.phdCourses}
                    name="phdCourses"
                    id="phdCourses"
                  />
                </Grid>

                <Grid xs={12} item>
                  <h4> IPR Items</h4>
                </Grid>
                <Grid xs={12} item>
                  <h4>(a) Patents:</h4>
                </Grid>
                <Grid xs={6} item>
                  (i) National
                </Grid>
                <Grid xs={6} item>
                  (ii) International
                </Grid>
                <Grid xs={3} item>
                  <TextField
                    label="(A) Published"
                    type="number"
                    variant="outlined"
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.patentsnationalpublished}
                    name="patentsnationalpublished"
                    id="patentsnationalpublished"
                  />
                </Grid>
                <Grid xs={3} item>
                  <TextField
                    label="(B) Granted"
                    type="number"
                    variant="outlined"
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.patentsnationalgranted}
                    name="patentsnationalgranted"
                    id="patentsnationalgranted"
                  />
                </Grid>

                <Grid xs={3} item>
                  <TextField
                    label="(A) Published"
                    type="number"
                    variant="outlined"
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.patentsinternationalpublished}
                    name="patentsinternationalpublished"
                    id="patentsinternationalpublished"
                  />
                </Grid>
                <Grid xs={3} item>
                  <TextField
                    label="(B) Granted"
                    type="number"
                    variant="outlined"
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.patentsinternationalgranted}
                    name="patentsinternationalgranted"
                    id="patentsinternationalgranted"
                  />
                </Grid>

                <Grid xs={12} item>
                  <h4>Funds Received during the current Year</h4>
                </Grid>
                <Grid xs={12} item>
                  <h4>
                    (A) Bulk Grant to Department/Centre/Section etc. other than
                    EMR grant
                  </h4>
                  <FundsReceived
                    formData={formData}
                    setFormData={setFormData}
                  />
                </Grid>

                <Grid xs={12} item>
                  <h4> Other Activities/ Achievements</h4>
                </Grid>

                <Grid xs={12} item>
                  <OtherActivities
                    formData={formData}
                    setFormData={setFormData}
                  />
                  <br />
                </Grid>
                <Grid item xs={4} align="center">
                  <Button
                    variant="contained"
                    color="success"
                    endIcon={<SendIcon />}
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
                  <Link to="/viewhod">
                    <Button
                      variant="contained"
                      color="warning"
                      startIcon={<DescriptionRoundedIcon />}
                    >
                      View Report
                    </Button>
                  </Link>
                </Grid>

                {/* <End of Grid/> */}
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}
