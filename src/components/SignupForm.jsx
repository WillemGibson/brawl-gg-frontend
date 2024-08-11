import { useState } from 'react'; // Import React's useState hook
import { useUserDispatch } from '../contexts/UserContext'; // Import context for user-related actions
import { useNavigate } from 'react-router-dom'; // Import hook for programmatic navigation

const SignupForm = () => {
  // State variables for form inputs and messages
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  
  // Function from context to handle signup
  const { makeSignupRequest } = useUserDispatch();
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    
    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setError('Invalid, Passwords do not match');
      setSuccess(null);
    } else {
      try {
        // Attempt to register the user
        await makeSignupRequest(username, email, password);
        console.log({ username, email, password });
        console.log('Sign up successful');
        
        setError(null);
        setSuccess('Sign up successful, redirecting to login page...');
        
        // Redirect to login page after a short delay
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } catch (error) {
        // Handle any errors that occur during signup
        setError('Error occurred during signup');
      }
    }
  };

  return (
    <form
      className="flex flex-col justify-center bg-black text-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto z-10 border-temp-black border-2"
      onSubmit={handleSubmit} // Handle form submission
    >
      <h4 className="text-[#fbae3c] font-extrabold text-2xl mb-6 text-center">
        Register
      </h4>

      {/* Username Input */}
      <label className="text-left text-lg font-bold mb-4">
        <span className="text-white">Username:</span>
        <input
          className="mt-2 w-full px-4 py-2 bg-black border border-temp-black rounded-md text-white placeholder-white/50 focus:border-[#fbae3c] focus:outline-none"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Enter your username"
        />
      </label>

      {/* Email Input */}
      <label className="text-left text-lg font-bold mb-4">
        <span className="text-white">Email:</span>
        <input
          className="mt-2 w-full px-4 py-2 bg-black border border-temp-black rounded-md text-white placeholder-white/50 focus:border-[#fbae3c] focus:outline-none"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
        />
      </label>

      {/* Password Input */}
      <label className="text-left text-lg font-bold mb-4">
        <span className="text-white">Password:</span>
        <input
          className="mt-2 w-full px-4 py-2 bg-black border border-temp-black rounded-md text-white placeholder-white/50 focus:border-[#fbae3c] focus:outline-none"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter your password"
        />
      </label>

      {/* Confirm Password Input */}
      <label className="text-left text-lg font-bold mb-4">
        <span className="text-white">Confirm Password:</span>
        <input
          className="mt-2 w-full px-4 py-2 bg-black border border-temp-black rounded-md text-white placeholder-white/50 focus:border-[#fbae3c] focus:outline-none"
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          placeholder="Confirm your password"
        />
      </label>

      {/* Display error or success messages */}
      {error && <p className="text-red-500 font-bold mb-4 text-center">{error}</p>}
      {success && <p className="text-highlight font-bold mb-4 text-center">{success}</p>}

      {/* Submit Button */}
      <button
        className="mx-auto w-full px-5 py-2 rounded-md bg-[#fbae3c] text-white font-bold hover:bg-[#f8a32a] active:bg-[#e89c1b] transition-colors duration-300"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};

export default SignupForm;
