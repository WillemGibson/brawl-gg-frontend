import { useEffect, useState } from 'react';
import { useAuth } from '../data/AuthProvider';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar';
import UserRow from '../components/UserRow';
import TournamentTable from '../components/TournamentTable';

export default function Dashboard() {
    const { token } = useAuth();
    const [userData, setUserData] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            // Redirect to login if no token is found
            navigate('/login');
        } else {
            fetch('https://brawl-gg-backend.onrender.com/user/dashboard', {
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
                setUserData(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }

    }, [token, navigate]);

    const user = userData ? JSON.stringify(userData, null, 2) : null; // Handle case where userData might be null

    return (
        <div>
            <div className='bg-black'>
                <div className='w-screen min-h-screen fixed z-10 flex justify-center px-6 py-40 pointer-events-none overflow-auto'>
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
                    <div className='bg-gradient-to-c from-transparent via-transparent to-black to-70% absolute inset-0 z-20'></div>
                </div>
                <div className='relative z-20'>
                    <NavBar />
                    <div className='overflow-hidden'>
                        <div className="flex flex-col container mx-auto h-screen justify-center">
                            <UserRow user={user} />
                            <TournamentTable />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
