import React from 'react'
import Nav from './Nav'
import Stats from './Stats'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

export default function AccHome() {
  return (
    <>
    <Nav/>
    
    {/* <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
        <img src="https://iith.ac.in/assets/images/slider/banner1.jpg" className="d-block w-100" alt=""/>
        <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
        </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
        <img src="https://iith.ac.in/assets/images/slider/iith-motiv-4.jpg" className="d-block w-100" alt=""/>
        <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
        </div>
        </div>
        <div className="carousel-item">
        <img src="https://iith.ac.in/assets/images/slider/banner9.jpg" className="d-block w-100" alt=""/>
        <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
        </div>
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
    </div>  */}

    <div id='to-A'>
    <section className="covid">
    {/* <div className="divider d-flex align-items-center my-4">
        <p className="text-center fw-bolder mx-3 mb-0">STATS</p>
    </div>
    <h1> COVID-19 STATS</h1>
    <p>This shows the covid stats till date</p> */}

    {/* <div className="row">
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
    </div> */}
    </section>
    <Stats/>
    </div>

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
    </>
  )
}