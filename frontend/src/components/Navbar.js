import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Link as Link1, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  return (
    <>
    

      <nav className="navbar bg-light py-4">
        <div className="image">
            <img src="https://iith.ac.in/assets/images/logo.png" alt="logo"  className=" align-text-top mx-5"/>
        </div>
        <div className='title mx-auto'> <h1>Covid Managment and Data Tracking System</h1> </div>  
        <div className="image">
            <img src="https://cdn1.iconfinder.com/data/icons/investment-services/500/14-512.png" alt="covlogo"  className=" align-text-top mx-5"/>
        </div>
      </nav>

       
        {/* </div> */}
        {/* <div className='stick'>  */}
      <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="/"></a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Login">Login</Link>
              </li>
              <li className="nav-item">
                <Link1 className="but nav-link" to="to-a">Stats</Link1>
              </li>
              <li className="nav-item">
                <Link1 className="but nav-link" to="to-b">Introduction</Link1>
              </li>
              <li className="nav-item">
                <Link1 className="but nav-link" to="to-c">Helpline Numbers</Link1>
              </li>
              <li className="nav-item">
                <Link1 className="but nav-link" to="to-d">Contact us</Link1>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      {/* </div> */}
    </>
  )
}