import { useState } from "react";

const Hookex1 = () => {
    const[name, setName]= useState<string>("Subhankar");
    const[age, setAge]= useState<number>(22);
    const[email, setEmail]= useState<string>("subhankar@gmail.com");

    const valupd=()=>{
        setName("Subhankar Manna");
        setAge(23);
        setEmail("123@gmail.com");
    }
    return(
        <>
            <h4>My name is {name}</h4>
            <h4>My age is {age}</h4>
            <h4>My email is {email}</h4>
            <button onClick={valupd}>Update</button>
        </>
    )
}

export default Hookex1;

