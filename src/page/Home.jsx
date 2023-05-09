import React from "react";
import Navbar from "../component/Navbar";
import About from "../component/About";
import Footer from "../component/Footer";
import Banner from "../component/Banner";
import Contact from "../component/Contact";
import Portfolio from "../component/Portfolio";
import Resume from "../component/Resume"
import { BrowserRouter as Router, HashRouter, Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <Router basename="/personal-portfolio-spa">
        <Navbar />
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/resume" element={<Resume/>} />
          {/* <Route path="*" element={<404/>} /> */}
        </Routes>
        <Footer />
    </Router>
  );
}
