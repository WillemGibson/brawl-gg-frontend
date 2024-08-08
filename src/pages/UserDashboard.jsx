import { useState, useEffect } from "react";
import NavBar from "../components/Navbar"

export default function PageNotFound() {
    const [ UserData, setUserData ] = useEffect(); // STATE TO HOLD USER DATA 
    const [tournamentData, setTournamentData] = useState(); // STATE TO HOLD TOURNAMENT DATA 



	return <>
		<section className="relative h-screen flex flex-col bg-black">
            <NavBar />
                <div className='absolute bottom-0 right-0 left-0 flex justify-center items-center min-h-full z-20'>
                    <div className='flex flex-col justify-center items-center max-w-[1250px] max-h-[1250px] h-full w-full p-6 rounded-lg shadow-2xl text-white m-6 bg-black'>
						
                    </div>
                </div>
		</section>
	</>
}