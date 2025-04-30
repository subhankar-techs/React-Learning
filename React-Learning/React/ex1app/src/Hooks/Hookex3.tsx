import { useState } from "react";

interface Test {
    name: string;
    email: string;
    dept: string
}

const Hookex3 = () => {

    const [data, setData] = useState<Test>({
        name: "",
        email: "",
        dept: ""
    });

    const valupate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    return(
        <>
            <label htmlFor="name">Enter Name:</label>
            <input type="text" id="name" name="name" onChange={valupate} /><br /><br />

            <label htmlFor="email">Enter Email:</label>
            <input type="email" id="email" name="email" onChange={valupate} /><br /><br />

            <label htmlFor="dept">Enter Department:</label>
            <input type="text" id="dept" name="dept" onChange={valupate} /><br /><br />

            <ul>
                <li>Name: {data.name} </li>
                <li>Email: {data.email} </li>
                <li>Department: {data.dept} </li>
            </ul>
        </>
    )
}

export default Hookex3;