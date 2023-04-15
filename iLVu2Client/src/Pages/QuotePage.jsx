import axios from "axios";
import React, {useState} from "react";

export default function QuotePage(){
	const [quote, setQuote] = React.useState()
	let category = 'happiness';
    React.useEffect(()=>{
           axios.get(
			`https://api.api-ninjas.com/v1/quotes?category=happiness`,
			{
				headers: {
					'x-Api-key': "weLJ3c4aP7vYzoqqnADsbw==rT2QpjJz1MozEozg"
				},
			}
		).then((res)=>{setQuote(res.data[0].quote)})

    },[])





    return(
        <div className={`w-screen flex flex-col h-screen justify-center items-center`}>
			<div className={`rounded-xl text-4xl bg-white h-2/4 w-2/4 flex items-center`}>
							<p className={`p-9`}>"{quote}"</p>
			</div>
        </div>
    )
}