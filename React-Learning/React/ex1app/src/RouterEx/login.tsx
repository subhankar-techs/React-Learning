import {useRef, useState} from "react";
import { useNavigate }   from "react-router-dom";

interface Exam{
    email:string,
    password:string
}

const Login = () => {
    const[info, setInfo] = useState<Exam>({
        email: "",
        password: ""
    });

    const ref1 = useRef<HTMLInputElement>(null);
    const navigate= useNavigate();

    const valueUpdate= (e: React.ChangeEvent<HTMLInputElement>) => {
        setInfo({
            ...info,[e.target.name]: e.target.value
        });
    }

    const checklog=() => {
        if(info.email == "abc@gmail.com" && info.password == "1234"){
            navigate("/dashboard");
        }
        else{
            ref1.current!.innerText= "Invalid Credentials";
            setInfo({
                email: "",
                password: ""
            });
        }
    }

    return(
        <>
            <h3>Login Here:</h3>
            Email:
            <input type="text" name="email" value={info.email} onChange={valueUpdate} />
            <br />

            Password:
            <input type="password" name="password" value={info.password} onChange={valueUpdate} />
            <br />
            <button onClick={checklog}>Login</button>
            <p ref={ref1}></p>
        </>
    )
}

export default Login