import { useRef, useState, useEffect } from "react";

const Hookex8 = () => {
    const [count, setCount] = useState<number>(0);
    const ref1 = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        return(
            ()=>{
                alert("Component Unmounted")
            }    
        )
    }, []);

    return(
        <>
            <h3>Count Display by State: {count}</h3><br /><br />
            <button onClick={() => setCount(count+1)}>+</button><br />
            <button onClick={() => setCount(count-1)}>-</button><br />

            <h3 style={({color:'green'})} ref={ref1}> </h3>
        </>
    )
}
export default Hookex8;