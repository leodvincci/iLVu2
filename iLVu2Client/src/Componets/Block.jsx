import React from "react";
import axios from "axios";

export default function Block(props){
        const [moodData, setMoodData] = React.useState([])



React.useEffect(()=>{

        axios.get("/api/v1/calendar")
        .then(r=>{
            for(const d of r.data.Data){
                if(d.Journal_Tracker_id !== null && d.App_user_id === props.userID){
                    setMoodData(prevState =>  [...prevState,new Date( new Date(d.date).getFullYear(), new Date(d.date).getMonth(), new  Date(d.date).getDate()+1 )])
                }
            }

        })
    },[props.userID])
    let my_bg = ""
    for(let x of moodData){
        if(props.aDate.toString() === x.toString()){
            console.log(props.aDate.toString() , "----", x.toString())
           my_bg = "bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-emerald-500 to-lime-600"
        }
        //         if(props.aDate.toString() !== x.toString()){
        //     console.log(props.aDate.toString() , "----", x.toString())
        //    my_bg = "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 bg-gradient-to-r"
        // }

    }

    return(
            <div className={`text-[10px] rounded border-2 border-slate-400 w-[3rem] p-3 m-1 ${my_bg}`}>
                <p>{props.aDate.toDateString().split(" ")[1]}{props.aDate.toDateString().split(" ")[2]}</p>
                                </div>
    )
}