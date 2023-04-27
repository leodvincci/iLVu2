import { BsChatLeftHeart } from 'react-icons/bs';
import {Link} from 'react-router-dom'
import selfLove from "../assets/loveme.svg"


export default function HomePage(){
    return(
        <div className="w-screen h-screen flex flex-col justify-center items-center">
                        {/*<p className={` text-blue-500 normal-case text-9xl m-3`}><BsChatLeftHeart /> </p>*/}

            <img className={`h-[32rem] w-fit`} src={selfLove}  alt={"Self LOve lady"}/>
            <div className={`w-1/4 flex-row flex justify-around items-center rounded-xl h-40`}>

                <Link to={"/user/login"}> <button className="btn  btn-primary">Login</button></Link>
                <Link to={"/user/register"}><button className="btn btn-outline btn-secondary">Register</button></Link>
            </div>

        </div>
    )
}