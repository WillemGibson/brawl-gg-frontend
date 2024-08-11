import { useEffect, useState } from "react"; // Import React hooks
import { NavLink } from "react-router-dom"; // Import NavLink for navigation
import Logo from "../assets/logo-transparent.svg"; // Import logo image
import { useScroll, useMotionValueEvent } from "framer-motion"; // Import Framer Motion hooks for scroll animation
import { useAuth } from "../contexts/UserContext"; // Import authentication context

export default function NavBar() {
    // Use Framer Motion's useScroll to track scroll position
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false); // State to determine if user has scrolled
    const { logout } = useAuth(); // Function to handle user logout
    const [isAuthenticated, setIsAuthenticated] = useState(false); // State to check if user is authenticated

    // Check if authToken is present in localStorage on component mount
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        setIsAuthenticated(!!token); // Update isAuthenticated state based on token presence
    }, []);

    // Update scrolled state based on scroll position
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 0 && !scrolled) {
            setScrolled(true); // Set scrolled state to true if scrolled down
        } else if (latest === 0 && scrolled) {
            setScrolled(false); // Set scrolled state to false if back at the top
        }
    });

    // Define base classes for the navbar
    const defaultClasses = "transition-all absolute inset-0 -z-1 border-highlight";

    // Conditionally apply classes based on scrolled state
    let navBarClasses = scrolled 
        ? `${defaultClasses} border-b border-highlight bg-black/75 backdrop-blur-lg` 
        : `${defaultClasses} bg-transparent`;

    return <>
        <div className="sticky inset-x-0 top-0 w-full z-50">
            {/* Background navbar with conditional styling */}
            <div className={navBarClasses}></div>
            <div className="mx-auto w-full h-24 max-w-screen=xl px-2.5 lg:px-20 content-center">
                <div className="flex items-center justify-between mt-5 mb-5">
                    {/* Logo link */}
                    <NavLink className="z-20" to="/">
                        <img 
                            src={Logo}
                            alt="logo"
                            className="h-14 w-14 pointer-events-none"
                        />
                    </NavLink>
                    {/* Conditional rendering based on authentication state */}
                    {isAuthenticated ? (
                        <div>
                            <NavLink
                                to="/dashboard"
                                className="mr-5 mx-auto max-w-fit px-5 py-2 rounded-md bg-highlight text-white font-bold cursor-pointer relative hover:bg-amber-500 active:bg-amber-400"
                            >
                                Account
                            </NavLink>
                            <button 
                                className="max-w-fit px-5 py-2 rounded-md text-white font-bold cursor-pointer relative hover:bg-stone-950 active:bg-zinc-950" 
                                onClick={logout} // Logout button
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div>
                            <NavLink 
                                to="/login"
                                className="mr-5 max-w-fit px-5 py-2 rounded-md text-white font-bold cursor-pointer relative hover:bg-stone-950 active:bg-zinc-950"
                            >
                                LOG IN
                            </NavLink>
                            <NavLink
                                to="/signup"
                                className="mx-auto max-w-fit px-5 py-2 rounded-md bg-highlight text-white font-bold cursor-pointer relative hover:bg-amber-500 active:bg-amber-400"
                            >
                                JOIN NOW
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </>
}
