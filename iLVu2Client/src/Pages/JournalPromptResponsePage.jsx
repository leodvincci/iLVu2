import JournalPromptCard from "../Componets/JournalPromptCard.jsx";
import { useParams } from "react-router-dom";

import React from "react";
import axios from "axios";

export default function JournalPromptPage(){
    const [catData, setCatData] = React.useState([])
    const [promptData, setPromptData] = React.useState("")

    const { catid } = useParams();
    const { site_prompt_id } = useParams();

    console.log("CatData: ",catData)
    console.log("CatID: ",catid)
    console.log("Site-Prompt-id : ",site_prompt_id)
    console.log("Some Data : ",promptData)


    React.useEffect(()=>{
        axios.get(`/api/v1/promptresponse?site_prompt_id=${site_prompt_id}`)
            .then((res)=>{
                setCatData([...res.data.Data])
            })
    },[])


    React.useEffect(()=>{
        axios.get(`http://localhost:8000/api/v1/siteprompt?id=${catid}`)
            .then((res)=>{
                console.log("HELLO")
                for(const r of res.data.Data){
                    if(r.id == site_prompt_id){
                        setPromptData(r)
                        console.log("YUP")
                    }
                }
            })
    },[])




    return(
        <div className={`w-screen flex flex-col items-center`}>

                  <div className={`flex flex-col flex-wrap w-3/4 p-4 mt-8`}>

                      <div className="chat chat-start m-7">
  <div className="chat-bubble chat-bubble-primary text-3xl p-3 ">{promptData.prompt_text}</div>
</div>


                {catData.map(d=>{
                    return (
                        <div>
                            <div className="chat chat-end">
                          <div className="chat-bubble bg-green-700 text-2xl text-white">{d.prompt_response_text}</div>
                        </div>
                        </div>

                    )
                })}
                 </div>


        </div>
    )
}