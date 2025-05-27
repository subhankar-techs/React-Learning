import { Link } from "react-router-dom";

const MenuBar = () => {
    return(
        <>
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/ dashboard">Dashboard</Link>
        </>
    )
}
export default MenuBar;
    