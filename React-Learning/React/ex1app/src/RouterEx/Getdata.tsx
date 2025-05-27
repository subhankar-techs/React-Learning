import { useEffect} from "react";
import { Test } from "./Menu";
import { useLocation } from "react-router-dom";

const Getdata = () =>{
    const loc = useLocation();

    const{info}=loc.state as {info:Test}; 

    useEffect(()=>{
        localStorage.setItem("name", info.name);
        localStorage.setItem("location", info.location);
        localStorage.setItem("skill", info.skill.toString());
    },[])

    return(
        <>
            <ul>
                <li>Name: {info.name}</li>
                <li>Location: {info.location}</li>
                <li>Skills: {info.skill}</li>
                <li>Active: {info.active.toString()}</li>
            </ul>
        </>
    )

}

export default Getdata;