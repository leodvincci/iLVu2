export default function RegestrationPage(){
    return(
        <div className={`w-screen h-screen flex flex-row items-center justify-center bg-slate-700`}>
            
            <div className={` flex flex-col w-fit `}>
            <h1 className={`text-2xl  text-white`}>Sign-Up</h1>
            <input type="text" placeholder="first name" className="input input-bordered input-info w-full max-w-xs" />
            <input type="text" placeholder="last name" className="input input-bordered input-info w-full max-w-xs" />
            <input type="text" placeholder="email name" className="input input-bordered input-info w-full max-w-xs" />
            <input type="password" placeholder="password" className="input input-bordered input-info w-full max-w-xs" />
            <button class="btn btn-primary">Button</button>
            </div>

        </div>
    )
}