import { useState } from 'react';

export default function UserRow({ user }) {
    const [isEditing, setIsEditing ] = useState(false);
    const [username, setUsername ] = useState(user?.userData.username);
    const [email, setEmail ] = useState(user?.userData.email);


    return <>
        <div className="border-white text-highlight border-2 w-full h-[300px] rounded-lg flex flex-col">
            <h1 className="text-white text-4xl pl-5 pt-3">Welcome, <strong>{username}</strong></h1>
        </div>
    </>
}