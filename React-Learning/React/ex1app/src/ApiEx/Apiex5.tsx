import { useState, useEffect } from 'react';
import axios from 'axios';

const Apiex5 = () => {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            axios.get('https://dummyjson.com/users')
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
                <select>
                    {users.map((val) => (
                        <option value={val.address.stateCode}>
                            {val.address.state}
                        </option>
                    ))}
                </select>
            )}
        </>
    );
};

export default Apiex5;
