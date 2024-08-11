import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function UserRow({ user }) {
    // State to manage whether the user is editing their profile or not
    const [isEditing, setIsEditing] = useState(false);
    // State to store and update user information
    const [userInfo, setUserInfo] = useState({
        username: user?.username || '',
        email: user?.email || '',
        password: user?.password || ''
    });
    // State to manage loading state and error handling
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Hook for programmatic navigation

    // Handler for changes in input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prev) => ({ ...prev, [name]: value }));
    };

    // Handler for saving or toggling edit mode
    const saveEditHandler = async () => {
        if (isEditing) {
            try {
                // Retrieve token from local storage for authorization
                const localToken = localStorage.getItem('authToken');
                if (!localToken) {
                    navigate('/login'); // Redirect to login if token is not present
                    return;
                }

                setLoading(true); // Set loading state to true before making API call

                // Make a PATCH request to update user information
                const response = await fetch('https://brawl-gg-backend.onrender.com/user', {
                    method: 'PATCH',
                    headers: {
                        'jwt': localToken,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userInfo) // Send updated user info in request body
                });

                if (!response.ok) {
                    throw new Error('Failed to update user'); // Handle non-OK responses
                }

                alert('Profile updated successfully'); // Notify user of success
            } catch (err) {
                setError(err.message); // Set error message if something goes wrong
            } finally {
                setLoading(false); // Reset loading state
                setIsEditing(false); // Exit edit mode
            }
        } else {
            setIsEditing(true); // Enter edit mode
        }
    };

    return (
        <>
            {/* Welcome header and link to create a new tournament */}
            <div className='flex flex-row justify-between items-center'>
                <h1 className="text-white text-4xl py-10 flex items-start">
                    Welcome,<strong className="text-highlight">{userInfo.username}</strong>
                </h1>
                <NavLink
                    to="/tournament-creation"
                    className="mr-5 mx-auto max-w-fit px-5 py-2 rounded-md bg-highlight text-white font-bold cursor-pointer relative hover:bg-amber-500 active:bg-amber-400"
                >
                    Create New Tournament
                </NavLink>
            </div>

            {/* User profile information and editing form */}
            <div className="border-2 border-temp-black bg-black text-white w-full h-[300px] rounded-lg flex flex-col p-4 mb-5">
                <table className="w-auto border-collapse">
                    <tbody className="text-lg">
                        {/* Email row */}
                        <tr>
                            <td className="py-6 px-6 text-left border-b border-temp-black text-highlight"><strong>Email:</strong></td>
                            <td className="py-6 px-6 text-right border-b border-temp-black">
                                {!isEditing ? (
                                    userInfo.email
                                ) : (
                                    <input
                                        type="email"
                                        name="email"
                                        value={userInfo.email}
                                        onChange={handleChange}
                                        className="bg-white text-black border border-temp-black rounded-md px-3 py-1 focus:border-[#fbae3c] outline-none"
                                    />
                                )}
                            </td>
                        </tr>
                        {/* Password row */}
                        <tr>
                            <td className="py-6 px-6 text-left border-b border-temp-black text-highlight"><strong>Password:</strong></td>
                            <td className="py-6 px-6 text-right border-b border-temp-black">
                                {!isEditing ? (
                                    '***********************'
                                ) : (
                                    <input
                                        type="password"
                                        name="password"
                                        value={userInfo.password}
                                        onChange={handleChange}
                                        className="bg-white text-black border border-temp-black rounded-md px-3 py-1 focus:border-[#fbae3c] outline-none"
                                    />
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Button to toggle edit mode or save changes */}
                <div className="flex justify-end mt-auto">
                    {loading ? (
                        <p className="text-highlight">Loading...</p>
                    ) : (
                        <button
                            className="px-5 py-2 rounded-md bg-highlight text-white font-bold cursor-pointer hover:bg-[#f8a32a] active:bg-[#e89c1b] transition-colors duration-300"
                            onClick={saveEditHandler}
                        >
                            {isEditing ? 'Save' : 'Edit Profile'}
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}
