import axios from "axios";
import React from "react";

export  default function MoodPage(){
    const [moodEmojis, setMoodEmoji] = React.useState()
    const [mood, setMood] = React.useState()
    const [moodDescription, setMoodDescription] = React.useState()
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


    function handleSubmit() {
        axios.post("/api/v1/moodtracker",{
            mood_description: moodDescription,
            mood_response: mood
        }).then((res)=>{
                    axios.post("/api/v1/calendar", {
                        Mood_Tracker_id: res.data.Mood_Tracker_id,
                        App_user_id: 1,
                        date: new Date(8.64e15).toString()
                    }).then(r =>{console.log("SUCCESS!")})
        })
    }

    function handleOnChange(e) {
        setMoodDescription( e.target.value)
    }

    return (
            <div className={`flex flex-col items-center h-screen w-screen justify-center `}>

                <div className={`flex flex-row w-2/4 p-10 h-[20rem] flex-wrap overflow-scroll items-center justify-center`}>
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