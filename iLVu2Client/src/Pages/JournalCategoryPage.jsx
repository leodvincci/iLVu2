import JournalCategoryCard from "../Componets/JournalCategoryCard.jsx";
import React from "react";
import axios from "axios";

export default function JournalCategoryPage(){
    const [catData, setCatData] = React.useState([])
    console.log("CatData: ",catData)
    React.useEffect(()=>{
        axios.get("/api/v1/categories")
            .then((res)=>{
                console.log(res.data.Data)
                setCatData([...res.data.Data])
            })
    },[])

    return(
        <div >
            {/*<h1 className={`text-3xl`}>Categories</h1>*/}

                  <div className={`flex flex-row flex-wrap`}>
                {catData.map(d=>{
                    return <JournalCategoryCard btnColor={"btn btn-primary"} catID ={d.id} catName={d.category_name} theLink={"/journal/prompt/${props.catID}"} btnTxt={"View Prompts"} catDesc={d.category_description}/>
                })}
                 </div>


        </div>
    )
}