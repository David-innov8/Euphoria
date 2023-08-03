import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.svg";
import { AiOutlineHeart } from 'react-icons/ai'
import { BsPerson} from 'react-icons/bs'
import { CiShoppingCart} from 'react-icons/ci'
import Search from "./Search";


function Navbar() {
  return (
    <nav className="flex justify-between items-center py-8 px-20">
      <div className="logo ">
        <img src={Logo} alt="" />
      </div>
      <ul className="flex gap-x-10">
        <li className="text-2xl"><Link to='/'>Shop</Link></li>
        <li className="text-2xl"><Link to='/'>Men</Link></li>
        <li className="text-2xl"><Link to='/'>Women</Link></li>
        <li className="text-2xl"><Link to='/'>Combos</Link></li>
        <li className="text-2xl"><Link to='/'>Joggers</Link></li>
      </ul>

        <Search/>

      <div className="flex gap-x-4">
        <div className=" bg-[#F6F6F6] rounded-lg px-3 py-2 flex justify-center items-center">
        <AiOutlineHeart className="text-3xl "/>
        </div>
        <div className=" bg-[#8e4848] rounded-lg px-3 py-2 flex justify-center items-center">
        <BsPerson className="text-3xl"/>        </div>
        <div className=" bg-[#F6F6F6] rounded-lg px-3 py-2 flex justify-center items-center">
        <CiShoppingCart className="text-3xl"/>        </div>

          
       
            
      </div>


   </nav>
  );
}

export default Navbar;
