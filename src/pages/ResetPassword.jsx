import NavBar from '../components/Navbar'; // Import the NavBar component
import ResetPassword from '../components/ResetPassword'; // Import the ResetPassword component

export default function ResetPasswordPage() {

    return (
        <>
        <div className='bg-black'> {/* Black background for the entire page */}
            <NavBar /> {/* Render the navigation bar at the top */}
            <div className='flex flex-col justify-center items-center h-[850px]'> {/* Centered container for the reset password form */}
                <h2 className="text-center text-white text-3xl font-extrabold m-6 leading-[1.15] sm:text-5xl">
                    Reset Password {/* Heading for the reset password page */}
                </h2>
                <ResetPassword /> {/* Render the ResetPassword component */}
                <div className='w-screen min-h-screen fixed flex justify-center px-6 py-40 pointer-events-none overflow-auto'> {/* Overlay background */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div> {/* Grid background image with low opacity */}
                    <div className='bg-gradient-to-c from-transparent via-transparent to-black to-70% absolute inset-0'></div> {/* Gradient overlay */}
                </div>
            </div>
        </div>
        </>
    )
}
