import React from "react"
import axios from "axios"

export default function RegestrationPage(){

    const [userRegData, setUserRegData] = React.useState({})

    function handleClick(){
        axios.post("http://localhost:8000/user/register_user",{
            ...userRegData
        })
        .then(res=>{
            console.log(res)
            document.location.href = "/user/login"
        })
    }

    function handleChange(e){
       setUserRegData( (prevState)=>{
        return(
            {...prevState, [e.target.id]:e.target.value}
        )
       }   )
    }

    return(
        <div className={`w-screen h-screen flex flex-row items-center justify-center bg-slate-200`}>
            
            <div className={` flex flex-col w-fit `}>
            <h1 className={`text-2xl  text-slate-900 m-1`}>Sign-Up</h1>
            <input onChange={handleChange} type="text" id="first_name" placeholder="first name" className="input input-bordered input-info w-full max-w-xs" />
            <input onChange={handleChange} type="text" id="last_name" placeholder="last name" className="input input-bordered input-info w-full max-w-xs" />
            <input onChange={handleChange} type="text" id="email" placeholder="email name" className="input input-bordered input-info w-full max-w-xs" />
            <input onChange={handleChange} type="password" id="password" placeholder="password" className="input input-bordered input-info w-full max-w-xs" />
            <button onClick={handleClick} className="btn btn-primary">Register</button>
            </div>

        </div>
    )
}