import axios, {request} from "axios";
import React from "react";
export  default function MoodPage(){
    const [moodEmojis, setMoodEmoji] = React.useState()
    console.log(moodEmojis)
    React.useEffect( ()=> {
        async function waitForIt() {
            const request = await axios.get("https://emoji-api.com/emojis?search=face&access_key=11283f1a9a2bb7297598a7ba1d58a0cf9bfdd3cd");
            return request
        }

        waitForIt()
            .then(theData=>{
                setMoodEmoji([theData.data])
            })


    }, [])


        return (
            <div className={`flex flex-row w-screen h-screen flex-wrap p-10`}>
                {
                  moodEmojis !== undefined ?
                      moodEmojis[0].map(e =>{
                              // if(e.slug.includes("face")){
                                   return (
                                  <h1 onClick={()=>{alert(e.slug)}} className={`text-8xl hover:text-9xl hover:cursor-pointer m-4`}>{e.character}</h1>
                              )
                          // }

                      })
                      : ""
                }
            </div>
        )
    }