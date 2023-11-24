import React from "react";
import Dashboardfaculty from "./Dashboardfaculty";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Dashfaculty() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/homefaculty");
  });

  return <Dashboardfaculty />;
}

export default Dashfaculty;
