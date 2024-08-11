/* eslint-disable react/no-unescaped-entities */ // Disable eslint rule for unescaped characters in JSX

import NavBar from "../components/Navbar"; // Import the NavBar component
import Error from "../assets/icons/error.svg"; // Import the error icon image

export default function PageNotFound() {
    return (
        <>
            <section className="relative h-screen flex flex-col bg-black"> {/* Full-height section with a black background */}
                <NavBar /> {/* Render the navigation bar at the top */}
                <div className='absolute bottom-0 right-0 left-0 flex justify-center items-center min-h-full z-20'> {/* Centered container for the error message */}
                    <div className='flex flex-col justify-center items-center max-w-[1250px] w-full p-6 rounded-lg shadow-2xl text-white m-6'> {/* Container with styling for the error message */}
                        <img
                            src={Error} // Error icon image
                            alt="Error Icon" // Alt text for accessibility
                            className="h-[150px] pointer-events-none" // Set the height and disable pointer events for the image
                        />
                        <h2 className="mt-12 text-center text-3xl font-extrabold leading-[1.15] sm:text-5xl"> {/* Error message heading */}
                            It seems you've made an ERROR 404
                        </h2>
                    </div>
                </div>
            </section>
        </>
    );
}
