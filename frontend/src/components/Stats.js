import React from 'react'
import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2";
import Axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Stats () {

  const [stats,setStats] = useState(0)
        useEffect(() => {
            Axios.get("http://localhost:3003/Stats")
            .then((response) => {
              var result = JSON.stringify(response);
              var json = JSON.parse(result);
              console.log(json.data[0]);
              setStats(json.data[0]);
              //console.log(response.data);
                
            })
            
        },[]);

        const [recoveredStats,setRecoveredStats] = useState(0)
        useEffect(() => {
            Axios.get("http://localhost:3003/RecoveredStats")
            .then((response) => {
              //var result = JSON.stringify(response);
              //var json = JSON.parse(result);
              //console.log(json.data[0]);
              if(undefined) {
                setRecoveredStats(0);
              }
              else {
                setRecoveredStats(response.data.value);
                console.log(response.data.value);
              }
              
              //console.log(response.data);
                
            })
            
        },[]);

  return (
    <>
      <div className="App">
      <div className="container my-3 py-5">
      <div className="divider d-flex align-items-center my-4">
        <p className="text-center fw-bolder mx-3 mb-0">STATS</p>
    </div>
    <h1> COVID-19 STATS</h1>
    <p>This shows the covid stats till date</p>
      <div className="row">
        <div className="col-md-3">
          <div className="cov card" style={{width:"18rem",backgroundColor: '#5c4827',}}>
            <div className="card-body text-light">
              <h5 className="card-title">Total Cases</h5>
              <h4>{3500 + stats.count + recoveredStats}</h4>
              <p className="card-text text-light">Total number of affected people by Covid-19</p>
            </div>
          </div>       
        </div>
        <div className="col-md-3">
          <div className="cov card" style={{width:"18rem", backgroundColor:"#b34dee"}}>
            <div className="card-body text-light">
              <h5 className="card-title">Active</h5>
              <h4>{500 + stats.count}</h4>
              <p className="card-text text-light">Number of active cases of Covid-19</p>
            </div>
          </div>    
        </div>
        <div className="col-md-3">
          <div className="cov card" style={{width:"18rem", backgroundColor:"#54f15f"}}>
            <div className="card-body text-light">
              <h5 className="card-title">Recovered</h5>
              <h4>{3000 + recoveredStats}</h4>
              <p className="card-text text-light">Number of recoveries from Covid-19</p>
            </div>
          </div>    
        </div>
        <div className="col-md-3">
          <div className="cov card" style={{width:"18rem",backgroundColor:"#f15341"}}>
            <div className="card-body text-light">
              <h5 className="card-title">Deaths</h5>
              <h4>50</h4>
              <p className="card-text text-light">Number of deaths caused by Covid-19</p>
            </div>
          </div>    
        </div>
      </div>
    </div>
        <h1>BAR CHART</h1>
        <div className='StatsBar' style={{ maxWidth: "650px", alignContent: "center" }}>
          <Bar
            data={{
              // Name of the variables on x-axies for each bar
              labels: ["Active", "Recovered", "Deaths"],
              datasets: [
                {
                  // Label for bars
                  label: "total count/value",
                  // Data or value of your each variable
                  data: [500,3000,50],
                  // Color of each bar
                  backgroundColor: ["#b34dee", "#54f15f", "#f15341"],
                  // Border color of each bar
                  borderColor: ["#b34dee", "#54f15f", "#f15341"],
                  borderWidth: 0.5,
                },
              ],
            }}
            // Height of graph
            height={400}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      // The y-axis value will start from zero
                      beginAtZero: true,
                    },
                  },
                ],
              },
              legend: {
                labels: {
                  fontSize: 15,
                },
              },
            }}
          />
        </div>
      </div>
    </>
  )
}
