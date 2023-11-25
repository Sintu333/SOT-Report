import Dashboardfaculty from './Dashboardfaculty'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ReportFaculty from './reportfa/ReportFaculty'

export default function Publicationfaculty() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Dashboardfaculty />
        <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
          <Typography paragraph>
            <br />
            <br />
            <br />
          </Typography>
          <ReportFaculty />
        </Box>
      </Box>
    </>
  )
}
