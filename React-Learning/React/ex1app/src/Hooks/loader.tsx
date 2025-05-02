import {useState} from "react";
import Hookex8 from "./Hookex8";

const Loader = () => {
    const[load, setLoad] = useState<boolean>(false);

    return(
        <>
            <input type="button" value={(load)?"Hide":"Show"} onClick={()=>setLoad(!load)} />
            {
                load && <Hookex8 />
            }
        </>
    )
}
export default Loader;