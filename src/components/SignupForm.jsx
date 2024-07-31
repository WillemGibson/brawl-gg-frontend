import React, { useState } from 'react';

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password != confirmPassword ) {
            setError('Invalid, Passwords do not match');
        } else {
            console.log('User successfully registered');
        }
    };

    return (
        <form className='flex flex-col justify-evenly bg-amber-400 content-center h-full w-1/2 text-center' onSubmit={handleSubmit}>
            <h4 className='text-black font-bold text-xl'>Register account!</h4>

            <label className='mx-auto text-black text-left text-lg font-bold'>
                Username
                <br />
            <input className='text-black rounded border-black border-2 w-full' size="100" type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
            </label>

            <label className='mx-auto text-black text-left text-lg font-bold'>
                Email:
                <br />
            <input className='text-black rounded border-black border-2 w-full' size="100" type ="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
            </label>

            <label className='mx-auto text-black text-left text-lg font-bold'>
                Password:
                <br />
            <input className='text-black rounded border-black border-2 w-full' size="100" type ="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            </label>

            <label className='mx-auto text-black text-left text-lg font-bold'>
                Confirm password:
                <br />
            <input className='text-black rounded border-black border-2 w-full' size="100" type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}/>
            </label>

            {error && <div style={{ color: 'red' }}>{error}</div>}

            <button className='mx-auto w-fit px-5 py-2 rounded-md text-white font-bold relative bg-black' type="submit">Register</button>

        </form>
    )
}

export default SignupForm;