const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Routes = require("./routes/route.js");

//connecting to the app
const app = express();
const PORT = 3000;

//connecting to mongodb
const dbURL = "mongodb://127.0.0.1:27017/sot";
mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log("NOT CONNECTED TO NETWORK", err));

app.listen(PORT, () => {
  console.log(`Server started at port no. ${PORT}`);
});

//middleware
app.use(bodyParser.json());

//app.use(cors())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

//Routes
app.use("/", Routes);

//POST REQUEST
/*
app.post('/register',async(req, res) => {
        try{
            const{ name,email,password,schoolName}=req.body
            const hashedPassword = await bcrypt.hash(password,10)
            const newadmin = new admin({name,email,password:hashedPassword,schoolName})
            await newadmin.save()
            res.status(201).json({message:'User Created Successfully'})
        }catch(error){
            res.status(500).json({message:'Error signing up'})
        }
    })
//GET REQUEST
app.get('/register',async(req, res) => {
    try{
        const admins = await admin.find()
        res.status(201).json({admins})
    }
    catch(error){
        res.status(500).json({message:'Unable to fetch data'})
    }
})
*/
