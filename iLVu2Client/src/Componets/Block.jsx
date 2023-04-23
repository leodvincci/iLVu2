import React from "react";
import axios from "axios";

export default function Block(props){
        const [moodData, setMoodData] = React.useState([])


React.useEffect(()=>{
        axios.get("/api/v1/calendar")
        .then(r=>{
            for(const d of r.data.Data){
                // console.log(d.date)
                if(d.Journal_Tracker_id != null){
                    setMoodData(prevState =>  [...prevState,new Date( new Date(d.date).getFullYear(), new Date(d.date).getMonth(), new  Date(d.date).getDate()+1 )])
                }
            }

        })
    },[])
    let my_bg = ""
    for(let x of moodData){
        if(props.aDate.toString() === x.toString()){
            console.log(props.aDate.toString() , "----", x.toString())
           my_bg = "bg-purple-400"
        }
    }

    return(
            <div className={` text-[10px] rounded border-2 border-black w-[3rem] p-3 ${my_bg}`}>
                <p>{props.aDate.toDateString().split(" ")[1]}{props.aDate.toDateString().split(" ")[2]}</p>
                                </div>
    )
}