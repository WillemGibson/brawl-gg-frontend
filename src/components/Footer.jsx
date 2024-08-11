import { NavLink } from "react-router-dom"; // Import NavLink for navigation
import Logo from "../assets/logo-transparent.svg"; // Import logo image

export default function Footer() {
    return (
        <>
            {/* Sticky footer container */}
            <div className="sticky inset-x-0 top-0 w-full z-50 overflow-hidden">
                {/* Footer styling and layout */}
                <div className="mx-auto w-full h-24 max-w-screen-xl px-2.5 lg:px-20 content-center bg-black">
                    <div className="flex items-center justify-between mt-5 mb-5">
                        {/* Logo */}
                        <img 
                            src={Logo}
                            alt="logo" // Alt text for the logo image
                            className="h-10 w-10 pointer-events-none" // Prevent pointer events on the logo
                        />
                        
                        {/* Footer copyright text */}
                        <p className="absolute left-0 right-0 text-white text-center">© Brawlz.gg 2024</p>
                        
                        {/* Links for Privacy Policy and Terms of Service */}
                        <div>
                            <NavLink 
                                to="/privacy"
                                className="mx-auto max-w-fit px-2 py-2 text-white text-xs"
                            >
                                Privacy Policy
                            </NavLink>
                            <NavLink
                                to="/tos"
                                className="mx-auto max-w-fit px-2 py-2 text-white text-xs"
                            >
                                Terms of Service
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
