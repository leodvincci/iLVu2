import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function JournalPage(){


    const { catid } = useParams();
    const { promptid } = useParams();


    const [promptData, setPromptData] = React.useState("")
    const [promptReponse, setPromptReponse] = React.useState("")
    console.log(promptData)
    React.useEffect(()=>{
        axios.get(`http://localhost:8000/api/v1/siteprompt?id=${catid}`)
            .then((res)=>{
                console.log("HELLO")
                for(const r of res.data.Data){
                    if(r.id == promptid){
                        setPromptData(r)
                    }
                }
            })
    },[])

    console.log(promptReponse)

    function handleChange(e){
        setPromptReponse(e.target.value)
    }


    return(
        <div>

            <div className="chat chat-start">
                      <div className="chat-bubble chat-bubble-primary"> {promptData.prompt_text} </div>
            </div>

            <div className="chat chat-end">
                <div id={"p-response"} className="chat-bubble chat-bubble-warning">{promptReponse}</div>
            </div>

            <textarea onChange={handleChange} placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>



        </div>
    )
}