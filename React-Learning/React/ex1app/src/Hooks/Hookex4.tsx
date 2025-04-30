import { useState } from "react";

interface Test {
    name: string;
    roll: string;
    maths: number;
    biology: number;
    physics: number;
    msg: string;
}

const Hookex4 = () => {
    const [data, setData] = useState<Test>({
        name: "",
        roll: "",
        maths: 0,
        biology: 0,
        physics: 0,
        msg: ""
    });

    const valupdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const display = () => {
        let r= `Name: ${data.name}, Roll: ${data.roll}, Total Marks: ${Number(data.maths) + Number(data.biology) + Number(data.physics)}`;
        setData({ ...data, msg: r });
    }

    return(
        <>
            <label htmlFor="name">Student Name:</label>
            <input type="text" id="name" name="name" onChange={valupdate} /><br /><br />

            <label htmlFor="roll">Enter Roll:</label>
            <input type="text" id="roll" name="roll" onChange={valupdate} /><br /><br />

            <label htmlFor="maths">Maths:</label>
            <input type="text" id="maths" name="maths" onChange={valupdate} /><br /><br />

            <label htmlFor="biloogy">Biology:</label><input type="text" id="biology" name="biology" onChange={valupdate} /><br /><br />
            
            <label htmlFor="physics">Physics:</label><input type="text" id="physics" name="physics" onChange={valupdate} /><br /><br />

            <button onClick ={display}>Show</button><br /><br />
            <h3>{data.msg}</h3>
        </>
    )
}

export default Hookex4;