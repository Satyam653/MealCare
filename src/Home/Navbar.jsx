import React from 'react';
import "./Navbar.css"
import {Link} from "react-router-dom";
export default function Navbar() {
    return (
        <>

            <nav className="navbar navbar-expand-lg border-bottom"
            style = {{backgroundColor : "#ECECEC" , height : "5rem",position : "sticky", boxShadow : "2px 2px 8px black"}}>
                <Link className="navbar-brand active" to="/" style = {{color : "#F93822", marginLeft : "2rem"}}
                ><img src = "src/assets/icon.jpg" style = {{width : "15%", height : "30%"}}/><h3><span class="icon">MealCare</span></h3></Link>
                <button className="navbar-toggler "
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon mb-0 h1"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" >
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <div className = "home">
                           <Link className="nav-link mr-sm-2"
                            to="/patientdetails" 
                            style = {{color : "#F93822"}}
                            >Add New Patients<span className="sr-only ">(current)</span></Link>
                            </div>
                        </li>
                        <li className="nav-item active">
                            <div className = "current">
                        
                            <Link className="nav-link" 
                            to="/signup" 
                            style = {{color : "#F93822"}}
                            >Staff Signup<span className="sr-only">(current)</span></Link></div>
                         
                        </li>
                        
                     
                      
                    </ul>
                </div>
            </nav>
        </>
    )
}