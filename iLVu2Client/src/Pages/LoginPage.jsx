import React from "react"
import axios from "axios"
export default function LoginPage(){


    const [userLoginData, setUserLoginData] = React.useState({})

    function handleClick(){
        axios.post("http://localhost:8000/user/user_login",{
            ...userLoginData
        })
        .then(res=>{
            console.log(res)
        }).finally(()=>{
                // document.location.href = "/journal/tracker"

        })
    }

    function handleChange(e){
       setUserLoginData( (prevState)=>{
        return(
            {...prevState, [e.target.id]:e.target.value}
        )
       }   )
    }



    return(
        <div className={`w-screen h-screen flex flex-row items-center justify-center bg-slate-200`}>
            
            <div className={` flex flex-col w-fit `}>
            <h1 className={`text-2xl  text-slate-900 m-1`}>Please Login</h1>
            <input onChange={handleChange} id={"email"}type="text" placeholder="email name" className="input input-bordered input-info w-full max-w-xs" />
            <input onChange={handleChange} id={"password"} type="password" placeholder="password" className="input input-bordered input-info w-full max-w-xs" />
            <button onClick={handleClick} class="btn btn-primary">Login</button>
            </div>

        </div>
    )
}