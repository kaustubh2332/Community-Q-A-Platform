import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  
export default function AltHome() {
  return (
    <>
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <ul className="navbar-nav">
            
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
                        <Link className="dropdown-item" to="/Home">Logout</Link>
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
            
                

        <ul class="nav nav-tabs nav-fill mb-3" id="ex1" role="tablist">
        <li class="nav-item" role="presentation">
            <a
            class="nav-link active"
            id="ex3-tab-1"
            data-mdb-toggle="tab"
            href="#ex3-tabs-1"
            role="tab"
            aria-controls="ex3-tabs-1"
            aria-selected="true"
            ><h6>Stats</h6></a
            >
        </li>
        <li class="nav-item" role="presentation">
            <a
            class="nav-link"
            id="ex3-tab-2"
            data-mdb-toggle="tab"
            href="#ex3-tabs-2"
            role="tab"
            aria-controls="ex3-tabs-2"
            aria-selected="false"
            ><h6>Self Assessment</h6></a
            >
        </li>
        <li class="nav-item" role="presentation">
            <a
            class="nav-link"
            id="ex3-tab-3"
            data-mdb-toggle="tab"
            href="#ex3-tabs-3"
            role="tab"
            aria-controls="ex3-tabs-3"
            aria-selected="false"
            ><h6>Vaccination</h6></a
            >
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

            <div class="tab-content" id="ex2-content">
        <div
            class="tab-pane fade show active"
            id="ex3-tabs-1"
            role="tabpanel"
            aria-labelledby="ex3-tab-1"
        >
            <div id='to-A'>
            <section className="covid">
            <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bolder mx-3 mb-0">STATS</p>
            </div>
            <h1> COVID-19 STATS</h1>
            <p>This shows the covid stats till date</p>

            <div className="row">
                <div className="totalCases-col">
                    <h3>Total Cases</h3>
                    <h2>4,500</h2>
                </div>
                <div className="active-col">
                    <h3>Active</h3>
                    <h2>500</h2>
                </div>
                <div className="recovered-col">
                    <h3>Recovered</h3>
                    <h2>4000</h2>
                </div>
            </div>
            </section>
            {/* <Chart/> */}
            </div>
        </div>
        <div
            class="tab-pane fade"
            id="ex3-tabs-2"
            role="tabpanel"
            aria-labelledby="ex3-tab-2"
        >
            <div id='to-B'>
            <div className="divider d-flex align-items-center my-4" style={{width:"80%", marginLeft: "auto",marginRight:"auto"}}>
                <p className="text-center fw-bolder mx-3 mb-0">SELF ASSESSMENT</p>
            </div>

            <div className="how-section1">
                    <div className="row">
                        <div className="col-md-6 how-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2UyLthT6Rje6xtaf58WK_RlvXcFmseionZhjkh9l481-QTYRz_6wrXBT8u3p6oEdRZaw&usqp=CAU" className=" img-fluid" alt=""/>
                        </div>
                        <div className="col-md-6">
                            <h4>Why self assessment test needed?</h4>
                                        <h4 className="subheading">Take this self-assessment if you were exposed to COVID-19 (novel coronavirus), have symptoms or for screening.</h4>
                        <p className="text-muted">You will get a recommendation on what to do next.
                        The self-assessment is only meant as an aid and cannot diagnose you. Anyone who is sick or has any symptoms of illness, including those not listed in this screening tool, should stay home and seek assessment from a health care provider if needed. Consult a health care provider if you have medical questions.</p>
                        <Link to="/AccHome/Test">
                            <button type="button" className="btn btn-info btn-rounded btn-lg">Take Test</button>
                        </Link>

                        </div>
                    </div>       
            </div>
            </div>
        </div>
        <div
            class="tab-pane fade"
            id="ex3-tabs-3"
            role="tabpanel"
            aria-labelledby="ex3-tab-3"
        >
            <div id='to-C'>
            <div className="divider d-flex align-items-center my-4" style={{width:"80%", marginLeft: "auto",marginRight:"auto"}}>
                <p className="text-center fw-bolder mx-3 mb-0">VACCINATION</p>
            </div>

            <div className="how-section1">
                    <div className="row">
                        
                        <div className="col-md-6">
                            <h4>Why Vaccination needed?</h4>
                                        <h4 className="subheading">Vaccines are the most effective way to prevent infectious diseases such as COVID-19 (novel coronavirus).</h4>
                        <p className="text-muted">Vaccination is the most important thing we can do to protect ourselves and our children against ill health. They prevent up to 3 million deaths worldwide every year.</p>
                        <p className="text-muted">Vaccines teach your immune system how to create antibodies that protect you from diseases.
                        It's much safer for your immune system to learn this through vaccination than by catching the diseases and treating them.
                        Once your immune system knows how to fight a disease, it can often protect you for many years.</p>
                        <Link to="/AccHome/Vac">
                            <button type="button" className="btn btn-info btn-rounded btn-lg">Vaccination Details</button>
                        </Link>

                        </div>

                        <div className="col-md-6 how-img">
                            <img src="https://img.freepik.com/free-vector/flat-hand-drawn-doctor-injecting-vaccine-patient_23-2148855954.jpg?t=st=1656660208~exp=1656660808~hmac=0d412280d68bb144b7a70eacbfaa7acc327cd6b160262e9501b1224807023f27&w=740" className=" img-fluid" alt=""/>
                        </div>
                    </div>       
            </div>
            </div>
        </div>
        </div> 
    </>
  )
}
