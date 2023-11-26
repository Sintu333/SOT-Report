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
import EditedBooks from './AddTextFaculty/EditedBooks'
import UgcCareJournals from './AddTextFaculty/UgcCareJournals'
import BooksISBN from './AddTextFaculty/BooksISBN'
import BooksChapters from './AddTextFaculty/BooksChapters'
import Seminar from './AddTextFaculty/Seminar'
import PopularArticles from './AddTextFaculty/PopularArticles'
import ReportsNational from './AddTextFaculty/ReportsNational'
import ReportsInternational from './AddTextFaculty/ReportsInternational'
import OrganizedNational from './AddTextFaculty/OrganizedNational'
import AttendedNational from './AddTextFaculty/AttendedNational'
import AcademicNational from './AddTextFaculty/AcademicNational'
import AcademicInternational from './AddTextFaculty/AcademicInternational'
import HonoursAwards from './AddTextFaculty/HonoursAwards'
import OtherActivities from './AddTextFaculty/OtherActivities'
import EContent from './AddTextFaculty/EContent'
import Consultancy from './AddRowFaculty/Consultancy'
import ResearchProjects from './AddRowFaculty/ResearchProjects'
import OrganizedInternational from './AddTextFaculty/OrganizedInternational'
import AttendedInternational from './AddTextFaculty/AttendedInternational'
import SendIcon from '@mui/icons-material/Send'
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded'

export default function ReportFaculty() {
  const { user } = useContext(UserContext)

  const [formData, setFormData] = useState({
    fieldOfSpecialization: '',
    teachingExperienceUG: '',
    teachingExperiencePG: '',

    publicationsugcCareJournals: [''],

    publicationsbasicResearch: '',
    publicationsappliedResearch: '',
    publicationsactionResearch: '',
    publicationsprojectSubmitted: '',
    publicationsongoingProject: '',

    publicationsgroupI: '',
    publicationsgroupII: '',

    publicationsbookswithISBN: [''],
    publicationseditedBooksVolumes: [''],
    publicationsbooksChapters: [''],
    seminarsConferences: [''],

    publicationspopularArticles: [''],

    patentsnationalpublished: '',
    patentsnationalgranted: '',
    patentsnationalapplied: '',

    patentsinternationalpublished: '',
    patentsinternationalgranted: '',
    patentsinternationalapplied: '',

    policyReportnational: [''],
    policyReportinternational: [''],

    eContentDeveloped: [''],

    consultancy: [
      {
        title: '',
        currentStatus: '',
        nameOfConsultant: '',
        multiTenure: '',
        fundingAgency: '',
        fund: '',
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

    organizednational: [''],
    organizedinternational: [''],

    attendednational: [''],
    attendedinternational: [''],

    academicCollaborationsnational: [''],
    academicCollaborationsinternational: [''],

    honoursAwardsMemberships: [''],
    otherActivities: [''],

    teachingExtensionOutreachActivities: '',
    otherThanTeaching: '',
  })

  const handleFieldChange = (event) => {
    //const { name, value } = event.target;
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value,
    }))
    //console.log(formData);
  }

  const fetchData = () => {
    axios
      .get(`http://localhost:3000/api/reports/faculty-report/${user._id}`)
      .then((response) => {
        console.log(response.data)
        setFormData(
          response.data.reportData ? response.data.reportData : formData
        )
      })
      .catch((error) => {
        console.log(error)
        console.log(formData)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleSave = async () => {
    console.log(formData)
    try {
      const response = await axios.post(
        `http://localhost:3000/api/reports/faculty-report`,
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
        toast.error('Error saving data.')
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
      <Typography gutterBottom variant='h4' align='center'>
        Annual Report
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 1200, padding: '20px 5px', margin: '0 auto' }}>
          <CardContent>
            <Typography
              variant='body2'
              color='textSecondary'
              component='p'
              gutterBottom
            >
              Please fill up the form to submit your annual report.
              <br />
              <br />
            </Typography>
            <form>
              <Grid container spacing={2}>
                <Grid xs={12} item>
                  <h4> 1.Name of Faculty</h4>
                  <br />
                  <TextField
                    // label='Name of Faculty'
                    disabled
                    variant='outlined'
                    fullWidth
                    //defaultValue={user.name}
                    value={user.name}
                  />
                </Grid>
                <Grid xs={12} item>
                  <h4>2. Field of Specialization:</h4>
                  <br />
                  <TextField
                    label='Field of Specialization'
                    variant='outlined'
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.fieldOfSpecialization}
                    name='fieldOfSpecialization'
                    id='fieldOfSpecialization'
                  />
                </Grid>
                <Grid xs={12} item>
                  <h4> Teaching Experience(In Years):</h4>
                </Grid>
                <Grid xs={6} item>
                  <TextField
                    label='UG'
                    type='number'
                    variant='outlined'
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.teachingExperienceUG}
                    name='teachingExperienceUG'
                    id='UG'
                  />
                </Grid>
                <Grid xs={6} item>
                  <TextField
                    label='PG, including PhD '
                    type='number'
                    variant='outlined'
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.teachingExperiencePG}
                    name='teachingExperiencePG'
                    id='PG'
                  />
                </Grid>

                <Grid xs={12} item>
                  <h4>3. Publications:</h4>
                </Grid>
                <Grid xs={12} item>
                  <br />
                  <h4>(i) Research Papers(only UGC CARE Journals)</h4>
                  <UgcCareJournals
                    formData={formData}
                    setFormData={setFormData}
                  />
                </Grid>
                <Grid xs={12} item>
                  Research Activities
                </Grid>
                <Grid xs={4} item>
                  Basic Research
                </Grid>
                <Grid xs={4} item>
                  Applied Research
                </Grid>
                <Grid xs={4} item>
                  Action Research
                </Grid>

                <Grid xs={4} item>
                  <TextField
                    label='Basic Research'
                    variant='outlined'
                    type='number'
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.publicationsbasicResearch}
                    id='basicResearch'
                    name='publicationsbasicResearch'
                  />
                </Grid>
                <Grid xs={4} item>
                  <TextField
                    label='Applied Research'
                    type='number'
                    variant='outlined'
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.publicationsappliedResearch}
                    id='appliedResearch'
                    name='publicationsappliedResearch'
                  />
                </Grid>
                <Grid xs={4} item>
                  <TextField
                    label='Action Research'
                    type='number'
                    variant='outlined'
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.publicationsactionResearch}
                    id='actionResearch'
                    name='publicationsactionResearch'
                  />
                </Grid>
                <Grid xs={4} item>
                  Project Submitted
                </Grid>
                <Grid xs={4} item>
                  Ongoing Project
                </Grid>
                <Grid xs={4} item>
                  Research Paper in UGC care list journals
                </Grid>
                <Grid xs={4} item>
                  <TextField
                    label='Project Submitted'
                    type='number'
                    variant='outlined'
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.publicationsprojectSubmitted}
                    id='projectSubmitted'
                    name='publicationsprojectSubmitted'
                  />
                </Grid>
                <Grid xs={4} item>
                  <TextField
                    label='Ongoing Project'
                    type='number'
                    variant='outlined'
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.publicationsongoingProject}
                    id='ongoingProject'
                    name='publicationsongoingProject'
                  />
                </Grid>
                <Grid xs={2} item>
                  <TextField
                    label='Group I'
                    type='number'
                    variant='outlined'
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.publicationsgroupI}
                    id='groupI'
                    name='publicationsgroupI'
                  />
                </Grid>
                <Grid xs={2} item>
                  <TextField
                    label='Group II'
                    type='number'
                    variant='outlined'
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.publicationsgroupII}
                    id='groupII'
                    name='publicationsgroupII'
                  />
                </Grid>
                <Grid xs={12} item>
                  <h4>(ii)Books(only with ISBN)</h4>
                  <BooksISBN formData={formData} setFormData={setFormData} />
                </Grid>

                <Grid xs={12} item>
                  <h4>(iii)Edited Books/Volumes(only with ISBN)</h4>

                  <EditedBooks formData={formData} setFormData={setFormData} />
                </Grid>
                <Grid xs={12} item>
                  <h4>(iv)Books Chapters(only with ISBN)</h4>
                  <BooksChapters
                    formData={formData}
                    setFormData={setFormData}
                  />
                </Grid>
                <Grid xs={12} item>
                  <h4>(v)Proceedings of Seminar/Conferences</h4>
                  <Seminar formData={formData} setFormData={setFormData} />
                </Grid>
                <Grid xs={12} item>
                  <h4>(vi)Popular Articles(News Paper and Magazines)</h4>
                  <PopularArticles
                    formData={formData}
                    setFormData={setFormData}
                  />
                </Grid>
                <Grid xs={12} item>
                  <h4> 4. IPR Items</h4>
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
                <Grid xs={2} item>
                  <TextField
                    label='(A) Published'
                    type='number'
                    variant='outlined'
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.patentsnationalpublished}
                    id='published'
                    name='patentsnationalpublished'
                  />
                </Grid>
                <Grid xs={2} item>
                  <TextField
                    label='(B) Granted'
                    type='number'
                    variant='outlined'
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.patentsnationalgranted}
                    id='granted'
                    name='patentsnationalgranted'
                  />
                </Grid>
                <Grid xs={2} item>
                  <TextField
                    label='(C) Applied'
                    type='number'
                    variant='outlined'
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.patentsnationalapplied}
                    id='applied'
                    name='patentsnationalapplied'
                  />
                </Grid>
                <Grid xs={2} item>
                  <TextField
                    label='(A) Published'
                    type='number'
                    variant='outlined'
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.patentsinternationalpublished}
                    id='published'
                    name='patentsinternationalpublished'
                  />
                </Grid>
                <Grid xs={2} item>
                  <TextField
                    label='(B) Granted'
                    type='number'
                    variant='outlined'
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.patentsinternationalgranted}
                    id='granted'
                    name='patentsinternationalgranted'
                  />
                </Grid>
                <Grid xs={2} item>
                  <TextField
                    label='(C) Applied'
                    type='number'
                    variant='outlined'
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.patentsinternationalapplied}
                    id='applied'
                    name='patentsinternationalapplied'
                  />
                </Grid>

                <Grid xs={12} item>
                  <h4>(b) Policy Reports:</h4>
                </Grid>
                <Grid xs={12} item>
                  (i) National:
                </Grid>
                <Grid xs={12} item>
                  <ReportsNational
                    formData={formData}
                    setFormData={setFormData}
                  />
                </Grid>
                <Grid xs={12} item>
                  (ii) International:
                </Grid>
                <Grid xs={12} item>
                  <ReportsInternational
                    formData={formData}
                    setFormData={setFormData}
                  />
                </Grid>
                <Grid xs={12} item>
                  <h4>(c) E-Content developed (MOOCs/SWAYAM):</h4>
                </Grid>
                <Grid xs={12} item>
                  <EContent formData={formData} setFormData={setFormData} />
                </Grid>
                <Grid xs={12} item>
                  <h4>(d) Consultancy:</h4>
                </Grid>
                <Grid xs={12} item>
                  <Consultancy formData={formData} setFormData={setFormData} />
                </Grid>

                <Grid xs={12} item>
                  <h4>5. Research Projects</h4>
                </Grid>
                <Grid xs={12} item>
                  <ResearchProjects
                    formData={formData}
                    setFormData={setFormData}
                  />
                </Grid>

                <Grid xs={12} item>
                  <h4>
                    6. Seminar/Conference/Symposium/Extension Programme etc.
                  </h4>
                </Grid>
                <Grid xs={12} item>
                  <h4>(i) Organized</h4>
                </Grid>
                <Grid xs={12} item>
                  <h4>National</h4>
                </Grid>

                <Grid xs={12} item>
                  <OrganizedNational
                    formData={formData}
                    setFormData={setFormData}
                  />
                </Grid>
                <Grid xs={12} item>
                  <h4>International</h4>
                </Grid>
                <Grid xs={12} item>
                  <OrganizedInternational
                    formData={formData}
                    setFormData={setFormData}
                  />
                </Grid>

                <Grid xs={12} item></Grid>
                <Grid xs={12} item>
                  <h4>(ii) Attended</h4>
                </Grid>
                <Grid xs={12} item>
                  <h4>National</h4>
                </Grid>

                <Grid xs={12} item>
                  <AttendedNational
                    formData={formData}
                    setFormData={setFormData}
                  />
                </Grid>
                <Grid xs={12} item>
                  <h4>International</h4>
                </Grid>
                <Grid xs={12} item>
                  <AttendedInternational
                    formData={formData}
                    setFormData={setFormData}
                  />
                </Grid>

                <Grid xs={12} item>
                  <h4>7. Academic Collaborations</h4>
                </Grid>
                <Grid xs={12} item>
                  (i) National
                </Grid>
                <Grid xs={12} item>
                  <AcademicNational
                    formData={formData}
                    setFormData={setFormData}
                  />
                </Grid>
                <Grid xs={12} item>
                  (ii) International
                </Grid>
                <Grid xs={12} item>
                  <AcademicInternational
                    formData={formData}
                    setFormData={setFormData}
                  />
                </Grid>
                <Grid xs={12} item>
                  <h4>8. Honours/Awards/Recognition/Membership/Fellowship</h4>
                </Grid>

                <Grid xs={12} item>
                  <HonoursAwards
                    formData={formData}
                    setFormData={setFormData}
                  />
                </Grid>
                <Grid xs={12} item>
                  <h4>9. Other Activities</h4>
                </Grid>

                <Grid xs={12} item>
                  <OtherActivities
                    formData={formData}
                    setFormData={setFormData}
                  />
                </Grid>
                <Grid xs={12} item>
                  <h4> Other Curricular Activities</h4>
                </Grid>

                <Grid xs={12} item>
                  <TextField
                    label='Teaching/ Extension/ Outreach Activities(Give in Numbers)'
                    variant='outlined'
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.teachingExtensionOutreachActivities}
                    id='teachingEvents'
                    name='teachingExtensionOutreachActivities'
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label='Responsibilities other than teaching(Give Yes/No)'
                    variant='outlined'
                    fullWidth
                    onChange={handleFieldChange}
                    value={formData.otherThanTeaching}
                    id='otherthanTeaching'
                    name='otherThanTeaching'
                  />
                </Grid>

                <Grid item xs={4} align='center'>
                  <Button
                    variant='contained'
                    color='success'
                    endIcon={<SendIcon />}
                    onClick={handleSave}
                  >
                    Save & Submit Report
                  </Button>
                </Grid>
                <Grid item xs={4} align='center'>
                  {/* <Button type="submit" variant="contained" color="primary">
                    Submit Report DescriptionRoundedIcon
                  </Button> */}
                </Grid>
                <Grid item xs={4} align='center'>
                  <Link to='/facultyview'>
                    <Button
                      startIcon={<DescriptionRoundedIcon />}
                      variant='contained'
                      color='warning'
                    >
                      View Report
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}
