import React from 'react';
import {Link} from "react-router-dom";
export default function AssignWork(){
    return(
        <>
        <div className = "container mt-4">
            <div className = "row">
                <div className = "col-6">
                    <img src = "src/assets/assigntask.jpg"
                    style = 
                    {{
                        width : "80%", 
                        height : "60%",
                        marginTop : "8rem",
                        border : "1px solid red",
                        borderRadius : "12px" 
                    }}
                    />
                </div> <div className = "col-6" style = 
                    {{
                        marginTop : "8rem"
                    }}
                    >
                  <h1>Tasks For Inner Pantry</h1>
                  <h4><b>Guidelines To Follow</b></h4>
                <div className = 'row'>
                <div className = "col-6">
                    <ul>
                    <li><p>Cleaning And Sanitation</p></li>
                    <li><p>Food Prepartion</p></li>
                    <li><p>Cautious Food Packaging</p></li>
                  </ul>
                </div><div className = "col-6"><ul>
                    <li><p>Packing of Food in pantry</p></li>
                    <li><p>Delivering to Patient</p></li>
                    <li><p>Again Cleaning and Sanitisation</p></li>
                </ul>
                </div>  
                </div>
                  <Link to="/assigntask"><button className = "btn btn-secondary mt-4 ml-5"  >Assign Task</button></Link>
                </div>
            </div>
        </div>

        </>
    )
}