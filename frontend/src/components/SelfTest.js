import React from 'react';
import { useState } from 'react';
import Axios from 'axios';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

export default function SelfTest() {
  const [emailid,setEmailId] = useState('')
  const [internationaltravel,setInternationalTravel] = useState('')
    const [domestictravel,setDomesticTravel] = useState('')
    const [closecontact,setCloseContact] = useState('')
    const [temperature,setTemperature] = useState('')
    const [fatigue,setFatigue] = useState('No')
    const [limb_pain,setLimbPain] = useState('No')
    const [sneezing,setSneezing] = useState('No')
    const [cough,setCough] = useState('No')
    const [none_symptoms,setNoneSymptoms] = useState('No')
    const [lung_disease,setLungDisease] = useState('No')
    const [diabetes,setDiabetes] = useState('No')
    const [heart_disease,setHeartDisease] = useState('No')
    const [obesity,setObesity] = useState('No')
    const [none_complications,setNoneComplications] = useState('No')

    const [testResult,setTestResult] = useState('')

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
      await Axios.post('http://192.168.51.84:3003/self-test', {
        emailid: emailid,
        internationaltravel: internationaltravel,
        domestictravel: domestictravel, 
        closecontact:closecontact,
        temperature:temperature,
        fatigue: fatigue,
        limb_pain:limb_pain,
        sneezing:sneezing,
        cough:cough,
        none_symptoms:none_symptoms,
        lung_disease:lung_disease,
        diabetes:diabetes,
        heart_disease:heart_disease,
        obesity:obesity,
        none_complications:none_complications
        }).then((response) => {
          setTestResult(response.data.message);

      });
      //history.push("/");
    }
    
    return (
    <>
    <div className='self'>
    <h1 className='text-center my-5' style={{color:"rgb(6, 222, 241)"}}>Self Assessment Test</h1>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">

        <hr className="divider-horizontal" />
  
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">1.Enter your Email:</h5>
            <input type="email" id="inputMail" className="form-control my-3" aria-describedby="MailHelpInline" placeholder="abc@iith.ac.in" value = {emailid} onChange={(e) => {
              setEmailId(e.target.value) }}/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
        </div>

          <hr className="divider-horizontal" />
  
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">2.Enter your age:</h5>
                <input type="text" id="inputAge" className="form-control my-3" aria-describedby="AgeHelpInline" placeholder="Eg: 18,19..."/>
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
                <h5 className="card-title">4.Have you been travelling internationally in the past month?</h5>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="question[1][reply]" id="radioExample1" value = "Yes" onChange={(e) => {
              setInternationalTravel(e.target.value) }}/>
                  <label className="form-check-label" htmlFor="radioExample1">Yes</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="question[1][reply]" id="radioExample1" value = "No" onChange={(e) => {
              setInternationalTravel(e.target.value) }}/>
                  <label className="form-check-label" htmlFor="radioExample1">No</label>
                </div>
              </div>
            </div>

          <hr className="divider-horizontal" />
  
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">5.Have you been travelling domestically in the past two weeks?</h5>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="question[2][reply]" id="radioExample1" value = "Yes" onChange={(e) => {
              setDomesticTravel(e.target.value) }}/>
                  <label className="form-check-label" htmlFor="radioExample1">Yes</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="question[2][reply]" id="radioExample1" value = "No" onChange={(e) => {
              setDomesticTravel(e.target.value) }}/>
                  <label className="form-check-label" htmlFor="radioExample1">No</label>
                </div>
              </div>
            </div>

          <hr className="divider-horizontal" />
  
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">6.Have you had close contact with a confirmed case?</h5>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="question[3][reply]" id="radioExample1" value = "Yes" onChange={(e) => {
              setCloseContact(e.target.value) }}/>
                  <label className="form-check-label" htmlFor="radioExample1">Yes</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="question[3][reply]" id="radioExample1" value = "No" onChange={(e) => {
              setCloseContact(e.target.value) }}/>
                  <label className="form-check-label" htmlFor="radioExample1">No</label>
                </div>
              </div>
            </div>

          <hr className="divider-horizontal" />
  
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">7.Please let us know your current body temperature in degree Fahrenheit (Normal body temperature is 98.6°F):</h5>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="question[4][reply]" id="radioExample1" value = "Normal(96 -98.6)" onChange={(e) => {
              setTemperature(e.target.value) }}/>
                  <label className="form-check-label" htmlFor="radioExample1">Normal(96 -98.6)</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="question[4][reply]" id="radioExample1" value = "Mild fever(98.6-100)" onChange={(e) => {
              setTemperature(e.target.value) }}/>
                  <label className="form-check-label" htmlFor="radioExample1">Mild fever(98.6-100)</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="question[4][reply]" id="radioExample1" value = "Medium fever(101-102)" onChange={(e) => {
              setTemperature(e.target.value) }}/>
                  <label className="form-check-label" htmlFor="radioExample1">Medium fever(101-102)</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="question[4][reply]" id="radioExample1" value = "High fever(103-104)" onChange={(e) => {
              setTemperature(e.target.value) }}/>
                  <label className="form-check-label" htmlFor="radioExample1">High fever(103-104)</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="question[4][reply]" id="radioExample1" value = "Very high fever(more than 104)" onChange={(e) => {
              setTemperature(e.target.value) }}/>
                  <label className="form-check-label" htmlFor="radioExample1">Very high fever(more than 104)</label>
                </div>
              </div>
            </div>

            <hr className="divider-horizontal" />
  
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">8.Are you experiencing any of the symptoms below ? (select all those applicable)</h5>
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="Yes" id="flexCheckDefault" onChange={(e) => {
              setFatigue(e.target.value) }}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">Fatigue/Tiredness/Weakness</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="Yes" id="flexCheckDefault2" onChange={(e) => {
              setLimbPain(e.target.value) }}/>
                <label className="form-check-label" htmlFor="flexCheckDefault2"> Limb Pain</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value=" Yes" id="flexCheckDefault3" onChange={(e) => {
              setSneezing(e.target.value) }}/>
                <label className="form-check-label" htmlFor="flexCheckDefault3"> Chills/Sneezing/sore throat</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="Yes" id="flexCheckDefault3" onChange={(e) => {
              setCough(e.target.value) }}/>
                <label className="form-check-label" htmlFor="flexCheckDefault3">Persistent Cough</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="Yes" id="flexCheckDefault3" onChange={(e) => {
              setNoneSymptoms(e.target.value) }}/>
                <label className="form-check-label" htmlFor="flexCheckDefault3">None</label>
              </div>
              </div>
            </div>

            <hr className="divider-horizontal" />
  
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">9.Do you have a history of any of these complications?(select all those applicable)</h5>
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="Yes" id="flexCheckDefault" onChange={(e) => {
              setLungDisease(e.target.value) }}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">Chronic lung disease</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="Yes" id="flexCheckDefault2" onChange={(e) => {
              setDiabetes(e.target.value) }}/>
                <label className="form-check-label" htmlFor="flexCheckDefault2">Diabetes</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="Yes" id="flexCheckDefault3" onChange={(e) => {
              setHeartDisease(e.target.value) }}/>
                <label className="form-check-label" htmlFor="flexCheckDefault3">Heart Disease</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="Yes" id="flexCheckDefault3" onChange={(e) => {
              setObesity(e.target.value) }}/>
                <label className="form-check-label" htmlFor="flexCheckDefault3">Obesity</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="Yes" id="flexCheckDefault3" onChange={(e) => {
              setNoneComplications(e.target.value) }}/>
                <label className="form-check-label" htmlFor="flexCheckDefault3">None</label>
              </div>
              </div>
            </div>

            <hr className="divider-horizontal" />

            <div className="card-footer text-end">
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
      </div>
    </div>
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">Test Results</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  {testResult}
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
