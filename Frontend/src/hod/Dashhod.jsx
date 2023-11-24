import React, { useEffect } from "react";
import Dashboardhod from "./Dashboardhod";
import { useNavigate } from "react-router-dom";

function Dashhod() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/homehod");
  });

  return <Dashboardhod />;
}

export default Dashhod;
