import {useRef} from 'react';
import axios from 'axios';

const Apipost = () => {

    const nameRef= useRef<HTMLInputElement>(null);
    const passwordRef= useRef<HTMLInputElement>(null);
    const statusRef= useRef<HTMLHeadingElement>(null);

    const check = () =>{
        axios.post('https://dummyjson.com/user/login', { username: nameRef.current!.value, password: passwordRef.current!.value })
        .then(
            (response) => {
                console.log(response);
                if(response.data.accessToken) {
                    statusRef.current!.innerHTML = "Login Successful!";
                    statusRef.current!.style.color = "green";
                }
            }
        ).catch(() => {
            console.log("Error");
            statusRef.current!.innerHTML = "Login Failed!";
        });
    }

    return(
        <>
            <input type="text" placeholder="Enter Username" ref={nameRef} />

            <input type="password" placeholder="Enter Password" ref={passwordRef} />
            <button onClick={check}>Check</button>
            <h3 ref={statusRef}></h3>
        </>
    )

}

export default Apipost;