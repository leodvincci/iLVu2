import axios from "axios";
import React from "react";
import.meta.env.PROD

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
            <div className={`flex flex-col items-center `}>

                <div className={`flex flex-row w-3/4 h-screen flex-wrap p-10`}>
                    {
                      moodEmojis !== undefined ?
                          moodEmojis[0].map(e =>{
                                  // if(e.slug.includes("face")){
                                       return (
                                      <h1 onClick={()=>{alert(e.slug)}} className={`text-[12rem] hover:text-[15rem] hover:cursor-pointer m-9`}>{e.character}</h1>
                                  )
                              // }

                          })
                          : ""
                    }
                </div>
            </div>

        )
    }