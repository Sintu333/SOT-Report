const router = require("express").Router();

const {
  userRegister,
  userLogIn,
  hodList,
  facultyList,
  hodfacultyList,
  facultyReport,
  facultydetail,
  hodReport,
  deanReport,
  hoddetail,
  deandetail,
  hodReportDepartment,
  FacultyReportHOD,
  saveFacultyReport,
  getFacultyReport,
  saveHodReport,
  getHodReport,
  deleteUserById,
  saveDeanReport,
  getDeanReport,
  HodReports,
} = require("../controllers/userController.js");

//User
router.post("/Userregister", userRegister);
router.post("/UserLogin", userLogIn);
router.delete("/users/:id", deleteUserById);
router.get("/HodList", hodList);
router.get("/FacultyList", facultyList);

// HOD
router.get("/HodFacultyList", hodfacultyList); //table in HOD for faculty List

//FacultyReport
router.post("/FacultyReport", facultyReport); //Sending Faculty Report
router.get("/FacultyDetail/:email", facultydetail); //For Viewing Faculty Report
router.post("/SaveFacultyReport/:userId", saveFacultyReport); //For saving Faculty Report
router.get("/getFacultyReport/:userId", getFacultyReport); //For Get Faculty Report

//HODReport
router.post("/HodReport", hodReport); //Sending HOD Report
router.get("/HodDetail/:email", hoddetail); //For Viewing HOD Report
router.get("/report/:department", hodReportDepartment); //For viewing Faculty details in HOD Report
router.post("/SaveHodReport/:userId", saveHodReport); //For saving HOD Report
router.get("/getHodReport/:userId", getHodReport); //For Get HOD Report
router.get("/HodReports", HodReports); //For Populating HOD Report

//DeanReport
router.post("/DeanReport", deanReport); //Sending Dean Report
router.get("/DeanDetail/:email", deandetail); //For Viewing Dean Report
router.post("/SaveDeanReport/:userId", saveDeanReport); //For saving HOD Report
router.get("/getDeanReport/:userId", getDeanReport); //For Get Dean Report

//HODFacultyReport
router.get("/FacultyReportHOD/:userId", FacultyReportHOD); //For Viewing Faculty Report in HOD Table List

module.exports = router;
