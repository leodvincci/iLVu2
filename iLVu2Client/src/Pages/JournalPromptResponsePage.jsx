import JournalPromptCard from "../Componets/JournalPromptCard.jsx";
import { useParams } from "react-router-dom";

import React from "react";
import axios from "axios";

export default function JournalPromptPage(){
    const [catData, setCatData] = React.useState([])
      const { site_prompt_id } = useParams();

    console.log("CatData: ",catData)
    console.log("CatID: ",site_prompt_id)



    React.useEffect(()=>{
        axios.get(`/api/v1/promptresponse?site_prompt_id=${site_prompt_id}`)
            .then((res)=>{
                setCatData([...res.data.Data])
            })
    },[])

    return(
        <div >

                  <div className={`flex flex-row flex-wrap`}>
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