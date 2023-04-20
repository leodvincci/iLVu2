import axios from "axios"
import React from "react"

export default function TrackerPage(){

    const [userName, setUsername] = React.useState()

   
       axios.get("/user/curr_user")
            .then(res =>{
                console.log(res.data.user_data.fields.first_name)
                setUsername(res.data.user_data.fields.first_name)
            }).catch(((err)=>{
                setUsername(null)
                console.log(err)
            }))
  
    

     
    

    return(
        
        <div>
            {
            userName === null ? document.location.href = "/user/login" : 
          <h1>Welcome {userName}!</h1>
    }
        </div>
    )
}