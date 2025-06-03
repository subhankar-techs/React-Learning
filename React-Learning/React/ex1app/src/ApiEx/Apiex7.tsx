import { useEffect } from 'react';

const Apiex7 = () => {
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then((response: Response) => {
                if (response.status >= 400) {
                    throw new Error("Error fetching data");
                }
                return response.json();
            })
            .then((data: any[]) => {
                const lastTen = data.slice(-10);
                console.log(lastTen);
            })
            .catch((error: any) => {
                console.log(error);
            })
            .finally(() => {
                console.log("Fetch operation completed");
            });
    }, []);

    return null;
};

export default Apiex7;