import {} from 'react';
import {useParams} from 'react-router-dom';

const Getid = () => {
    const{uid}=useParams();

    const del=()=>{
        localStorage.removeItem("skill");
    }

    

    return(
        <>
            <h3>Welcome: {localStorage.getItem("name")}</h3>

            <h3>Required Id: {uid}</h3>

            <button onClick={del}>Del</button>
        </>
    )
}
export default Getid;