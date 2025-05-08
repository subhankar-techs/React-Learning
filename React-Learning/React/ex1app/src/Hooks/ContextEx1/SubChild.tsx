import { useContext } from "react";
import testcontext from "./Create";

const SubChild = () => {
    const {msg} = useContext(testcontext);

    return(
        <>
            <h3>Subchild Component</h3>
            <h3>Required Messege: {msg}</h3>
        </>
    )
}
export default SubChild;
