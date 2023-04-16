import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../css/navbar.css';

export default function Navbar() {
  const currentPath = useLocation().pathname;

  return (
    <>
      <header className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-white mx-4 my-3">
          <div className="navbar-brand">
            <pre className="title-font mb-0 d-flex">
              <p className="mb-0">Piyawit Teeraprasert</p>
              <p className="mb-0 mx-2 mx-lg-3">|</p>
              <p className="mb-0">Redefining business through codes</p>
            </pre>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto letter-space navbar-menu">
              {/* <li className="nav-item">
                <Link to="/" className={`nav-link mx-2 px-0 ${currentPath === '/'? 'active-link': ''}`}>
                  Home{" "}
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to="/about" className={`nav-link mx-2 px-0 ${currentPath === '/about'? 'active-link': ''}`}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio" className={`nav-link mx-2 px-0 ${currentPath === '/portfolio'? 'active-link': ''}`}>
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className={`nav-link mx-2 px-0 ${currentPath === '/contact'? 'active-link': ''}`}>
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/resume" className={`nav-link mx-2 px-0 ${currentPath === '/resume'? 'active-link': ''}`}>
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
