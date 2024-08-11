import { useEffect, useState } from 'react'; // Import hooks for state and lifecycle management
import { useNavigate } from 'react-router-dom'; // Import hook for navigation
import NavBar from '../components/Navbar'; // Import navigation bar component
import UserRow from '../components/UserRow'; // Import component to display user details
import TournamentTable from '../components/TournamentTable'; // Import component to display tournament data

export default function Dashboard() {
    const [userData, setUserData] = useState(null); // Initialize state for user data
    const [loading, setLoading] = useState(true); // State to track loading status
    const navigate = useNavigate(); // Hook for programmatic navigation

    useEffect(() => {
        const fetchData = async () => {
            try {
                const localToken = localStorage.getItem('authToken'); // Retrieve token from local storage
                if (!localToken) {
                    navigate('/login'); // Redirect to login if token is not found
                    return;
                }

                // Fetch user data from API
                const response = await fetch('https://brawl-gg-backend.onrender.com/user/dashboard', {
                    method: 'GET',
                    headers: {
                        'jwt': localToken, // Send token in header for authentication
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok'); // Handle unsuccessful responses
                }

                const data = await response.json(); // Parse response data
                setUserData(data); // Update state with fetched data
            } catch (error) {
                console.error('Error:', error); // Log errors
                navigate('/login'); // Redirect to login on error
            } finally {
                setLoading(false); // Set loading to false after data fetching
            }
        };

        fetchData(); // Fetch data when component mounts
    }, [navigate]); // Dependency array ensures effect runs only when navigate changes

    if (loading) {
        return (
            <>
                <div className='w-screen min-h-screen fixed flex justify-center px-6 py-40 pointer-events-none overflow-auto'>
                    {/* Background overlay with grid pattern and gradient */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
                    <div className='bg-gradient-to-c from-transparent via-transparent to-black to-70% absolute inset-0'></div>
                </div>
                <div className='h-screen bg-black flex flex-col justify-center items-center'>
                    <div className='text-4xl font-bold text-highlight'>Loading...</div> {/* Loading indicator */}
                </div>
            </>
        );
    }

    return (
        <div>
            <div className='bg-black h-screen'> {/* Background for the entire screen */}
                <div className='w-screen min-h-screen fixed z-10 flex justify-center px-6 py-40 pointer-events-none overflow-auto'>
                    {/* Background overlay with grid pattern and gradient */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
                    <div className='bg-gradient-to-c from-transparent via-transparent to-black to-70% absolute inset-0 z-20'></div>
                </div>
                <div className='relative z-20'> {/* Main content container with stacking context */}
                    <NavBar /> {/* Render navigation bar */}
                    <div className='overflow-hidden'> {/* Container to handle overflow */}
                        <div className="flex flex-col container mx-auto h-full"> {/* Centered container */}
                            {userData ? (
                                <>
                                    <UserRow user={userData.userData} /> {/* Display user details */}
                                    <TournamentTable user={userData.userData}/> {/* Display tournaments */}
                                </>
                            ) : (
                                <div>No user data available.</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
