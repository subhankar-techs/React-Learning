import { useState, useEffect } from 'react';
import axios from 'axios';

const Apiex6 = () => {
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            axios.get('https://dummyjson.com/todos')
                .then((response) => {
                    let result=response.data.todos.filter((val:any)=>{return val.completed==true});
                    setUsers([...result]);
                })
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {users.length > 0 ? (
                <ul>
                    {users.map((val) => (
                        <li>
                            {val.id} - {val.todo} - {val.userId}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Please Wait for 3 seconds...</p>
            )}
        </>
    );
};

export default Apiex6;
