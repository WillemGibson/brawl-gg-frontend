import React, { useState } from 'react';
import { useUserDispatch } from '../contexts/UserContext';

const ResetPassword = () => {
  const [recoveryCode, setRecoveryCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const { makeResetPasswordRequest } = useUserDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await makeResetPasswordRequest(recoveryCode, newPassword);
      setSuccess("Password reset successfully!");
    } catch (error) {
      setError("Invalid recovery code or password.");
    }
  };

  return (
    <form className='flex flex-col justify-evenly bg-amber-400 content-center h-full w-1/2 text-center' onSubmit={handleSubmit}>
      <h4 className='text-black font-bold text-xl'>Reset Password</h4>

      <label className='mx-auto text-black text-left text-lg font-bold'>
        Recovery Code:
        <input className='text-black rounded border-black border-2 w-full' type="text" value={recoveryCode} onChange={(event) => setRecoveryCode(event.target.value)}/>
      </label>

      <label className='mx-auto text-black text-left text-lg font-bold'>
        New Password:
        <input className='text-black rounded border-black border-2 w-full' type="password" value={newPassword} onChange={(event) => setNewPassword(event.target.value)}/>
      </label>

      {error && <p className="text-red-500 font-bold">{error}</p>}
      {success && <p className="text-black font-bold">{success}</p>}

      <button className='mx-auto w-fit px-5 py-2 rounded-md text-white font-bold relative bg-black' type="submit">
        Reset Password
      </button>
    </form>
  );
};

export default ResetPassword;