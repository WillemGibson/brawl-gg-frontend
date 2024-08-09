import { useEffect, useState } from 'react';
import { useAuth } from '../data/AuthProvider';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar';
import UserRow from '../components/UserRow';
import TournamentTable from '../components/TournamentTable';

export default function Dashboard() {
    const { token, logout } = useAuth();
    const [userData, setUserData] = useState(null);
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

    const user = JSON.stringify(userData.userData, null, 2);

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
                        <div className="container mx-auto h-screen">
                            <UserRow user={user} />
                            <TournamentTable />
                            <button className="mx-auto mt-5 max-w-fit px-5 py-2 rounded-md bg-highlight text-white font-bold cursor-pointer relative hover:bg-amber-500 active:bg-amber-400" onClick={logout}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
