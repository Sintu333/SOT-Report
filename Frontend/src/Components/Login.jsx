import { useState } from "react"
import "./main.css"
import Button from "@mui/material/Button"
import LoginIcon from "@mui/icons-material/Login"
import ImageSlider from "./ImageSlider"
import LoginModal from "./LoginModal"
import Modal from "@mui/material/Modal"
import Box from "@mui/material/Box"

function Login() {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  const slides = [
    { url: "iit.png", title: "it" },
    { url: "sot_image.jpeg", title: "ene" },
    { url: "bmme.png", title: "bme" },
    { url: "sot.png", title: "ece" },
    { url: "ene.png", title: "arch" },
  ]
  const containerStyles = {
    width: "500px",
    height: "300px",
    margin: "0 auto",
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    height: 250,
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderColor: "primary.main",
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
  }

  return (
    <>
      <div className="main">
        <div className="navbar">
          <div className="icon">
            <img className="logo" src="NEHU_logo.png" alt="nehu logo" />
          </div>

          <div className="head">
            <h1>NORTH-EASTERN HILL UNIVERSITY</h1>
          </div>
          {/* <div className="menu">
            
          </div> */}
        </div>
        <div className="content">
          <h1>
            School of <br />
            Technology <br />
            <span>Annual Report</span>
          </h1>
          <p className="par">
            An annual report of a university is a comprehensive document that
            <br />
            provides an overview of the institutions activities, achievements,
            <br />
            financial performance, and future plans over a fiscal year.
          </p>

          <Button
            variant="contained"
            onClick={handleOpen}
            startIcon={<LoginIcon style={{ color: "white", height: "30px" }} />}
            style={{
              marginLeft: "100px",
              backgroundColor: "blue",
              width: "150px",
              height: "40px",
              fontWeight: "bold",
              fontSize: "17px",
            }}
          >
            Login
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <LoginModal close={() => setOpen(false)} />
            </Box>
          </Modal>

          <br />
          {/* <Link to="/registeradmin">
            <button className="btnn">Sign Up</button>
          </Link> */}

          <div className="form">
            <div style={containerStyles}>
              <ImageSlider slides={slides} />
            </div>
          </div>
        </div>
        <div className="footer">
          <center>
            School of Technology <br /> NEHU, Shillong
          </center>
        </div>
      </div>
    </>
  )
}
export default Login
