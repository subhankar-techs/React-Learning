import {} from 'react';
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <>
           <div className= "container">
            <h3>Menu:</h3>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className= "navbar-nav">
                <li className="nav-item"><Link to="/test1" className="nav-link active" >Home</Link>" </li>
            </ul>
            </nav>
           </div>
        </>
    );
};

export default Menu;