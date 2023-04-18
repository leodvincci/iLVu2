import axios from "axios";
import React from "react";

export  default function MoodPage(){
    const [moodEmojis, setMoodEmoji] = React.useState()
    console.log(moodEmojis)
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


        return (
            <div className={`flex flex-col items-center h-screen w-screen justify-center `}>

                <div className={`flex flex-row w-1/4 p-10 h-[20rem] flex-wrap overflow-scroll items-center justify-center`}>
                    {
                      moodEmojis !== undefined ?
                          moodEmojis[0].map(e =>{
                                       return (
                                      <h1 onClick={()=>{alert(e.slug)}} className={`text-[5rem] hover:text-[7rem] hover:cursor-pointer p-9`}>{e.character}</h1>
                                  )
                          })
                          : ""
                    }
                </div>
                    <div>
                        <textarea className="textarea textarea-accent m-8" placeholder="Why Do You Feel...?"></textarea>
                    </div>
                                        <button className="btn btn-accent">Submit</button>

            </div>

        )
    }