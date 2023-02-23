import { useState, useEffect } from 'react';

export function Component1() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://random-data-api.com/api/v2/users');
            const data = await response.json();
            setData(data);
        }

        fetchData();
    }, []);

    return (
        <div>
            <h1>API Response:</h1>
            <ul>
                {data}
            </ul>
        </div>
    );
}