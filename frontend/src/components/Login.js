//const express = require('express');
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios, { Axios } from "axios";
//import Axios from "axios";
//import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";

//const feedbackDisplay = document.querySelector()
//const cors = require('cors');
//const app = express();
//app.use(cors());

export default function Login(props) {

  const [emailid, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus,setLoginStatus] = useState('');
  const [buttonstatus,setButtonStatus] = useState('');
  const [link,setLink] = useState('');

  //axios.defaults.withCredentials = true;

  const onLogin = async (e) => {
    e.preventDefault();
      await axios.post('http://192.168.51.84:3003/Login', {
        emailid: emailid,
        password: password
       }).then((response) => {
        console.log(response);
        /*if(response.data.redirect){
          //setLoginStatus(response.data.redirect);
          //console.log(response.redirect);
          //setLoginStatus(response.data.redirect);
          //console.log(response.data.redirect);
          setLoginStatus
        }*/
        console.log(response.data.message);
        var result = JSON.stringify(response.data);
        var json = JSON.parse(result);
        console.log(json.message);
        //setLoginStatus(json.data[0]);
        if(json.message =='Login Successful') {
          
          setLoginStatus(json.message);
          console.log("HI");
         setButtonStatus("Login");
         setLink('/AccHome');
          
          
        }
        else if (json.message == 'Incorrect Password') {
          setLoginStatus(json.message);
          setButtonStatus("Try Again");
          setLink('/Login');
          
        }
        else {
          setLoginStatus(json.message);
          setButtonStatus("Try Again");
          setLink('/Login');
          
        }
     });
      
}

     /*useEffect(() => {
      Axios.get("http://192.168.51.84:3003/Login")
      .then((response) => {
        if(response.data.loggedIn==true) {
          setLoginStatus(response.data.redirect);
          console.log(response); 
        }
                 
      },[]);
    })*/
      //history("/");
  

return (
    <>

    <section className="vh-100">
      <div className="container-fluid h-custom">
        <h1 className='text-center my-5' style={{color:"rgb(6, 222, 241)"}}>Login Page</h1>
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="https://www.miraeassetmf.co.in/images/default-source/maq/registration.png?sfvrsn=aa71ff68_0"
              className="img-fluid" alt="Sample pic"/>
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form action='/Login' method='post' >
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign in with Google</p>
                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-google"></i>
                </button>

              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              <div className="form-floating mb-4">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={emailid}
                       onChange={(e) => setEmailId(e.target.value)}/>
                <label htmlFor="floatingInput">Email address</label>
              </div>

              <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Enter Password" value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <div className="d-flex justify-content-between align-items-center my-3">
               
                <div className="form-check mb-0">
                 
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                  
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">Forgot password?</a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                
              <button type="button" className="btn btn-primary btn-lg"
                  style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}} data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={onLogin} >Login</button>
                
                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/Register"
                    className="link-danger">Register</Link></p>
              </div>

            </form>
            
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
                {loginStatus}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <script>
                
                </script>
                <Link data-bs-dismiss="modal" to={link}>
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">{buttonstatus}</button>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
    
    </>
  )
}

//<Link to="/AccHome"></Link>
//{loginStatus}
//<h5>{loginStatus}</h5>


