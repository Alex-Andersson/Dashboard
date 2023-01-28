import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Data {
    id: number;
    name: string;
    value: number;
}

const TableComponent: React.FC = () => {
    const [data, setData] = useState<Data[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://my-api.com/data'
            );
            setData(result.data);
        };

        fetchData();
        const intervalId = setInterval(fetchData, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {data.map(d => (
                    <tr key={d.id}>
                        <td>{d.id}</td>
                        <td>{d.name}</td>
                        <td>{d.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableComponent;