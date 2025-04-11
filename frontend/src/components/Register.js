import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Axios from 'axios';
import { useState } from 'react';

export default function Register() {
    const [Name,setName] = useState('')
    //const [lastname,setLastname] = useState('')
    const [gender,setGender] = useState('')
    const [age,setAge] = useState(0)
    const [emailid,setEmailid] = useState('')
    const [password,setPassword] = useState('')
    const [confirm_password,setConfirmPassword] = useState('')


    
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
      await Axios.post('http://192.168.51.84:3003/Register', {
        Name: Name,
        Gender:gender,
        Age:age,
        EmailId:emailid,
        Password:password,
        ConfirmPassword:confirm_password
      }).then((response) => {
        console.log("Hello World!");
      });
      //history.push("/");
    }
  
  return (
    <>
      <section className="vh-100" style={{backgroundColor: "#eee"}}>
        <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{borderRadius: "25px"}}>
                <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                        {/* <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p> */}

                        <form className="mx-1 mx-md-4">

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingInputName" placeholder="harry" value={Name}
                       onChange={(e) => setName(e.target.value)}/>
                                <label htmlFor="floatingInputName">Name</label>
                            </div>

                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={emailid}
                       onChange={(e) => setEmailid(e.target.value)}/>
                                <label htmlFor="floatingInput">Email address</label>
                            </div>

                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
                                <label htmlFor="floatingPassword">Password</label>
                            </div>

                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingRepPassword" placeholder="Password" value={confirm_password}
                       onChange={(e) => setConfirmPassword(e.target.value)}/>
                                <label htmlFor="floatingRepPassword">Repeat your password</label>
                            </div>

                        </div>

                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                            <h6 className="mb-0 me-4">Gender: </h6>

                            <div className="form-check form-check-inline mb-0 me-4">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                value="Female" 
                                onChange={(e) => setGender(e.target.value)}/>
                            <label className="form-check-label" htmlFor="femaleGender">Female</label>
                            </div>

                            <div className="form-check form-check-inline mb-0 me-4">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                value="Male" 
                                onChange={(e) => setGender(e.target.value)}/>
                            <label className="form-check-label" htmlFor="maleGender">Male</label>
                            </div>

                            <div className="form-check form-check-inline mb-0">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                                value="Other"
                                onChange={(e) => setGender(e.target.value)}/>
                            <label className="form-check-label" htmlFor="otherGender">Other</label>
                           </div>
                        </div>
                        
                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                            <h6 className="mb-0 me-4">Age: </h6>

                            <div className="form-check form-check-inline mb-0 me-4">
                            <input className="form-control" type="text" placeholder="Ex:18,19.." aria-label="default input example" 
                       onChange={(e) => setAge(e.target.value)}></input>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <Link to="/Login">
                              <button onClick={handleSubmit} type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Register</button>
                            </Link>
                        </div>

                        </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7  order-1 order-lg-2">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                        
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" alt="Sample image"/>

                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
     </section>

     <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Test Results</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                Registration Successful
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <script>
                
                </script>
                <Link data-bs-dismiss="modal" to="/Login">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Login</button>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
