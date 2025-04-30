import { useState } from "react";

interface Test {
    name: string;
    age: number;
    email: string;
}

const Hookex2 = () => {
    const [info, setInfo] = useState<Test>({
        name: "Subhankar",
        age: 23,
        email: "subhankar@gmail",
    });
    return (
        <>
            <h4>My name is {info.name}</h4>
            <h4>My age is {info.age}</h4>
            <h4>My email is {info.email}</h4>
        </>
    );
};

export default Hookex2;