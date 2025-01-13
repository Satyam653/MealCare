import React from 'react';
export default function Hero(){
    return(
        <>
        
            <div className = "container">
                <div className = "row">
                 
                    <img src = "src/assets/homeHero.png" style = 
                    {{
                        width : "80%", 
                        height : "50%",
                        marginTop : "5rem",
                        border : "1px solid red",
                        borderRadius : "12px",
                        marginLeft : "6.5rem"
                        }}/>

                   
                </div>
                <div style = {{textAlign : "center",marginTop : "2rem"}}>
                    <h1>Track Your Food</h1>
                    
                    <h5>Online Platform to keep check of diets of patients</h5>
                    
                    <button className = "btn btn-secondary">Track Patients Food</button>
                </div>
            </div>
       
        </>
    )
}