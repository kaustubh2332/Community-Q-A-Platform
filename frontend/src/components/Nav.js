import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import { Link as Link2, animateScroll as scroll } from "react-scroll";

export default function Nav() {
  return (
    <>
    <nav className="navbar sticky-top navbar-expand-sm navbar-light bg-light">
    <div className="container-fluid">
        <ul className="navbar-nav navbar-expand-sm">
     
        <li className="nav-item dropdown">
            <a
            className="nav-link dropdown-toggle d-flex align-items-center"
            href="/"
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
            >
            <i className="fas fa-user-circle fa-3x" ></i>
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li>
                <Link className="dropdown-item" to="/AccHome/User">My profile</Link>
            </li>
            <li>
                <Link className="dropdown-item" to="/">Logout</Link>
            </li>
            </ul>
        </li>
        </ul>

        <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="/navbarCenteredExample"
        aria-controls="navbarCenteredExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <i className="fas fa-bars"></i>
        </button>

        <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarCenteredExample"
        >
       
        <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
            <Link2 className="nav-link active" aria-current="page" to="to-A"><h5>Stats</h5></Link2>
            </li>
            <li className="nav-item">
            <Link2 className="nav-link" to="to-B"><h5>Self Assessment</h5></Link2>
            </li>
            <li className="nav-item">
            <Link2 className="nav-link" to="to-C"><h5>Vaccination</h5></Link2>
            </li>
           
        </ul>
     
        </div>

        <a className="navbar-brand" href="/AccHome">
        <img
            src="https://iith.ac.in/assets/images/horzlogolong.png"
            height="40"
            alt="MDB Logo"
            loading="lazy"
        />
        </a>
    </div>
    </nav>
    </>
  )
}
