import {Link} from "react-router-dom";

export default function JournalCategoryCard(props){

    function handleClick(){
        console.log("clicked: ",props.catID)
    }



    return(
 <div className="card w-96 bg-base-100 shadow-xl m-8 ">
  <div className="card-body">
    <h2 className="card-title">{props.theDate}</h2>
    <p>{props.response}</p>
    <p className={`text-xl text-blue-600`}>{props.description}</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
    )
}