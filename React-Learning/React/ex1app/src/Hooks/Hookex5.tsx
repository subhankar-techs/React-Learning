import { useState } from "react";

interface Test {
    name: string;
    msg: string[];
}

const Hookex5 = () => {
    const [data, setData] = useState<Test>({
        name: "",
        msg: []
    });

    const add = () => {
        if (data.name.trim() !== "") {
            setData({ ...data, msg: [...data.msg, data.name], name: ""});
        }
    };

    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, name: e.target.value });
    };

    const remove = (indexRemove: number) => {
        setData({
            ...data,
            msg: data.msg.filter((_, index) => index !== indexRemove)
        });
    };

    return (
        <>
            <label htmlFor="name">Enter City:</label>
            <input type="text" id="name" name="name" value={data.name} onChange={change} /><br /><br />

            <button onClick={add}>Add</button><br /><br />

            <ol>
                {data.msg.map((city, index) => (
                    <li key={index}>
                        {city}
                        <button onClick={() => remove(index)} >Delete</button>
                    </li>
                ))}
            </ol>
        </>
    );
};

export default Hookex5;
