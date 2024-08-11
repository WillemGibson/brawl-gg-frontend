import NavBar from '../components/Navbar'; // Import the NavBar component
import LoginForm from '../components/LoginForm'; // Import the LoginForm component

export default function LoginPage() {

    return (
        <>
            <div className='bg-black'> {/* Container with a black background */}
                <NavBar /> {/* Navigation bar at the top */}
                <div className='flex justify-center items-center h-[850px]'> {/* Centered container for the login form */}
                    <LoginForm /> {/* Login form component */}
                    {/* Background overlay with fixed position */}
                    <div className='w-screen min-h-screen fixed flex justify-center px-6 py-40 pointer-events-none overflow-auto'>
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div> {/* Grid background pattern */}
                        <div className='bg-gradient-to-c from-transparent via-transparent to-black to-70% absolute inset-0'></div> {/* Gradient overlay */}
                    </div>
                </div>
            </div>
        </>
    );
}
