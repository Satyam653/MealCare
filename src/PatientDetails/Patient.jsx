import React from 'react';
import Navbar from '../Home/Navbar.jsx'
import Footer from '../Home/Footer.jsx'
export default function signup() {
    return (
        <>
          <Navbar/> 
          
            <div className="row mt-3">
                <div className="col-8 offset-2">
                    <h3>Create new details</h3>
                    <div className="mb-3">
                        <label for="title" className="form-label">Patients Name</label>
                        <input name="listing[name]" placeholder="Name" type="text" className="form-control " required />

                        <div className="valid-feedback">Name Looks good!</div>
                    </div>
                    <div className="mb-3">
                        <label for="description" className="form-label">Disease Description</label>
                        <textarea name="listing[description]" className="form-control" required></textarea>
                        <div className="invalid-feedback">Enter details about disease</div>
                    </div>
                    <div className="row">
                        <div className="mb-3 col-md-4">

                            <label for="Room No." className="form-label">Room No.</label>
                            <input name="listing[room]"  className="form-control" required />
                            <div className="invalid-feedback">Enter a Valid Room</div>
                        </div>
                        <div className="mb-3 col-md-4">

                            <label for="Bed No." className="form-label">Bed No.</label>
                            <input name="listing[bed]"  className="form-control" required />
                            <div className="invalid-feedback">Enter a Valid Bed</div>
                        </div>
                        <div className="mb-3 col-md-4">

                            <label for="floor" className="form-label">Floor No.</label>
                            <input name="listing[price]"  className="form-control" required />
                            <div className="invalid-feedback">Enter a Valid Floor</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3 col-md-4">

                            <label for="age" className="form-label">Age</label>
                            <input name="listing[age]" placeholder="18" className="form-control" required />
                            <div className="invalid-feedback">Enter a Valid Age</div>
                        </div>
                        <div className="mb-3 col-md-4">

                            <label for="Contact Information" className="form-label">Contact Information</label>
                            <input name="listing[contact]" placeholder="Mobile No." className="form-control" required />
                            <div className="invalid-feedback">Enter a valid Mobile no.</div>
                        </div>
                        <div className="mb-3 col-md-4">
                        <label for="title" className="form-label">Gender</label>
                        <input name="listing[name]" placeholder="M/F/O" type="text" className="form-control " required />
                    </div>
                    </div>
                    <div>
                        <label for="address" className="form-label">Address</label>
                        <input name="listing[adress]" placeholder="" type="text" className="form-control" required />
                        <div className="invalid-feedback">Enter a Valid Location</div>
                    </div>

                    <button className="btn btn-danger add-btn mt-3 mb-5">Add</button>
                    <br /><br />
                </div>
            </div>
            <Footer/>
        </>
    )
}