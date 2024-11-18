/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route , Navigate} from "react-router-dom";
import Homepage from "../pages/HomePage";
import ContactPage from "../pages/Contact";
import About from "../pages/About";
import Editor from "../components/Editor"

import { Pricing } from "../pages/Pricing";
import Login from "../pages/Login";
import RegisterPage from "../pages/RegisterPage";

import {useAuth} from '../auth/AuthContext'

function AllRoutes() {
  const { user } = useAuth();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route
          path="/editor"
          element={user ? <Editor /> : <Navigate to="/" replace />}
        />
      
      </Routes>
    </div>
  );
}

export default AllRoutes;
