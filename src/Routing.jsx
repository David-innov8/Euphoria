import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Pages/Home';
import SignIn from './Components/Pages/SignIn';
import SignUp from './Components/Pages/SignUp';
import ProtectedRoute from './Components/Routes/ProtectedRoute';

function Routing() {
  return (
    <Router>

            <Routes>
                <Route exact path="/" element={<SignIn/>}/>

              <Route element={<ProtectedRoute/>}>
              <Route exact path="/home" element={<Home/>}/>

              </Route>


                    <Route path="/SignUp" element={<SignUp/>}/>

            </Routes>
        
    </Router>
   
  )
}

export default Routing
