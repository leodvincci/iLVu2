import {Link} from "react-router-dom";

export default function JournalCategoryCard(props){

    function handleClick(){
        console.log("clicked: ",props.catID)
    }



    return(
 <div className="card w-96 bg-base-100 shadow-xl m-8 bg-gradient-to-r from-blue-500 to-blue-600 ">
  <div className="card-body">
    <h2 className="card-title text-3xl text-white">{props.catName}</h2>
    <p className={`text-slate-900 text-xl`} >{props.catDesc}</p>
    <div className="card-actions justify-end">
      <Link to={`/journal/prompt/${props.catID}`}> <button className={props.btnColor}>{props.btnTxt}</button></Link>
    </div>
  </div>
</div>
    )
}