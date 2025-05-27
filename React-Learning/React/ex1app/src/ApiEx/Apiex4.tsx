import { useState, useEffect } from 'react';
import axios from 'axios';

const Apiex4 = () => {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            axios.get('https://dummyjson.com/users?limit=10')
                .then((response) => {
                    setUsers(response.data.users);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false);
                });
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <p>Please Wait for 3 seconds...</p>
            ) : (
                <>
                    {users.map((val: any) => (
                        <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
                            <h2>Id:{val.id}</h2>
                            <h2>{val.firstName} {val.lastName}</h2>
                            <p>Email: {val.email}</p>
                            <img src={val.image} alt="img" />
                        </div>
                    ))}
                </>
            )}
        </>
    );
};

export default Apiex4;