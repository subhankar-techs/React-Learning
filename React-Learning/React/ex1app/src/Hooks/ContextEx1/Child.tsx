import React,{} from "react";
import SubChild from "./SubChild";
import testcontext from "./Create";

const Child=() => {

    const {empdata} = React.useContext(testcontext);

    return(
        <>
            <h3>Child Component</h3>
            <ol>
                {
                    empdata.map((v)=>{
                        return <li>Name: {v.name} Age: {v.age} Location: {v.location}</li>
                    }
                    )
                }
            </ol>
            <SubChild/>
        </>
    )
}
export default Child;