import { useState, useEffect } from 'react';
import axios from 'axios';

const ApiEx2 = () => {
    const [id, setId] = useState<number | null>(null);
    const [name, setName] = useState<string | null>(null);
    const [email, setEmail] = useState<string>('');
    const [address, setAddress] = useState<any>(null);
    const [company, setCompany] = useState<string>('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            axios.get('https://jsonplaceholder.typicode.com/users/1')
                .then((response) => {
                    setId(response.data.id);
                    setName(response.data.name);
                    setEmail(response.data.email);
                    setAddress(response.data.address);
                    setCompany(response.data.company.name);
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
                        <li>Id: {id}</li>
                        <li>Name: {name}</li>
                        <li>Email: {email}</li>
                        <li>
                            Address:{" "}
                            {address && (
                                <ul>
                                    <li>Street: {address.street}</li>
                                    <li>Suite: {address.suite}</li>
                                    <li>City: {address.city}</li>
                                    <li>Zipcode: {address.zipcode}</li>
                                </ul>
                            )}
                        </li>
                        <li>Company: {company}</li>
                    </ul>
                </>
            )}
        </>
    );
}

export default ApiEx2;