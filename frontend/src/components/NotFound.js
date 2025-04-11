import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function NotFound() {
  return (
    <>
    <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center row">
                <div className=" col-md-6 mt-5">
                    <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                    <p className="lead">
                        The page you’re looking for doesn’t exist.
                    </p>
                    <a href="/" className="btn btn-primary">Go Home</a>
                </div>
                 <div className=" col-md-6">
                    <img src="https://img.freepik.com/free-vector/400-error-bad-request-concept-illustration_114360-1933.jpg?t=st=1657552970~exp=1657553570~hmac=2a65e1821cf5fd19bfad22ef4dcd27f50e8589226505d6ab9478e6be9c435796&w=740" alt="404"
                        className="img-fluid"/>
                </div>
            </div>
        </div>

{/* <div
  className="bg-image"
  style={{
    backgroundImage:"url('https://st2.depositphotos.com/5689602/10144/v/950/depositphotos_101441070-stock-illustration-connection-error-404-abstract-background.jpg')",
    height: "100vh"}}>
      <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                <p className="lead">
                    The page you’re looking for doesn’t exist.
                  </p>
                <Link to="/" className="btn btn-primary">Go Home</Link>
            </div>
      </div>
</div> */}

      
    </>
  )
}
