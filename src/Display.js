import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Display.css'; // Import the CSS file

function Display() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://13.233.200.174:3000/Display') // Replace with your backend URL
            .then(response => {
                setData(response.data);
                console.log('Fetched Data:', response.data); // Display the data in the console
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="container">
            <h1>Stored Data</h1>
            <div className="grid">
                {data.map((item, index) => (
                    <div key={index} className="grid-item">
                        <p><strong>Name:</strong> {item.name}</p>
                        <p><strong>Contact:</strong> {item.emailPhone}</p>
                        <p><strong>Message:</strong> {item.message}</p>
                        <p><strong>Date/Time:</strong> {item.dateTime}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Display;