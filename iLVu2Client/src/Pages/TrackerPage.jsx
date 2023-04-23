import axios from "axios"
import React from "react"
import Block from "../Componets/Block.jsx";
import Block_2 from "../Componets/Block_2.jsx";


export default function TrackerPage(){

    const [userName, setUsername] = React.useState()

    const theDates = []




    function dateGen(y,m,d, y2,m2,d2){
        let date1 = new Date(y,m,d)
        let date2 = new Date(y2,m2,d2)
        while (date1 < date2){
            date1.setDate(date1.getDate() + 1)
            theDates.push(new Date(new Date(date1).getFullYear(),new Date(date1).getMonth(),new Date(date1).getDate()))
        }
        // console.log(theDates)
    }
    dateGen(2023,1,1,2023,12,31)


   
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
            <div className={`flex flex-col p-8 w-screen items-center`}>

                                 <div className={`flex flex-row w-fit flex-wrap rounded bg-yellow-500 text-white p-9`}>

                         {
                             theDates.map(d=>{
                        let a1 = new Date(new Date(d).getFullYear(),new Date(d).getMonth(),new Date(d).getDate())
                    {{return <Block aDate={a1}/>}}

                         })
                         }


                                </div>

            </div>
        </div>
    )
}