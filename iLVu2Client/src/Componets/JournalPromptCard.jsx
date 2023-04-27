import {Link} from "react-router-dom";

export default function JournalCategoryCard(props){

    function handleClick(){
        console.log("clicked: ",props.catID)
    }



    return(
 <div className="card w-96 bg-base-100 shadow-xl m-8 bg-slate-100  ">
  <div className="card-body">
    {/*<h2 className="card-title">{props.catName}</h2>*/}
    <p className={`text-xl p-3 font-bold `}>{props.catDesc}</p>
    <div className="card-actions justify-end">
                <Link to={`/journal/prompt/${props.catID}/response/${props.promptID}`}> <button className="btn btn-outline btn-primary">View Responses</button></Link>

        <Link to={`/journal/prompt/${props.catID}/${props.promptID}/response`}> <button className="btn btn-outline btn-accent">{props.btnTxt}</button></Link>

    </div>
  </div>
</div>
    )
}