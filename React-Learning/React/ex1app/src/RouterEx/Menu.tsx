import {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';

export interface Test{
    id:number,
    name:string,
    location:string,
    skill:string[],
    active:boolean
}

const Menu = () => {

    const [test, setTest] = useState<Test>({
        id: 1,
        name: "Subhankar",
        location: "India",
        skill: ["Python", "React"],
        active: true
    });
    return (
        <>
           <div className= "container">
            <h3>Menu:</h3>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className= "navbar-nav">
                <li className="nav-item" ><Link  className="nav-link active" to="/test1" >Usecase1</Link></li>

                <li className="nav-item"><Link to="/demo2" className="nav-link active" >Usecase2</Link></li>

                <li className="nav-item">
                    <Link  className="nav-link" to={`/test3/ ${test.id}`} >Usecase3</Link>
                </li>

                <li className="nav-item">
                    <Link  className="nav-link" to="/test4" state={{info: test}}>Usecase4</Link>
                </li>

                <li className="nav-item">
                    <NavLink to="/test5" style={({ isActive }) => ({color: isActive ?'green': 'blue',backgroundColor:isActive ?'lightblue' : 'white', fontStyle: isActive ? 'italic' : 'normal'
                        })}>
                        Usecase5
                    </NavLink>
                </li>

                <li className="Nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
            </ul>
            </nav>
           </div>   
        </>
    );
};

export default Menu;