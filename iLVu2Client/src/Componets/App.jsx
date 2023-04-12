import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import LoginPage from "../Pages/LoginPage"
import Registration from "../Pages/RegistrationPage"
import HomePage from "../Pages/HomePage"
import { BsChatLeftHeart } from 'react-icons/bs';



export default function App() {
  return (

    


    <BrowserRouter>


<div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to={"/"}><a className="btn btn-ghost normal-case text-xl">iLVu2 <BsChatLeftHeart /> </a></Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Journal Prompt</a></li>
 
      <li><a>Mood Check-In</a></li>
   


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