import axios from "axios";
import React, {useState} from "react";

export default function QuotePage(){
	const [quote, setQuote] = React.useState()
	let category = 'happiness';
    React.useEffect(()=>{
           axios.get(
			`api/v1/quotes`
		).then((res)=>{setQuote(res.data.data[0].quote)})

    },[])





    return(
        <div className={`w-screen flex flex-col h-screen justify-center items-center`}>
			<div className={`rounded-xl text-4xl bg-white h-2/4 w-2/4 flex items-center`}>
							<p className={`p-9`}>"{quote}"</p>
			</div>
        </div>
    )
}