import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage"
import Registration from "../Pages/RegistrationPage"
import HomePage from "../Pages/HomePage"



export default function App() {
  return (

    


    <BrowserRouter>


<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">iLVu2  </a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Journal Prompt</a></li>
 
      <li><a>Mood Check-In</a></li>
      <li><a>Logout</a></li>
   


    </ul>
  </div>
</div>


    <Routes>
      <Route path="" element={<HomePage/>}/>
      <Route path="/user/login/" element={<LoginPage/>}/>
      <Route path="/user/register/" element={<Registration/>}/>
    </Routes>
    </BrowserRouter>

  

    
  )
}