import { useState, useEffect } from 'react';
import axios from 'axios';

const ApiEx1 = () => {
    const [userId, setUserId] = useState<number | null>(null);
    const [id, setId] = useState<number | null>(null);
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            axios.get('https://jsonplaceholder.typicode.com/posts/1')
                .then((response) => {
                    setUserId(response.data.userId);
                    setId(response.data.id);
                    setTitle(response.data.title);
                    setBody(response.data.body);
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <h1>API Example</h1>
            {loading ? (
                <p>Please wait</p>
            ) : (
                <>
                    <h2>API Data</h2>
                    <ul>
                        <li>userId: {userId}</li>
                        <li>Id: {id}</li>
                        <li>Title: {title}</li>
                        <li>Body: {body}</li>
                    </ul>
                </>
            )}
        </>
    );
}

export default ApiEx1;