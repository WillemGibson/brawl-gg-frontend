import { useEffect, useState } from 'react'; // Import React hooks for side effects and state management
import NavBar from '../components/Navbar'; // Import NavBar component
import HeroSection from '../components/HeroSection'; // Import HeroSection component
import { partnersLogo } from '../data/partners'; // Import partners' logos data
import Slider from '../components/Slider'; // Import Slider component
import FeaturesSection from '../components/FeaturesSection'; // Import FeaturesSection component
import Footer from '../components/Footer'; // Import Footer component
import ContactSection from '../components/ContactSection'; // Import ContactSection component

export default function LandingPage() {
    const [message, setMessage] = useState(null); // State to hold fetched message

    useEffect(() => {
        // Fetch data from the server when the component mounts
        fetch('https://brawl-gg-backend.onrender.com/', {
            method: 'GET'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok'); // Throw error if network response is not OK
            }
            return response.json(); // Parse response as JSON
        })
        .then(response => {
            setMessage(response); // Set the fetched message to state
        })
        .catch(error => {
            console.error('Error:', error); // Log any errors to the console
        });
    }, []); // Empty dependency array ensures this effect runs only once

    useEffect(() => {
        if (message) {
            console.log(JSON.stringify(message, null, 2)); // Log the message when it changes
        }
    }, [message]); // Dependency array with 'message' ensures this effect runs when 'message' changes

    return (
        <>
            <div className='bg-black'>
                <div className='w-screen min-h-screen fixed z-10 flex justify-center px-6 py-40 pointer-events-none overflow-auto'>
                    {/* Background effects */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
                    <div className='bg-gradient-to-c from-transparent via-transparent to-black to-70% absolute inset-0 z-20'></div>
                </div>
                <div className='relative z-20'>
                    {/* Main content */}
                    <NavBar /> {/* Navigation bar */}
                    <div className='overflow-hidden'>
                        <div className="container mx-auto">
                            <HeroSection /> {/* Hero section */}
                            <Slider images={partnersLogo} /> {/* Slider with partners' logos */}
                            <FeaturesSection /> {/* Features section */}
                            <ContactSection /> {/* Contact section */}
                        </div>
                        <Footer /> {/* Footer */}
                    </div>
                </div>
            </div>
        </>
    );
}
