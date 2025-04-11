import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import React from "react";
import Navbar from './components/Navbar';
import Nav from './components/Nav';
import Home from './components/Home';
import AccHome from './components/AccHome';
import Login from './components/Login';
import SelfTest from './components/SelfTest';
import User from './components/User'
import Vac from './components/Vac';
import Register from './components/Register';
import AltHome from './components/AltHome';
import NotFound from './components/NotFound'

function App() {
  return (
     <>
     <Router>
      <Routes>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/AccHome" element={<AccHome/>}/>
      <Route path="/AccHome/Test" element={<SelfTest/>}/>
      <Route path="/AccHome/Vac" element={<Vac/>}/>
      <Route path="/AccHome/User" element={<User/>}/>
      <Route path="/AltHome" element={<AltHome/>}/>
      <Route path="*" element={<NotFound/>}/>

      </Routes>
     </Router>
     {/* <User/> */}
     {/* <Register/> */}
     {/* <Router>
     <Navbar title="MY-APP" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className="container my-3">
        <Routes>
            <Route exact path="/about" element={<About />}>
            </Route> */}
            {/* <Route path="/users">
              <Users />
            </Route>
             <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
        </Routes>
     </div>
     </Router> */}
     </>
  
  );
}

export default App;
