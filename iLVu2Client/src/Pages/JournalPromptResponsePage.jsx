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
        <div >

                  <div className={`flex flex-col flex-wrap`}>

                      <div className="chat chat-start">
  <div className="chat-bubble chat-bubble-primary">{promptData.prompt_text}</div>
</div>


                {catData.map(d=>{
                    return (
                        <div>
                            <div className="chat chat-end">
                          <div className="chat-bubble chat-bubble-success">{d.prompt_response_text}</div>
                        </div>
                        </div>

                    )
                })}
                 </div>


        </div>
    )
}