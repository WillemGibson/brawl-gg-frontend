import Swal from 'sweetalert2'; // Import SweetAlert2 for displaying alerts
import Rpg from '../assets/characters/rpg.png'; // Import RPG character image
import Fps from '../assets/characters/fps.png'; // Import Fantasy Creature image

// Define the ContactSection component
export default function ContactSection() {
    // Handle form submission
    const onSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const formData = new FormData(event.target); // Create FormData object from the form

        formData.append("access_key", "61b94629-eb7a-4571-85c8-238ffe6bb15d"); // Append API access key to the form data

        // Send form data to the API endpoint
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST", // HTTP method
            body: formData // Attach form data to the request
        });

        const data = await response.json(); // Parse the JSON response

        // Show success alert if the response indicates success
        if (data.success) {
            Swal.fire({
                title: "Success!", // Alert title
                text: "Message sent successfully!", // Alert message
                icon: "success", // Alert icon
                background: "#000000", // Background color of the alert
                iconColor: "#fbae3c", // Color of the icon
                color: "#fff", // Text color
                confirmButtonColor: "#fbae3c" // Color of the confirm button
            });
        }
    };

    return (
        <>
            {/* Main section of the contact form */}
            <section className="relative h-[750px] mt-28">
                <div className='absolute mx-auto left-0 right-0 top-0 bottom-0'>
                    {/* Form container */}
                    <div className='absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center min-h-full z-20'>
                        {/* Contact form */}
                        <form onSubmit={onSubmit} className='max-w-[600px] w-full bg-black p-6 rounded-lg shadow-2xl text-white m-6'> 
                            <h2 className="text-center text-3xl font-extrabold leading-[1.15] sm:text-5xl">
                                Contact Us
                            </h2>
                            <div className="input-box mt-2">
                                <label>Full Name:</label>
                                <input type="text" className='w-full h-[50px] bg-transparent border-2 border-highlight rounded-lg outline-none p-4 text-sm mt-2' placeholder='Enter your name' name='name' required />
                            </div>
                            <div className="input-box mt-2">
                                <label>Email Address:</label>
                                <input type="email" className='w-full h-[50px] bg-transparent border-2 border-highlight rounded-lg outline-none p-4 text-sm mt-2' placeholder='Enter your email' name='email' required />
                            </div>
                            <div className="input-box mt-2">
                                <label>Your Message:</label>
                                <textarea name="message" className="w-full h-[200px] bg-transparent border-2 border-highlight rounded-lg outline-none p-4 text-sm mt-2" placeholder='Enter your message' required />
                            </div>
                            <button type="submit" className='w-full h-14 bg-highlight border-none rounded-lg shadow-lg cursor-pointer text-sm font-medium mt-6 hover:bg-amber-500 active:bg-amber-400'>Send Message</button>
                        </form>
                    </div>
                    {/* Decorative images */}
                    <div className='z-0'>
                        <img 
                            src={Rpg}
                            alt="RPG Character" // Alternative text for the image
                            className='absolute pointer-events-none -left-[375px] top-16 brightness-75 h-[1000px] scale-x-[-1] overflow-hidden'
                        />
                        <img 
                            src={Fps}
                            alt="Fantasy Creature" // Alternative text for the image
                            className='absolute pointer-events-none top-0 -right-56 brightness-75 h-full overflow-hidden'
                        />
                    </div>
                </div>
            </section>
        </>
    );
}