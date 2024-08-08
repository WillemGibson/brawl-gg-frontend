// Dashboard.js
import { useEffect, useState } from 'react';
import { useAuth } from '../data/AuthProvider';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const { token, logout } = useAuth();
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            // Redirect to login if no token is found
            navigate('/login');
        } else {
            fetch('https://brawl-gg-backend.onrender.com/tournament/all', {
                method: 'GET',
                headers: {
                    'jwt': `${token}`,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    }, [token, navigate]);

    return (
        <div>
            <h1>Dashboard</h1>
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Loading data...</p>
            )}
            <button onClick={logout}>Logout</button>
        </div>
    );
}
