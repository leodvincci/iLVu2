import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function JournalPage(){


    const { catid } = useParams();
    const { promptid } = useParams();

        function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const csrftoken = getCookie('csrftoken');


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


    function handleTheSubmit() {
        console.log("SUB")
        axios.post("/api/v1/promptresponse", {
            prompt_response_text: promptReponse,
            Site_Prompt_id: promptid
        }, {xsrfHeaderName: "X-CSRFToken", headers: {'X-CSRFToken': csrftoken}})

            .then((res) => {
                console.log(res)
                axios.post("/api/v1/journaltracker", {
                    Prompt_Response_id: res.data.prompt_response_id
                }, {xsrfHeaderName: "X-CSRFToken", headers: {'X-CSRFToken': csrftoken}})

            .then((res) => {
                // console.log("RES::: ",res)
                axios.post("/api/v1/calendar", {
                    Journal_Tracker_id: res.data.Journal_Tracker,
                    date: new Date(8.64e15).toString()
                }, {xsrfHeaderName: "X-CSRFToken", headers: {'X-CSRFToken': csrftoken}})
                    .then(r => {
                        console.log("SUCCESS!")
                    })
            })})}





    return(
        <div>

            <div className="chat chat-start">
                      <div className="chat-bubble chat-bubble-primary"> {promptData.prompt_text} </div>
            </div>

            <div className="chat chat-end">
                <div id={"p-response"} className="chat-bubble chat-bubble-warning">{promptReponse}</div>
            </div>

            <textarea onChange={handleChange} placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
            <button onClick={handleTheSubmit} className="btn btn-success">Submit</button>




        </div>
    )
}