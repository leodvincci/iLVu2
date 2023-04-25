import JournalCategoryCard from "../Componets/JournalCategoryCard.jsx";
import { useParams } from "react-router-dom";

import React from "react";
import axios from "axios";

export default function JournalPromptPage(){
    const [catData, setCatData] = React.useState([])
    const [promptCatID, setPromptCatID] = React.useState()
      const { id } = useParams();

    console.log("CatData: ",catData)
    console.log("CatID: ",id)



    React.useEffect(()=>{
        axios.get(`/api/v1/siteprompt?id=${id}`)
            .then((res)=>{
                for(let x of res.data.Data){
                    console.log(x.Prompt_Category_id)
                }
                setCatData([...res.data.Data])
            })
    },[])

    return(
        <div >
            <h1>Journal Categories</h1>

                  <div className={`flex flex-row flex-wrap`}>
                {catData.map(d=>{
                    return <JournalCategoryCard journalID={d.id} catName={d.prompt_text} catDesc={d.Prompt_Category_id}/>
                })}
                 </div>


        </div>
    )
}