import {useState} from "react";
import { Link, Outlet } from "react-router-dom";

interface Test{
    id: number,
    name: string,
    price: number
}

const Dashboard=() => {
    const [data, setData] = useState<Test>({
        id: 1,
        name: "Display",
        price: 999
    });

    return(
        <>
            <h3>Welcome to The Dashboard</h3>

            <ul>
                <li>
                    <Link to="/dashboard/product">Product</Link>
                </li>
                <li>
                    <Link to="/dashboard/contact" >Contact</Link>
                </li>

                <li>
                    <Link to={`/dashboard/view/${data.id}`}>View</Link>
                </li>
            </ul><br /><br />

            <div style={{backgroundColor: "lightblue", border: "2px solid black", width: "40%"}}></div>

            <Outlet />
        </>
    )
};
export default Dashboard;