import React from 'react';
import Navbar from '../Home/Navbar.jsx';
import Footer from '../Home/Footer.jsx'
export default function signup(){
    return(
        <>
        <Navbar/>
<div className="row mt-3">
    <h1 className="col-6 offset-2 mb-5">Signup on MealCare</h1>
    <div className="col-6 offset-2">
    <div className = "mb-3">
                <label for = "username" className = "form-label">Username</label>
                <input name = "username"id = "username" type="text" className = "form-control " required/>
           
                <div className = "valid-feedback">Looks good!</div>
            </div>
            <div className = "mb-5">
                <label for = "email" className = "form-label">Email</label>
                <input name = "email"id = "email" type="email" className = "form-control " required/>
           
            </div>
            <div className = "mb-5">
                <label for = "password" className = "form-label">Password</label>
                <input name = "password"id = "password" type="password" className = "form-control " required/>
           
                <div className = "valid-feedback">Looks good!</div>
            </div>
            <button className = "btn btn-success mb-5">SignUp</button>
        </div>
</div>
<Footer/>
        </>
    )
}