import { useRef, useState, useLayoutEffect } from "react";

const Hookex6 = () => {
    const ref1=useRef<HTMLInputElement>(null);
    const [info, setInfo] = useState<string[]>([]);

    const addName=()=>{
        setInfo([...info, ref1.current!.value]);
        ref1.current!.value="";
    }

    useLayoutEffect(()=>{
        alert("Component is loading...");
    }, []);
    return(
        <>
            Enter Name:
            <input type="text" ref={ref1} /><br /><br />
            <button onClick={addName}>Add Name</button><br /><br />
            {
                (info.length > 0) ? (
                    <>
                        <ol>
                            {
                                info.map((v) => {
                                    return (
                                        <li key={v}>{v}</li>
                                    )
                                })
                            }
                        </ol>
                        <h3>List of Names</h3>
                    </>
                ) : (
                    <h3>No Names Added</h3>
                )
            }
        </>
    )
}
export default Hookex6;