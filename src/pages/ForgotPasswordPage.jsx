import NavBar from '../components/Navbar'; // Import the NavBar component for the page header
import ForgotPassword from '../components/ForgotPassword'; // Import the ForgotPassword component for the password reset functionality

export default function ForgotPasswordPage() {
    return (
        <>
            <div className='bg-black'> {/* Main container with black background */}
                <NavBar /> {/* Render the navigation bar at the top of the page */}
                <div className='flex flex-col justify-center items-center h-[850px]'> {/* Center the content vertically and horizontally */}
                    <h2 className="text-center text-white text-3xl font-extrabold m-6 leading-[1.15] sm:text-5xl">
                        Forgot Password {/* Page title */}
                    </h2>
                    <ForgotPassword /> {/* Render the ForgotPassword component */}
                    <div className='w-screen min-h-screen fixed flex justify-center px-6 py-40 pointer-events-none overflow-auto'>
                        {/* Fixed background overlay for styling, positioned behind other content */}
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div> {/* Light grid background */}
                        <div className='bg-gradient-to-c from-transparent via-transparent to-black to-70% absolute inset-0'></div> {/* Gradient overlay for visual effect */}
                    </div>
                </div>
            </div>
        </>
    );
}
