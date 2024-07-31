import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <form className='flex flex-col justify-evenly bg-amber-400 content-center h-full w-1/2 text-center' onSubmit={handleSubmit}>
      <h4 className='text-black font-bold text-xl'>Login to account</h4>

      <label className='mx-auto text-black text-left text-lg font-bold'>
        Username:
        <input className='text-black rounded border-black border-2 w-full' size="100" type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
      </label>

      <label className='mx-auto text-black text-left text-lg font-bold'>
        Password: 
        <input className='text-black rounded border-black border-2 w-full' size="100" type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
      </label>

      <div className="flex justify-around">
      <a href="/" className="text-violet-900 font-bold text-l">Forgot password?</a>
      <a href="/signup" className="text-violet-900 font-bold text-l">Create account</a>
      </div>

      <button className='mx-auto w-fit px-5 py-2 rounded-md text-white font-bold relative bg-black' type="submit">Login</button>
    </form>
  );
};

export default LoginForm;