import {BrowserRouter, Route, Routes, Link, Navigate} from "react-router-dom";
import LoginPage from "../Pages/LoginPage"
import Registration from "../Pages/RegistrationPage"
import HomePage from "../Pages/HomePage"
import { BsChatLeftHeart } from 'react-icons/bs';
import TrackerPage from "../Pages/TrackerPage";
import TrackerPage_2 from "../Pages/TrackerPage_2";
import axios from "axios";
import React from "react";
import QuotePage from "../Pages/QuotePage.jsx";
import MoodPage from "../Pages/MoodPage.jsx";



export default function App() {
  const [navState , setNavState] = React.useState(false)
  function handleLogOut(){
    axios.get("http://localhost:8000/user/user_logout").then(()=>{
      alert("user has Logged out")
      setNavState(true)
    })
        .catch((err)=>{return err})
  }

  return (
    

    


    <BrowserRouter>


<div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to={"/"}><a className="btn btn-ghost normal-case text-xl">iLVu2 <BsChatLeftHeart /> </a></Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Journal Prompts</a></li>
      <Link to={"/mood"}><li><a>Mood Check-In</a></li> </Link>
      <li className={`text-3xl`}> | </li>
       <Link to={"/journal/tracker"}><li><a>Journal Tracker</a></li> </Link>

      <Link to={"/mood/tracker"}><li><a>Mood Tracker</a></li> </Link>
            <li className={`text-3xl`}> | </li>

      <Link to={"/quote"}><li><a>Quote</a></li></Link>


      <button onClick={handleLogOut} className="btn btn-error">Logout</button>
      {/*{navState === true ? <Navigate to={"/"}/> : ""}*/}



    </ul>
  </div>
</div>


    <Routes>
      <Route path="" element={<HomePage/>}/>
      <Route path="/user/login/" element={<LoginPage/>}/>
      <Route path="/user/register/" element={<Registration/>}/>
      <Route path="/journal/tracker" element={<TrackerPage/>}/>
      <Route path="/mood/tracker" element={<TrackerPage_2/>}/>
      <Route path="/quote" element={<QuotePage/>}/>
      <Route path="/mood" element={<MoodPage/>}/>


    </Routes>
    </BrowserRouter>

  

    
  )
}