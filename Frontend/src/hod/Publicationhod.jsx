import Dashboardhod from "./Dashboardhod";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ReportHod from "./reportfaculty/ReportHod";

export default function Publicationhod() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Dashboardhod />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography paragraph>
            <br />
            <br />
            <br />
          </Typography>
          <ReportHod />
        </Box>
      </Box>
    </>
  );
}
