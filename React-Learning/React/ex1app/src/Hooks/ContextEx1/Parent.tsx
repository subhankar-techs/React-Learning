import { useState, useEffect } from "react";
import testcontext from "./Create";
import Child from "./Child";


const Parent=()=>{
    const[info,setInfo]=useState<string>('Hello from Parent Component');

    const [data,setData]=useState([
        {name:'John', age:25, location:'New York'},
        {name:'Jane', age:30, location:'Los Angeles'},
        {name:'Bob', age:35, location:'Chicago'}
    ]);
    
    useEffect(()=>{
        setTimeout(()=>{
            setInfo('Hello from Parent Component after 2 seconds');
            setData([...data, {name:'Alice', age:28, location:'San Francisco'}]);
        },2000);
        },[]);

        
    return(
        <>
            <h3>Parent Component</h3>
            <testcontext.Provider value={{msg:info, empdata:data}}>
                <Child/>
            </testcontext.Provider>
        </>
    )
}
export default Parent;

