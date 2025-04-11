import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
   import Axios from "axios"; 

export default function User() {
 
        const [details,setDetails] = useState([])
        useEffect(() => {
            Axios.get("http://localhost:3003/AccHome/User")
            .then((response) => {
                setDetails(response.data[0]);
                console.log(response.data[0]);
                
            })
            
        },[]);

        const [emailid,setEmailId] = useState('')
        const [password,setPassword] = useState('')
        const [vacc_status,setVaccStatus] = useState('')
        const [covid_status,setCovidStatus] = useState('')

        const handleSubmit = async(e) => {
            //alert('Successfully registered');
            //fetch('http://localhost:5001/store-data', {
              //method: 'POST',
              // We convert the React state to JSON and send it as the POST body
              //body: JSON.stringify(this.state)
            //}).then(function(response) {
              //console.log(response)
              //return response.json();
           // });
            //event.preventDefault();
             e.preventDefault();
            await Axios.post('http://192.168.51.84:3003/AccHome/User', {
              emailid: emailid,
              vacc_status: vacc_status,
              covid_status:covid_status 
              }).then((response) => {
              //console.log("Hello World!");
            });
            //history.push("/");
          }
        
    return (
    <>
    <section className="bnm vh-100" style={{background: "linear-gradient(to right, pink, rgb(224,225,255))"}}>
    <div className="container " style={{marginTop: "50px",background: "linear-gradient(to right, pink, rgb(224,225,255))"}}>
      <div className="row">
        <div className="col-lg-8">
            <div className="card z-depth-3">
                <div className="card-body">
                <Link className="d-grid" to="/AccHome">
                <div className="d-grid">
                    <button className="btn btn-info" type="button">Return to Home Page</button>
                </div>
                </Link>
                    <ul className="nav nav-pills mb-3" id="pills-tab2" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button
                        className="nav-link active"
                        id="pills-profile-tab2"
                        data-mdb-toggle="pill"
                        data-mdb-target="#pills-profile2"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="true"
                        >
                        <i className="fas fa-user-cog mx-1"></i>   
                        Profile
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                        className="nav-link"
                        id="pills-contact-tab2"
                        data-mdb-toggle="pill"
                        data-mdb-target="#pills-contact2"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                        >
                        <i className="fas fa-user-edit mx-1"></i>
                        Edit
                        </button>
                    </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent2">
                    <div className="tab-pane fade show active" id="pills-profile2" role="tabpanel" aria-labelledby="pills-profile-tab2">
                      <div className="tab-pane" id="profile">
                       
                        <h4 className="mb-3 text-center">User Profile</h4>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3"><h6 className="mb-0">Full Name</h6></div>
                                    <div className="col-sm-9 text-secondary"> {details.Name}</div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3"><h6 className="mb-0">Gender</h6></div>
                                    <div className="col-sm-9 text-secondary">{details.Gender }</div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3"><h6 className="mb-0">Email</h6></div>
                                    <div className="col-sm-9 text-secondary">{details.EmailId} </div>
                                </div>
                                <hr/>
                                {/* <div className="row">
                                    <div className="col-sm-3"><h6 className="mb-0">Phone Number</h6></div>
                                    <div className="col-sm-9 text-secondary">(320) 380-4539</div>
                                </div>
                                <hr/> */}
                                <div className="row">
                                    <div className="col-sm-3"><h6 className="mb-0">Age</h6></div>
                                    <div className="col-sm-9 text-secondary">{details.Age }</div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3"><h6 className="mb-0">Covid Status</h6></div>
                                    <div className="col-sm-9 text-secondary">{details.CovidStatus}</div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3"><h6 className="mb-0">Vaccination Status</h6></div>
                                    <div className="col-sm-9 text-secondary">{details.VaccStatus}</div>
                                </div>
                                <hr/>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-contact2" role="tabpanel" aria-labelledby="pills-contact-tab2">
                    <div className="tab-pane" id="edit">
                        <h4 className="mb-5 text-center">Edit Profile</h4>
                        <form>
                            {/* <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label">Full Name</label>
                                <div className="col-lg-9">
                                    <input className="form-control" type="text" placeholder="Mark"/>
                                </div>
                            </div> */}
                            {/* <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label">Email</label>
                                <div className="col-lg-9">
                                    <input className="form-control" type="email" placeholder="mark@example.com"/>
                                </div>
                            </div> */}
                            {/* <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label">Phone Number </label>
                                <div className="col-lg-9">
                                    <input className="form-control" type="text" placeholder=""/>
                                </div>
                            </div> */}
                            {/* <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label">Date of Birth</label>
                                <div className="col-lg-9">
                                <input type="date" className="form-control" id="Username" aria-describedby="Username"/>
                                </div>
                            </div> */}
                            <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label">Covid Status</label>
                                <div className="col-lg-9">
                                    <input className="form-control" type="text" placeholder="" value={covid_status} onChange={(e) => {
              setCovidStatus(e.target.value) }}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label">Vaccination Status</label>
                                <div className="col-lg-9">
                                    <input className="form-control" type="text" placeholder="" value={vacc_status} onChange={(e) => {
              setVaccStatus(e.target.value) }}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label">Email Id</label>
                                <div className="col-lg-9">
                                    <input className="form-control" type="text" placeholder="jhonsanmark" value={emailid} onChange={(e) => {
              setEmailId(e.target.value) }}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label">Password</label>
                                <div className="col-lg-9">
                                    <input className="form-control" type="password" value={password} onChange={(e) => {
              setPassword(e.target.value) }}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label"></label>
                                <div className="col-lg-9">
                                    <Link to="/AccHome">
                                    <input type="reset" className="btn btn-warning mx-3" value="Cancel"/>
                                    <input type="button" className="btn btn-success" value="Save Changes" onClick={handleSubmit}/>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
      </div>
        
    </div>
</div>
</section>
    </>
  )
}
