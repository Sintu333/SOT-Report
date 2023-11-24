import React, { useEffect, useContext } from "react";
import Dashboardadmin from "./Dashboardadmin";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Components/UserContext";

function Dashadmin() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => navigate("/homeadmin"));

  return <Dashboardadmin />;
}

export default Dashadmin;
