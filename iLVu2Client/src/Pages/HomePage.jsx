import { BsChatLeftHeart } from 'react-icons/bs';
import {Link} from 'react-router-dom'


export default function HomePage(){
    return(
        <div className="w-screen h-screen flex flex-col justify-center items-center">
                        <p className={` text-blue-500 normal-case text-9xl m-3`}><BsChatLeftHeart /> </p>

            <div className={` w-1/4 h-1/4 flex-row flex justify-around items-center rounded-xl m-4`}>

                <Link to={"/user/login"}> <button className="btn btn-outline btn-primary">Login</button></Link>
                <Link to={"/user/register"}><button className="btn btn-outline btn-secondary">Register</button></Link>
            </div>

        </div>
    )
}