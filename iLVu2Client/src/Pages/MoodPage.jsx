import axios, {Axios} from "axios";
import React from "react";

export  default function MoodPage(){
    const [moodEmojis, setMoodEmoji] = React.useState()
    const [mood, setMood] = React.useState()
    const [moodDescription, setMoodDescription] = React.useState()

    const [userID, setUserId] = React.useState()
    console.log("USERID: ",userID)
       axios.get("/user/curr_user")
            .then(res =>{
                console.log(res.data.user_data.pk)
                setUserId(res.data.user_data.pk)
            }).catch(((err)=>{
                console.log(err)
            }))

    console.log(mood)
    console.log(moodEmojis)
    console.log(moodDescription)
    React.useEffect( ()=> {
        async function waitForIt() {
            const request = await axios.get("/api/v1/emojis");
            return request
        }

        waitForIt()
            .then(theData=>{
                setMoodEmoji([theData.data.data])
            })


    }, [])

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


    function handleSubmit() {
        console.log(csrftoken)
        axios.post("/api/v1/moodtracker",{
            mood_description: moodDescription,
            mood_response: mood
        },{xsrfHeaderName:"X-CSRFToken", headers:{'X-CSRFToken': csrftoken}}).then((res)=>{
                    axios.post("/api/v1/calendar", {
                        Mood_Tracker_id: res.data.Mood_Tracker_id,
                        App_user_id: userID,
                        date: new Date(8.64e15).toString()
                    },{xsrfHeaderName:"X-CSRFToken", headers:{'X-CSRFToken': csrftoken}}).then(r =>{console.log("SUCCESS!")})
        })
    }

    function handleOnChange(e) {
        setMoodDescription( e.target.value)
    }

    return (
            <div className={`flex flex-col items-center h-screen w-screen justify-center `}>

                <div className={`flex flex-row w-3/4 p-10 h-[20rem] flex-wrap overflow-scroll items-center justify-center`}>
                    {
                      moodEmojis !== undefined ?
                          moodEmojis[0].map(e =>{
                                       return (
                                      <h1 onClick={()=>{ setMood(e.slug) }} className={`text-[5rem] hover:text-[6rem] hover:cursor-pointer p-9`}>{e.character}</h1>
                                  )
                          })
                          : ""
                    }
                </div>
                    <div>
                        <textarea id={"theTextArea"}  onChange={handleOnChange} className="textarea textarea-accent m-8" placeholder="Why Do You Feel...?"></textarea>
                    </div>
                                        <button onClick={handleSubmit} className="btn btn-accent">Submit</button>

            </div>

        )
    }