const mongoose = require("mongoose");

const hodReportSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  email: {
    type: String,
    required: true,
  },

  departmentName: String,
  name: String,
  telephone: String,
  email: String,

  designation: [
    {
      post: String,
      name: String,
      specialization: String,
    },
  ],

  thrustAreasOfResearch: [String],
  academicActivitiesAchievements: [String],
  studentsProfilebTech: String,
  studentsProfilemTech: String,
  studentsProfilephd: String,

  phdDegree: [
    {
      name: String,
      title: String,
      nameOfSupervisor: String,
    },
  ],

  placement: [
    {
      name: String,
      programme: String,
      post: String,
      place: String,
    },
  ],

  higherStudies: [
    {
      name: String,
      programme: String,
      institution: String,
      country: String,
    },
  ],

  fellowship: [
    {
      csir: String,
      ugc: String,
      rajivGandhi: String,
      meritorious: String,
      azad: String,
      others: String,
    },
  ],

  teacherInCharge: [String],
  placesVisited: [String],
  duration: [String],
  purpose: [String],

  undergraduate: [String],
  ugsemesters: [String],
  postgraduate: [String],
  pgsemesters: [String],

  phdCourses: [String],
  conferencesOrganized: [String],
  conferencesAttended: [String],

  organizednational: [String],
  attendednational: [String],

  publicationsugcCareJournals: [String],
  publicationsbookswithISBN: [String],
  publicationseditedBooksVolumes: [String],
  publicationsbooksChapters: [String],
  seminarsConferences: [String],
  publicationspopularArticles: [String],
  patentsnationalpublished: String,
  patentsnationalgranted: String,
  patentsinternationalpublished: String,
  patentsinternationalgranted: String,
  policyReportnational: [String],
  policyReportinternational: [String],
  eContentDeveloped: [String],
  consultancy: [
    {
      title: String,
      currentStatus: String,
      nameOfConsultant: String,
      multiTenure: String,
      fundingAgency: String,
      fund: String,
    },
  ],

  fundReceived: [
    {
      srNo: String,
      agency: String,
      amount: String,
    },
  ],

  researchProjects: [
    {
      title: String,
      currentStatus: String,
      nameOfPlCopl: String,
      multiTenure: String,
      fundingAgency: String,
      fund: String,
    },
  ],
  organizednational: [String],
  attendednational: [String],

  academicorganised: [String],
  academicattended: [String],
  academicCollaborationsnational: [String],
  academicCollaborationsinternational: [String],
  honoursAwardsMemberships: [String],
  otherActivities: [String],
});

const HodReport = mongoose.model("HodReport", hodReportSchema);

module.exports = HodReport;
