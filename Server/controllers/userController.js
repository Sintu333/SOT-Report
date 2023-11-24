const jwt = require("jsonwebtoken");
const User = require("../models/userSchema.js");
const FacultyReport = require("../models/facultyReportSchema.js");
const HodReport = require("../models/hodReportSchema.js");
const DeanReport = require("../models/deanReportSchema.js");

SECRET_KEY = "KEY";

const userLogIn = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    // Check if the user with the given email exists
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Invalid credentials. User not found" });
    }

    // Verify the password
    const isPasswordValid = req.body.password === user.password;

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check if the user's role matches the required role (e.g., 'HOD' in this case)
    if (user.role !== role) {
      return res.status(403).json({ message: "Access denied. Invalid role." });
    }

    // Create a JWT token for authentication
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
      expiresIn: "1h",
    });

    res
      .status(200)
      .json({ message: "Login successful", token: token, user: user });
  } catch (error) {
    res.status(500).json({ message: "Login failed.", error: error.message });
  }
};

const userRegister = async (req, res) => {
  //console.log(req.body)
  try {
    const {
      name,
      email,
      password,
      role,
      departmentName,
      dateJoining,
      designation,
    } = req.body;

    // Check if the email is already in use
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ error: "Email is already registered." });
    }

    if (req.body.role === "HOD") {
      const hodInDepartment = await User.findOne({
        departmentName: req.body.departmentName,
        role: "HOD",
      });
      if (hodInDepartment) {
        return res.json({ error: "HOD already exists for this department." });
      }
    }

    const newUser = new User({
      name,
      email,
      password,
      role,
      departmentName,
      dateJoining,
      designation,
    });

    const savedUser = await newUser.save();

    res.status(201).json({ message: "User Created Successfully" });
  } catch (error) {
    res.status(400).json({ message: "User registration failed" });
  }
};

const deleteUserById = async (req, res) => {
  const userId = req.params.id; // Assuming the user ID is passed as a route parameter

  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully", deletedUser });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const hodList = async (req, res) => {
  try {
    // Query the database for users with the role "hod"
    const hodUsers = await User.find({ role: "HOD" });

    // Send the hodUsers as a response
    res.json({ users: hodUsers });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};

const facultyList = async (req, res) => {
  try {
    // Query the database for users with the role "hod"
    const hodUsers = await User.find({ role: "Faculty" });

    // Send the hodUsers as a response
    res.json({ users: hodUsers });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};

const hodfacultyList = async (req, res) => {
  const userDepartment = req.query.department;

  try {
    // Query the database for users with the role "faculty" in the specified department
    const facultyUsers = await User.find({
      role: "Faculty",
      departmentName: userDepartment,
    });

    // Send the facultyUsers as a response
    res.json({ users: facultyUsers });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};

const facultyReport = async (req, res) => {
  try {
    const { email, facultyData } = req.body;

    console.log(req.body);

    // Check if the email has already sent a report
    const existingReport = await FacultyReport.findOne({ email: email });
    if (existingReport) {
      return res.status(400).json({ message: "Email already sent a report." });
    }

    // Create a new faculty report
    const faculty = new FacultyReport({ ...req.body });

    // Save the report to the database
    await faculty.save();

    res.status(200).json({ message: "Report submitted successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// const facultydetail = async (req, res) => {

//   try {
//     const Facultydetail = await FacultyReport.findById(req.params._id);
//     //({}).populate("user");
//     //console.log(Facultydetail);
//     res.status(200).json(Facultydetail);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Unable to fetch data" });
//   }
// };

const facultydetail = async (req, res) => {
  const email = req.params.email;
  //console.log(email);
  try {
    const userReport = await FacultyReport.findOne({ email });

    if (!userReport) {
      return res.status(404).json({ error: "User report details not found" });
    }

    return res.status(200).json(userReport);
  } catch (error) {
    console.error("Error fetching user report details:", error);
    return res
      .status(500)
      .json({ error: "Error fetching user report details" });
  }
};

const hodReport = async (req, res) => {
  try {
    const { email, formData } = req.body;

    //console.log(req.body);

    // Check if the email has already sent a report
    const existingReport = await HodReport.findOne({ email: email });
    if (existingReport) {
      return res.status(400).json({ message: "Email already sent a report." });
    }

    // Create a new faculty report
    const hod = new HodReport({ ...req.body });

    // Save the report to the database
    await hod.save();

    res.status(200).json({ message: "Report submitted successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const hoddetail = async (req, res) => {
  const email = req.params.email;
  //console.log(email);
  try {
    const userReport = await HodReport.findOne({ email });

    if (!userReport) {
      return res.status(404).json({ error: "User report details not found" });
    }

    return res.status(200).json(userReport);
  } catch (error) {
    console.error("Error fetching user report details:", error);
    return res
      .status(500)
      .json({ error: "Error fetching user report details" });
  }
};

const deanReport = async (req, res) => {
  try {
    const { email, formData } = req.body;

    //console.log(req.body);

    // Check if the email has already sent a report
    const existingReport = await DeanReport.findOne({ email: email });
    if (existingReport) {
      return res.status(400).json({ message: "Email already sent a report." });
    }

    // Create a new faculty report
    const hod = new DeanReport({ ...req.body });

    // Save the report to the database
    await hod.save();

    res.status(200).json({ message: "Report submitted successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const FacultyReportHOD = async (req, res) => {
  const userId = req.params.userId;
  try {
    const userReport = await FacultyReport.findOne({ user: userId });

    if (!userReport) {
      return res.status(404).json({ error: "User report details not found" });
    }

    return res.status(200).json(userReport);
  } catch (error) {
    console.error("Error fetching user report details:", error);
    return res
      .status(500)
      .json({ error: "Error fetching user report details" });
  }
};

const deandetail = async (req, res) => {
  const email = req.params.email;
  //console.log(email);
  try {
    const userReport = await DeanReport.findOne({ email });

    if (!userReport) {
      return res.status(404).json({ error: "User report details not found" });
    }

    return res.status(200).json(userReport);
  } catch (error) {
    console.error("Error fetching user report details:", error);
    return res
      .status(500)
      .json({ error: "Error fetching user report details" });
  }
};

const hodReportDepartment = async (req, res) => {
  const department = req.params.department;
  console.log(department);
  try {
    const departmentReports = await HodReport.findOne({
      departmentName: department,
    }).populate("user");

    if (!departmentReports || departmentReports.length === 0) {
      return res.status(404).json({ error: "Department reports not found" });
    }

    // const filteredReports = departmentReports.filter((report) => {
    //   return report.user.departmentName === department;
    // });

    // if (filteredReports.length === 0) {
    //   return res
    //     .status(404)
    //     .json({ error: `No reports found for department: ${department}` });
    // }

    return res.status(200).json(departmentReports);
  } catch (error) {
    console.error("Error fetching user report details:", error);
    return res
      .status(500)
      .json({ error: "Error fetching user report details" });
  }
};

const saveFacultyReport = async (req, res) => {
  try {
    const { email, ...formData } = req.body;
    const { userId } = req.params;

    let updatedFacultyReport = await FacultyReport.findOneAndUpdate(
      { user: userId }, // Find the document based on the user ID
      { ...formData, email }, // Update with the new form data and email
      { new: true, upsert: true } // Set `new` to true to return the modified document, `upsert` to create if not found
    );

    res.status(200).json({ message: "Faculty report saved successfully." });
  } catch (error) {
    res.status(500).json({ error: "Error saving faculty report." });
  }
};

const getFacultyReport = async (req, res) => {
  try {
    const { userId } = req.params;

    let facultyReport = await FacultyReport.findOne({ user: userId });

    if (!facultyReport) {
      return res.status(401).json({ error: "User not found" });
    }

    res.status(200).json(facultyReport);
  } catch (error) {
    res.status(500).json({ error: "Error fetching faculty report." });
  }
};

const saveHodReport = async (req, res) => {
  try {
    const { email, ...formData } = req.body;
    const { userId } = req.params;

    let updatedFacultyReport = await HodReport.findOneAndUpdate(
      { user: userId }, // Find the document based on the user ID
      { ...formData, email }, // Update with the new form data and email
      { new: true, upsert: true } // Set `new` to true to return the modified document, `upsert` to create if not found
    );

    res.status(200).json({ message: "HOD report saved successfully." });
  } catch (error) {
    res.status(500).json({ error: "Error saving HOD report." });
  }
};

const getHodReport = async (req, res) => {
  try {
    const { userId } = req.params;

    let hodReport = await HodReport.findOne({ user: userId });

    if (!hodReport) {
      return res.status(401).json({ error: "User not found" });
    }

    res.status(200).json(hodReport);
  } catch (error) {
    res.status(500).json({ error: "Error fetching hod report." });
  }
};

const HodReports = async (req, res) => {
  try {
    let hodReport = await HodReport.find({}).populate("user");

    if (!hodReport) {
      return res.status(401).json({ error: "User not found" });
    }

    res.status(200).json(hodReport);
  } catch (error) {
    res.status(500).json({ error: "Error fetching hod report." });
  }
};

const saveDeanReport = async (req, res) => {
  try {
    const { email, ...formData } = req.body;
    const { userId } = req.params;

    let updatedDeanReport = await DeanReport.findOneAndUpdate(
      { user: userId }, // Find the document based on the user ID
      { ...formData, email }, // Update with the new form data and email
      { new: true, upsert: true } // Set `new` to true to return the modified document, `upsert` to create if not found
    );

    res.status(200).json({ message: "Faculty report saved successfully." });
  } catch (error) {
    res.status(500).json({ error: "Error saving faculty report." });
  }
};

const getDeanReport = async (req, res) => {
  try {
    const { userId } = req.params;

    let deanReport = await DeanReport.findOne({ user: userId });

    if (!deanReport) {
      return res.status(401).json({ error: "User not found" });
    }

    res.status(200).json(deanReport);
  } catch (error) {
    res.status(500).json({ error: "Error fetching hod report." });
  }
};

module.exports = {
  userLogIn,
  userRegister,
  deleteUserById,
  hodList,
  facultyList,
  hodfacultyList,
  facultyReport,
  facultydetail,
  hodReport,
  hoddetail,
  deanReport,
  deandetail,
  hodReportDepartment,
  FacultyReportHOD,
  saveFacultyReport,
  getFacultyReport,
  saveHodReport,
  getHodReport,
  saveDeanReport,
  getDeanReport,
  HodReports,
};
