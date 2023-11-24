const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema for School Information
const deanReportSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  schoolName: String,
  dean: String,
  telephone: String,
  email: String,
  visionMission: [String],
  departmentsCenters: [String],

  totalStudentsPhd: String,
  totalPublications: String,
  totalBooksChaptersProceedings: String,
  fundResearchProject: String,

  researchProjectscompleted: String,
  researchProjectsongoing: String,
  researchProjectsnew: String,

  fundConsultancyProject: String,
  consultancyProjectsnational: String,
  consultancyProjectsinternational: String,

  totalStudentsPlacedHigherStudies: String,

  totalPatents: String,

  patentsFilednational: String,
  patentsFiledinternational: String,

  patentsPublishednational: String,
  patentsPublishedinternational: String,

  patentsGrantednational: String,
  patentsGrantedinternational: String,

  totalPolicyDocuments: String,
  policyDocumentsApplied: [String],
  policyDocumentsApproved: [String],
  majorAchievementsHighlights: [String],
  futurePlans: [String],
});

const DeanReport = mongoose.model("DeanReport", deanReportSchema);

module.exports = DeanReport;
