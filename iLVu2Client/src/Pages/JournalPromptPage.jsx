import JournalPromptCard from "../Componets/JournalPromptCard.jsx";
import { useParams } from "react-router-dom";

import React from "react";
import axios from "axios";

export default function JournalPromptPage(){
    const [catData, setCatData] = React.useState([])
      const { id } = useParams();

    console.log("CatData: ",catData)
    console.log("CatID: ",id)



    React.useEffect(()=>{
        axios.get(`/api/v1/siteprompt?id=${id}`)
            .then((res)=>{
                setCatData([...res.data.Data])
            })
    },[])

    return(
        <div >
            <h1>Journal Categories</h1>

                  <div className={`flex flex-row flex-wrap`}>
                {catData.map(d=>{
                    return <JournalPromptCard catID={d.id} promptID={d.Prompt_Category_id} catName={d.prompt_text} catDesc={d.prompt_text}/>
                })}
                 </div>


        </div>
    )
}