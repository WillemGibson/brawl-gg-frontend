import NavBar from '../components/Navbar'; // Import the NavBar component
import SignupForm from '../components/SignupForm'; // Import the SignupForm component

export default function SignupPage() {

    return (
        <>
        <div className='bg-black'> {/* Set a black background for the entire page */}
            <NavBar /> {/* Render the navigation bar at the top */}
            <div className='flex justify-center items-center h-[850px]'> {/* Center the signup form within a container with fixed height */}
                <SignupForm /> {/* Render the SignupForm component */}
                <div className='w-screen min-h-screen fixed flex justify-center px-6 py-40 pointer-events-none overflow-auto'> {/* Overlay background */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div> {/* Grid pattern background with low opacity */}
                    <div className='bg-gradient-to-c from-transparent via-transparent to-black to-70% absolute inset-0'></div> {/* Gradient overlay effect */}
                </div>
            </div>
        </div>
        </>
    )
}
