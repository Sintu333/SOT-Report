const mongoose = require("mongoose");

// Create a schema for the Faculty information
const facultyReportSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  email: {
    //type: mongoose.Schema.Types.ObjectId,
    //ref: 'user',
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  // reportData: {
  //   type: mongoose.Schema.Types.Mixed,
  //   required: true,
  // },

  fieldOfSpecialization: String,

  teachingExperienceUG: Number,
  teachingExperiencePG: Number,

  // Publications
  publicationsugcCareJournals: [String],
  publicationsbookswithISBN: [String],
  publicationseditedBooksVolumes: [String],
  publicationsbooksChapters: [String],
  seminarsConferences: [String],
  publicationspopularArticles: [String],

  // IPR Items
  patentsnationalpublished: Number,
  patentsnationalgranted: Number,
  patentsnationalapplied: Number,

  patentsinternationalpublished: Number,
  patentsinternationalgranted: Number,
  patentsinternationalapplied: Number,

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
  organizedinternational: [String],

  attendednational: [String],
  attendedinternational: [String],

  academicCollaborationsnational: [String],
  academicCollaborationsinternational: [String],

  honoursAwardsMemberships: [String],
  otherActivities: [String],

  publicationsbasicResearch: Number,
  publicationsappliedResearch: Number,
  publicationsactionResearch: Number,
  publicationsprojectSubmitted: Number,
  publicationsongoingProject: Number,

  publicationsgroupI: Number,
  publicationsgroupII: Number,

  teachingExtensionOutreachActivities: String,
  otherThanTeaching: String,
});

// Create a model for the Faculty schema
const FacultyReport = mongoose.model("FacultyReport", facultyReportSchema);

module.exports = FacultyReport;
