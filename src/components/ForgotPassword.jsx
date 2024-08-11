import { useState } from 'react'; // Import React and useState hook
import { useUserDispatch } from '../contexts/UserContext'; // Import context hook for user dispatch
import { useNavigate } from 'react-router-dom'; // Import hook for navigation

const ForgotPassword = () => {
  const [email, setEmail] = useState(''); // State for storing email input
  const [error, setError] = useState(null); // State for storing error messages
  const [success, setSuccess] = useState(null); // State for storing success messages
  const navigate = useNavigate(); // Hook to navigate to other routes

  const { makeForgotPasswordRequest } = useUserDispatch(); // Destructure function to make forgot password request

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      const result = await makeForgotPasswordRequest(email.toString()); // Call the forgot password request function
      console.log(result); // Log the result for debugging
      setSuccess("Password reset email sent successfully! Check email for recovery code"); // Set success message
      setTimeout(() => {
        navigate('/reset-password'); // Navigate to reset password page after a short delay
      }, 2000);
    } catch (error) {
      console.error('Error:', error); // Log error for debugging
      if (error.message === "Email not found") {
        setError("Email not found. Please try again."); // Set error message for email not found
      } else {
        setError("Error occurred while sending password recovery code."); // Set generic error message
      }
    }
  };

  return (
    <form 
      className='flex flex-col justify-center bg-black text-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto z-10 border-temp-black border-2' 
      onSubmit={handleSubmit}
    >
      <label className='text-left text-lg font-bold mb-4'>
        Email:
        <input 
          className='mt-2 w-full px-4 py-2 bg-black border border-temp-black rounded-md text-white placeholder-white/50 focus:border-[#fbae3c] focus:outline-none' 
          size="100" 
          type="email" 
          value={email} 
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>

      {/* Display error message if there is one */}
      {error && <p className="text-red-500 font-bold">{error}</p>}
      {/* Display success message if there is one */}
      {success && <p className="text-highlight font-bold">{success}</p>}

      {/* Submit button */}
      <button 
        className='mx-auto w-full px-5 py-2 rounded-md bg-[#fbae3c] text-white font-bold hover:bg-[#f8a32a] active:bg-[#e89c1b] transition-colors duration-300' 
        type="submit"
      >
        Send Email
      </button>
    </form>
  );
};

export default ForgotPassword; // Export the component
