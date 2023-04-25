import MoodResponseCard from "../Componets/MoodResponseCard.jsx";
import React from "react";
import axios from "axios";

export default function MoodResponsePage(){
    const [catData, setCatData] = React.useState([])
    console.log("CatData: ",catData)
    React.useEffect(()=>{
        axios.get("/api/v1/moodtracker")
            .then((res)=>{
                console.log(res.data.Data)
                setCatData([...res.data.Data])
            })
    },[])

    return(
        <div >
            <h1>Journal Categories</h1>

                  <div className={`flex flex-row flex-wrap`}>
                {catData.map(d=>{
                    return <MoodResponseCard theDate={d.date} response={d.mood_response} description ={d.mood_description}/>
                })}
                 </div>


        </div>
    )
}