//fetching multiple data from an API using axios and displaying it in a table

// import { useState, useEffect } from 'react';
// import axios from 'axios';

// interface User {
//     id: number;
//     name: string;
//     email: string;
//     address: {
//         street: string;
//         city: string;
//         geo: {
//             lat: string;
//             lng: string;
//         };
//     };
//     company: {
//         name: string;
//     };
// }

// const ApiEx3 = () => {
//     const [users, setUsers] = useState<User[]>([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
//                 .then((response) => {
//                     setUsers(response.data);
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 })
//                 .finally(() => {
//                     setLoading(false);
//                 });
//         }, 3000);

//         return () => clearTimeout(timer);
//     }, []);

//     return (
//         <>
//             <h1>API Example</h1>
//             {loading ? (
//                 <p>Please wait</p>
//             ) : (
//                 <>
//                     <h2>API Data</h2>
//                     <table border={2} cellPadding={5} cellSpacing={0} style={{ borderColor: 'black', borderStyle: 'solid' }}>
//                         <thead >
//                             <tr>
//                                 <th>Id</th>
//                                 <th>Name</th>
//                                 <th>Email</th>
//                                 <th>Street</th>
//                                 <th>City</th>
//                                 <th>Latitude</th>
//                                 <th>Longitude</th>
//                                 <th>Company</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {users.map((user) => (
//                                 <tr key={user.id}>
//                                     <td>{user.id}</td>
//                                     <td>{user.name}</td>
//                                     <td>{user.email}</td>
//                                     <td>{user.address.street}</td>
//                                     <td>{user.address.city}</td>
//                                     <td>{user.address.geo.lat}</td>
//                                     <td>{user.address.geo.lng}</td>
//                                     <td>{user.company.name}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </>
//             )}
//         </>
//     );
// }

// export default ApiEx3;

// another way to fetch data from an API using axios and displaying it in a table

import { useState, useEffect } from 'react';
import axios from 'axios';

const ApiEx3 = () => {
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return(
        <>
            {
                users.length > 0 ? (
                    <>
                        {users.map((val) => (
                            <div key={val.id}>
                                <h2>{val.name}</h2>
                                <p>Email: {val.email}</p>
                                <p>Street: {val.address.street}</p>
                                <p>City: {val.address.city}</p>
                                <p>Latitude: {val.address.geo.lat}</p>
                                <p>Longitude: {val.address.geo.lng}</p>
                                <p>Company: {val.company.name}</p>
                            </div>
                        ))}
                    </>
                ) : (
                    <p>Loading...</p>
                )
            }
        </>
    )
}

export default ApiEx3