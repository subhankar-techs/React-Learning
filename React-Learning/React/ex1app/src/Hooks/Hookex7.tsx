import { useState, useEffect, useRef } from "react";

const Hookex7 = () => {
    const [msg, setMsg] = useState<string>("Hello World!");
    const ref1=useRef<HTMLInputElement>(null);

    useEffect(()=>{
        setTimeout(() => {
            ref1.current!.innerText=msg
        },5000);
    }, [])

    return(

        <div>
            <input ref={ref1} type="text" />
            <button onClick={() => setMsg("Updated Message!")}>Update Message</button>
        </div>
    )
}
export default Hookex7;