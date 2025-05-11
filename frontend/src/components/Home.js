import React from 'react'
import Navbar from './Navbar'
import Stats from './Stats'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

export default function Home() {
  return (
    <>
    <Navbar/>
    <div id="carouselExampleDark" className="carousel carousel-dark slide my-4" data-bs-ride="carousel">
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

    <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
        <img src="https://iith.ac.in/assets/images/slider/iith-motiv-4.jpg" className="d-block w-100" alt=""/>
        </div>

        <div className="carousel-item" data-bs-interval="3000">
        <img src="https://iith.ac.in/assets/images/slider/banner1.jpg" className="d-block w-100" alt=""/>
        </div>
        
        <div className="carousel-item">
        <img src="https://iith.ac.in/assets/images/slider/banner9.jpg" className="d-block w-100" alt=""/>
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
    </div> 


    <div id="to-a">
        <Stats/>
    {/* <section className="covid">
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
    </section> */}
    </div>


    <div id="to-b">
    <div className="divider d-flex align-items-center my-4" style={{width:"80%", marginLeft: "auto",marginRight:"auto"}}>
        <p className="text-center fw-bolder mx-3 mb-0">How this works</p>
    </div>
        <div className="how-section1">
            <div className="row">
                <div className="col-md-6 how-img">
                    <img src="https://cdn.pixabay.com/photo/2016/06/13/15/07/presentation-1454403__340.png" className="rounded-circle img-fluid" alt=""/>
                                    </div>
                <div className="col-md-6">
                    <h4>Realtime Statistics</h4>
                                <h4 className="subheading">Know the COVID-19 status in the campus</h4>
                <p className="text-muted">Realtime Statistics are available on the website which shows Active cases, Recovered cases etc.
                                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h4>Helplines</h4>
                                <h4 className="subheading">Contains Emergency Helpline numbers</h4>
                                
                </div>
                <div className="col-md-6 how-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUuhLEE2whawVLHDHxclsRUhp-JcaOXeF3KtB8PkF3f_JqI_J7qiPORwqW7ld6s6VPv7o&usqp=CAU" className="rounded-circle img-fluid" alt=""/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 how-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2UyLthT6Rje6xtaf58WK_RlvXcFmseionZhjkh9l481-QTYRz_6wrXBT8u3p6oEdRZaw&usqp=CAU" className="rounded-circle img-fluid" alt=""/>
                </div>
                <div className="col-md-6">
                    <h4>Self-assessment Test</h4>
                                <h4 className="subheading">Evaluatre your risk of catching COVID-19 by answering simple questions</h4>
                                <p className="text-muted">The self assessment test result will help you in deciding whether you need self-isolation or quarantine.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h4>When should I get a test for COVID-19?</h4>
                                <h4 className="subheading">Anyone with symptoms should be tested, wherever possible.</h4>
                                <p className="text-muted">People who do not have symptoms but have had close contact with someone who is, or may be, infected may also consider testing – contact 
                                your local health guidelines and follow their guidance.  </p>
                                <p className="text-muted">
                                While a person is waiting for test results, they should remain isolated from others. Where testing capacity is limited, tests should first be done 
                                for those at higher risk of infection, such as health workers, and those at higher risk of severe illness such as older people, especially those 
                                living in seniors’ residences or long-term care facilities.</p>
                </div>
                <div className="col-md-6 how-img">
                    <img src="https://cdn.pixabay.com/photo/2020/04/29/07/54/coronavirus-5107715_1280.png" className="rounded-circle img-fluid" alt=""/>
                </div>
            </div>
        </div>
    </div>

    
    
    <div id="to-c">
    <div className="divider d-flex align-items-center my-4" style={{width:"80%", marginLeft: "auto",marginRight:"auto"}}>
        <p className="text-center fw-bolder mx-3 mb-0">HELPLINES</p>
    </div>

    <div className="container my-3">
      <div className="row">
        <div className="col-2">
            <div className="card" style={{width:"18rem"}}>
            <img src="https://d1uqii9w4uahg1.cloudfront.net/cdn/x/x@222b1690bd/smss52/smsimg32/pv/isignstockcontributors/iss_30788_02405.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Medical Emergency</h5>
                <p className="card-text">+91 xxxx xxx xxx</p>
            </div>
            </div>         
        </div>
        <div className="col-2">
            <div className="card" style={{width:"18rem"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXPkLw_jhWCqeYluMc9wxmUmdANGqitkaix3SWYfwKMwQeYq412ukztmYaW-BnMujPCls&usqp=CAU" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Hostel Helpline</h5>
                <p className="card-text">+91 xxxx xxx xxx</p>
            </div>
            </div>
        </div>
      </div>
    </div>
    </div>

    <div id="to-d">
    <div className="divider d-flex align-items-center my-4" style={{width:"80%", marginLeft: "auto",marginRight:"auto"}}>
        <p className="text-center fw-bolder mx-3 mb-0">CONTACT US</p>
    </div>
        <div className="p-5 text-center bg-image rounded-3" style={{
            backgroundImage: "url('https://wallpaperaccess.com/full/13322.jpg')",
            height: "400px"}}>
        <div className="mask" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
            <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
                <h1 className="mb-3">Website team</h1>
                <ul>
                    <li><h4 style={{fontFamily: "cursive"}}>Tejal Dattatraya Kulkarni -- cs21btech11058@iith.ac.in</h4></li>
                    <li><h4 style={{fontFamily: "cursive"}}>Gaikwad Kaustubh Nitin -- sm23mtech14003@iith.ac.in</h4></li>
                    <li><h4 style={{fontFamily: "cursive"}}>Bhargava Ram Rajulapati -- cs21btech11052@iith.ac.in</h4></li>
                </ul>
                <h4 className="mb-3">Click to Login...</h4>
                <Link className="btn btn-outline-light btn-lg" to="/Login" role="button" >Login</Link>
            </div>
            </div>
        </div>
        </div>
    </div>
    
    {/* <section className="campus">
        <h1>Our Global Campus</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, sunt. Rem nobis optio eius.</p>

        <div className="row">
            <div className="campus-col">
            <img src="images/TohokuUniversity.jpg" />
            <div className="layer">
                <h3>Tohoku University</h3>
            </div>
        </div>
        <div className="campus-col">
            <img src="images/HOKKAIDO UNIVERSITY.jpg" />
            <div className="layer">
                <h3>HOKKAIDO UNIVERSITY</h3>
            </div>
        </div>
        <div className="campus-col">
            <img src="images/RitsukimenUniversity.jpg" />
            <div className="layer">
                <h3>RitsukimenUniversity</h3>
            </div>
        </div>
        </div>
        </section> */}

{/* <section className="facilities">
    <h1>Our Facilities</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus.</p>

    <div className="facilities-col">
        <img src="images/library.png"/>
        <h3>library</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nostrum.</p>
    </div>
    <div className="facilities-col">
        <img src="images/basketball.png"/>
        <h3>playground</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nostrum.</p>
    </div>
    <div className="facilities-col">
        <img src="images/cafeteria.png" />
        <h3>cafeteria area</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nostrum.</p>
    </div>
</section> */}

{/* <section className="testimonals">
    <h1>what our students say</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, voluptatem.</p>

    <div  className="row">
        <div className="testimonals-col">
            <img src="images/user1.jpg"/>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptates nihil omnis. Amet ab dolore dolorum autem quis vitae reprehenderit et. Eum laudantium pariatur dolores ex, accusantium ab in recusandae.</p>
                <h3>Christine Berkley</h3>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                
            </div>
        </div>
        <div className="testimonals-col">
            <img src="images/user2.jpg"/>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptates nihil omnis. Amet ab dolore dolorum autem quis vitae reprehenderit et. Eum laudantium pariatur dolores ex, accusantium ab in recusandae.</p>
                <h3>David Bayer</h3>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
            </div>
        </div>
    </div>
</section> */}

{/* <section className="cta">
<h1>Enroll for our various online courdes anywhere form the world</h1>
<a href="" className="hero-btn">CONTACT US</a>
</section> */}


{/* <section className="footer">
    <h4>About Us</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odit exercitationem illum ducimus <br/> voluptatibus aspernatur excepturi commodi necessitatibus cupiditate?</p>

<div className="icons">
    <i className="fa fa-facebook"></i>
    <i className="fa fa-teitter"></i>
    <i className="fa fa-instagram"></i>
    <i className="fa fa-linkedin"></i>
</div>
<p>Made with <i className="fa fa-heart-o"></i> by Easy Tutorials</p>
</section> */}

    </>
  )
}
