import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from './Components/Pages/SignIn';

function Routing() {
  return (
    <Router>

            <Routes>
                    <Route path="/SignIn" element={<SignIn/>}/>
            </Routes>
        
    </Router>
   
  )
}

export default Routing
