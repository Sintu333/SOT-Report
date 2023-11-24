//import React from "react";
import Login from "./Components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Registeradmin from "./admin/Registeradmin";
import Homeadmin from "./admin/Homeadmin";
import Profileadmin from "./admin/Profileadmin";
import Hodadmin from "./admin/Hodadmin";
import Facultyadmin from "./admin/Facultyadmin";
import Publicationsadmin from "./admin/Publicationadmin";
import Reportadmin from "./admin/Reportadmin";
import Dashadmin from "./admin/Dashadmin";
import Dashboardadmin from "./admin/Dashboardadmin";

import Homehod from "./hod/Homehod";
import Profilehod from "./hod/Profilehod";
import Facultyhod from "./hod/Facultyhod";
import Publicationshod from "./hod/Publicationhod";
import Dashhod from "./hod/Dashhod";
import Dashboardhod from "./hod/Dashboardhod";
import HodList from "./admin/hodad/HodList";

import Homefaculty from "./faculty/Homefaculty";
import Profilefaculty from "./faculty/Profilefaculty";
import Publicationsfaculty from "./faculty/Publicationfaculty";
import Dashfaculty from "./faculty/Dashfaculty";
import Dashboardfaculty from "./faculty/Dashboardfaculty";
//import axios from "axios";

import Error from "./Components/Error";
import { useContext } from "react";
import { UserContext } from "./Components/UserContext";
import ViewDean from "./admin/reportad/ViewDean";
import FacultyView from "./faculty/reportfa/FacultyView";
import HodView from "./hod/reportfaculty/HodView";
import FacultyReportHOD from "./hod/reportfaculty/FacultyReportHOD";

//axios.defaults.withCredentials = true;

function App() {
  const { user } = useContext(UserContext);
  return (
    <>
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/registeradmin" element={<Registeradmin />}></Route>
          {user && user.role === "Dean" && (
            <Route path="/dashadmin" element={<Dashadmin />}></Route>
          )}
          {user && user.role === "Dean" && (
            <Route path="/homeadmin" element={<Homeadmin />}></Route>
          )}
          {user && user.role === "Dean" && (
            <Route path="/profileadmin" element={<Profileadmin />}></Route>
          )}
          {user && user.role === "Dean" && (
            <Route path="/hodadmin" element={<Hodadmin />}></Route>
          )}
          {user && user.role === "Dean" && (
            <Route path="/facultyadmin" element={<Facultyadmin />}></Route>
          )}
          {user && user.role === "Dean" && (
            <Route
              path="/publicationadmin"
              element={<Publicationsadmin />}
            ></Route>
          )}
          {user && user.role === "Dean" && (
            <Route path="/reportadmin" element={<Reportadmin />}></Route>
          )}
          {user && user.role === "Dean" && (
            <Route path="/hodlist" element={<HodList />}></Route>
          )}
          <Route path="/dashboardadmin" element={<Dashboardadmin />}></Route>
          <Route path="/viewdean" element={<ViewDean />}></Route>

          {user && user.role === "HOD" && (
            <Route path="/dashhod" element={<Dashhod />}></Route>
          )}
          {user && user.role === "HOD" && (
            <Route path="/homehod" element={<Homehod />}></Route>
          )}
          {user && user.role === "HOD" && (
            <Route path="/profilehod" element={<Profilehod />}></Route>
          )}
          {user && user.role === "HOD" && (
            <Route path="/facultyhod" element={<Facultyhod />}></Route>
          )}
          {user && user.role === "HOD" && (
            <Route path="/publicationhod" element={<Publicationshod />}></Route>
          )}
          <Route path="/dashboardhod" element={<Dashboardhod />}></Route>
          <Route path="/viewhod" element={<HodView />}></Route>

          {user && user.role === "Faculty" && (
            <Route path="/dashfaculty" element={<Dashfaculty />}></Route>
          )}
          {user && user.role === "Faculty" && (
            <Route path="/homefaculty" element={<Homefaculty />}></Route>
          )}
          {user && user.role === "Faculty" && (
            <Route path="/profilefaculty" element={<Profilefaculty />}></Route>
          )}
          {user && user.role === "Faculty" && (
            <Route
              path="/publicationfaculty"
              element={<Publicationsfaculty />}
            ></Route>
          )}
          {user && user.role === "HOD" && (
            <Route
              path="/FacultyReportHOD/:userId"
              element={<FacultyReportHOD />}
            ></Route>
          )}
          <Route path="/facultyview" element={<FacultyView />}></Route>

          <Route
            path="/dashboardfaculty"
            element={<Dashboardfaculty />}
          ></Route>

          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
