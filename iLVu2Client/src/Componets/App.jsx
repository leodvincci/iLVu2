import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage"
import Registration from "../Pages/RegistrationPage"
import HomePage from "../Pages/HomePage"



export default function App() {
  return (


    <BrowserRouter>
    <Routes>
      <Route path="" element={<HomePage/>}/>
      <Route path="/user/login/" element={<LoginPage/>}/>
      <Route path="/user/register/" element={<Registration/>}/>


    </Routes>
    </BrowserRouter>

  

    
  )
}