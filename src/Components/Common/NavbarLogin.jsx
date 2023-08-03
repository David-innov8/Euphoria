import React from 'react'
import Logo from "../Assets/Logo.svg";
import { Link } from "react-router-dom";
import Search from "./Search";
import Button from './Button';
import Countries from './Countries';

function NavbarLogin() {
  return (
    <nav className="flex justify-between items-center py-8 px-20">
    <div className="logo ">
      <img src={Logo} alt="" />
    </div>
  

      <Search/>

      <Countries/>

    <div className="flex gap-x-4 h-">

        <Button name= "Login" link='/Login'/>
        <Button name= "Sign Up" link='/SignUp'/>
        
     
          
    </div>


 </nav>

  )
}

export default NavbarLogin
