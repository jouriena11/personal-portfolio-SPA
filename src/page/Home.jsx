import React from "react";
import Navbar from "../component/Navbar";
import About from "../component/About";
import Footer from "../component/Footer";
import Banner from "../component/Banner";
import Contact from "../component/Contact";
import Project from "../component/Project";
import Resume from "../component/Resume"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Project/>} />
          <Route path="/resume" element={<Resume/>} />
          {/* <Route path="*" element={<404/>} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
