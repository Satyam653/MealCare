import { createRoot } from 'react-dom/client'

import {BrowserRouter,Routes,Route} from "react-router-dom";
import App from './App.jsx'
import Signup from './signup/Signup.jsx'
import Patient from './PatientDetails/Patient.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   
    <Routes>
      <Route path = "/" element = {<App/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/patientdetails" element={<Patient/>}></Route>
    </Routes>
  </BrowserRouter>
  
)
