import React from 'react'
import Axios from 'axios';
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

export default function Vac() {

  const [emailid,setEmailId] = useState('')
  const [birth_date,setBirthDate] = useState('00-00-0000')
    const [vacc_status,setVaccStatus] = useState('')
    const [doses,setDoses] = useState('')
    const [date_dose1,setDateDose1] = useState('00-00-0000')
    const [date_dose2,setDateDose2] = useState('00-00-0000')
    const [duedate_dose2,setDueDateDose2] = useState('00-00-0000')
    const [certificate,setCertificate] = useState()

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
      await Axios.post('http://192.168.51.84:3003/AccHome/Vac', {
        emailid: emailid,
        birth_date: birth_date,
        vacc_status: vacc_status, 
        doses:doses,
        date_dose1:date_dose1,
        date_dose2: date_dose2,
        duedate_dose2:duedate_dose2,
        certificate:certificate
        }).then((response) => {
        //console.log("Hello World!");
      });
      //history.push("/");
    }
  
    return (
    <>
      <div className='self'>
    <h1 className='text-center my-5' style={{color:"rgb(6, 222, 241)"}}>Vaccination Details</h1>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">

            <hr className="divider-horizontal" />
  
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">1.Enter your email:</h5>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="abc@iith.ac.in" value={emailid} onChange={(e) => {
              setEmailId(e.target.value) }}/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
            </div>

            <hr className="divider-horizontal" />
  
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">2.Enter your Name:</h5>
                <input type="text" className="form-control" id="Username" aria-describedby="Username" placeholder="Along with surname"/>
              </div>
            </div>

            <hr className="divider-horizontal" />
  
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">3.Gender:</h5>
            <div className="form-check mb-2">
              <input className="form-check-input" type="radio" name="question[0][reply]" id="radioExample1" />
              <label className="form-check-label" htmlFor="radioExample1">Male</label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="radio" name="question[0][reply]" id="radioExample2" />
              <label className="form-check-label" htmlFor="radioExample2">Female</label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="radio" name="question[0][reply]" id="radioExample3" />
              <label className="form-check-label" htmlFor="radioExample3">Other</label>
            </div>
              </div>
            </div>

            <hr className="divider-horizontal" />
  
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">4.Date of Birth:</h5>
                <input type="date" className="form-control" id="Username" aria-describedby="Username" onChange={(e) => {
              setBirthDate(e.target.value) }}/>
              </div>
            </div>

            <hr className="divider-horizontal" />
  
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">5.Have you been Vaccinated?</h5>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="question[1][reply]" id="radioExample1" value="Yes" onChange={(e) => {
              setVaccStatus(e.target.value) }}/>
                  <label className="form-check-label" htmlFor="radioExample1">Yes</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="question[1][reply]" id="radioExample1" value = "No" onChange={(e) => {
              setVaccStatus(e.target.value) }}/>
                  <label className="form-check-label" htmlFor="radioExample1">No</label>
                </div>
              </div>
            </div>

            <hr className="divider-horizontal" />
  
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">6.Number of doses taken?</h5>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="question[2][reply]" id="radioExample1" value = "Single Dosed" onChange={(e) => {
              setDoses(e.target.value) }}/>
                  <label className="form-check-label" htmlFor="radioExample1">Only first dose</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="question[2][reply]" id="radioExample1" value = "Double Dosed" onChange={(e) => {
              setDoses(e.target.value) }}/>
                  <label className="form-check-label" htmlFor="radioExample1">Both doses</label>
                </div>
              </div>
            </div>

            <hr className="divider-horizontal" />
  
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">7.Date of first dose?</h5>
                  <input type="date" className="form-control" id="Username" aria-describedby="Username" onChange={(e) => {
              setDateDose1(e.target.value) }}/>
                </div>
              </div>

              <hr className="divider-horizontal" />
  
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">8.Date of Second dose if taken?</h5>
                  <input type="date" className="form-control" id="Username" aria-describedby="Username" onChange={(e) => {
              setDateDose2(e.target.value) }}/>
                </div>
              </div>

              <hr className="divider-horizontal" />
  
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">9.Due date of Second dose if only first dose is taken?</h5>
                  <input type="date" className="form-control" id="Username" aria-describedby="Username" onChange={(e) => {
              setDueDateDose2(e.target.value) }}/>
                </div>
              </div>

              <hr className="divider-horizontal" />
  
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">10.Upload your Vaccination certificates</h5>
                  <input className="form-control my-3" type="file" id="formFile" onChange={(e) => {
              setDueDateDose2(e.target.value) }}/>
                </div>
              </div>

              <hr className="divider-horizontal" />

            <div className="card-footer text-end">
              <Link to="/AccHome">
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={handleSubmit}>Submit</button>
              </Link>
            </div>
        </div>
      </div>
    </div>
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">Vaccination Details</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                      Your details have been stored Successfully!!!
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <Link data-bs-dismiss="modal" to="/AccHome">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Understood</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}
