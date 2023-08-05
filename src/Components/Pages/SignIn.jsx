import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import NavbarLogin from "../Common/NavbarLogin";
import Left from "../Assets/bert-b-rhNff6hB41s-unsplash 1.svg";
import Google from "../Assets/Google.svg";
import Twitter from "../Assets/twitter.svg";
import { auth } from "../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import {  NavLink, useNavigate } from "react-router-dom";


function SignIn() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
 
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const SignIn = (e) => {
    e.preventDefault();
    setError('')
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate('/home')
        console.log(user);
        // ...
      })
      .catch((error) => {
        setError("invalid email or password")
        console.log(error);
      });
  };

  return (
    <div>
      <NavbarLogin />

      <section className="flex">
        <div className="w-1/2 h-screen ">
          <img src={Left} alt="" className="object-cover w-full h-full" />
        </div>

        <div className="right w-1/2  h-screen py-5 px-20">
          <p className="">Sign In Page</p>

          <div className="border border-[#979595] rounded-lg flex justify-center py-2">
            <img src={Google} alt="" className="mr-2" />{" "}
            <p>Continue with Google</p>
          </div>
          <div className="border border-[#979595] rounded-lg flex justify-center py-2 my-4">
            <img src={Twitter} alt="" className="mr-2" />{" "}
            <p>Continue with Twitter</p>
          </div>

          <div className="flex items-center justify-center my-4">
            <div className="border-t border-gray-400 flex-grow"></div>
            <div className="mx-4 text-gray-500">OR</div>
            <div className="border-t border-gray-400 flex-grow"></div>
          </div>

          <form >
            <div className="flex flex-col ">
              <label>User name or email address</label>
              <input
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className=" h-9 border border-[#979595] rounded-lg"
              ></input>
            </div>
            <div className="flex flex-col ">
              <label>Password</label>
              <input
                type="password"
                
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" h-9 border border-[#979595] rounded-lg"
              ></input>
            </div>

            {error && <p className="text-red-500">{error}</p>}
            <button
              className="px-4 my-4 py-3 bg-purple-600 rounded-lg "
             
              value="Sign In"
              onClick={SignIn}
            >
              {" "}
              Sign In
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
