import { useLayoutEffect, useEffect} from "react";

const Demo2 = () => {
    useLayoutEffect (() => {
        alert("Component is mounted");
    }, [])

    useEffect(() => {
        alert("Component is updated");
    }, [])

    return(
        <>
            <div className="container">
                <h3>Demo2</h3>
            </div>
        </>
    )
}

export default Demo2;