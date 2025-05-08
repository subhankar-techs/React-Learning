import { useState, useMemo } from "react";

const Memoex= () => {
    const [count, setCount] = useState<number>(1);
    const[task, setTask] = useState<string[]>([]);

    const result= useMemo(() => findsq(count), [count]);

    const taskadd= () => {
        console.log("Task added");
        setTask([...task, "New Task"]);
    }

    return(
        <>
            <h3>Count:{count}</h3>
            <button onClick={() => setCount(count+1)}>+</button>
            <h3>Required Result:{result}</h3><br></br>
            <button onClick={taskadd}>Add Task</button>
            {
                (task.length>0)? <ol>
                {
                    task.map((v)=> {
                        return <li>{v}</li>
                    })
                }
                </ol> : <h3>No task is added</h3>
            }
        </>
    )
};

export default Memoex;

const findsq= (num:number):number => {
    console.log("Finding square of number",);
    return num*num;
}