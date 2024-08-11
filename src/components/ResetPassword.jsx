import { useState } from 'react'; // Import React and useState hook
import { useUserDispatch } from '../contexts/UserContext'; // Import context for user-related actions
import { useNavigate } from 'react-router-dom'; // Import hook for navigation

const ResetPassword = () => {
  const [passcode, setPasscode] = useState(''); // State to store the passcode
  const [newPassword, setNewPassword] = useState(''); // State to store the new password
  const [error, setError] = useState(null); // State to handle error messages
  const [success, setSuccess] = useState(false); // State to handle success messages

  const { makeResetPasswordRequest } = useUserDispatch(); // Function to handle password reset request
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setError(null); // Reset error message
    setSuccess(false); // Reset success message
  
    // Check if both passcode and new password are provided
    if (!passcode || !newPassword) {
      setError("Passcode and new password cannot be empty.");
      return;
    }
  
    try {
      // Attempt to reset the password using provided passcode and new password
      await makeResetPasswordRequest(passcode, newPassword);
      setSuccess(true); // Set success message
      // Redirect to login page after a short delay
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      setError(error.message); // Display any error that occurs
    }
  };

  return (
    <form 
      className='flex flex-col justify-center bg-black text-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto z-10 border-temp-black border-2' 
      onSubmit={handleSubmit}
    >
      <h4 className='text-black font-bold text-xl'>Reset Password</h4>

      <label className='text-left text-lg font-bold mb-4'>
        Passcode:
        <input
          className='mt-2 w-full px-4 py-2 bg-black border border-temp-black rounded-md text-white placeholder-white/50 focus:border-[#fbae3c] focus:outline-none'
          size="100"
          type="text"
          value={passcode}
          onChange={(event) => setPasscode(event.target.value)}
        />
      </label>

      <label className='text-left text-lg font-bold mb-4'>
        New Password:
        <input
          className='mt-2 w-full px-4 py-2 bg-black border border-temp-black rounded-md text-white placeholder-white/50 focus:border-[#fbae3c] focus:outline-none'
          size="100"
          type="password"
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
        />
      </label>

      <div className="flex justify-around">
        <a href="/login" className="text-hightlight hover:underline text-l mb-2">Back to login</a>
      </div>

      {error && <p className="text-red-500 font-bold">{error}</p>}
      {success && <p className="text-highlight font-bold">Password reset successfully! Redirecting to login page...</p>}

      <button 
        className='mx-auto w-full px-5 py-2 rounded-md bg-[#fbae3c] text-white font-bold hover:bg-[#f8a32a] active:bg-[#e89c1b] transition-colors duration-300' 
        type="submit"
      >
        Reset Password
      </button>
    </form>
  );
};

export default ResetPassword;
