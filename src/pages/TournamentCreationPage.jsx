import NavBar from '../components/Navbar'; // Import the NavBar component
import TournamentForm from '../components/TournamentForm'; // Import the TournamentForm component

export default function TournamentCreationPage() {
  return (
    <>
      <div className="bg-black h-auto"> {/* Container with a black background and height auto */}
        <NavBar /> {/* Render the navigation bar */}
        
        {/* Background overlay with grid pattern and gradient */}
        <div className='w-screen min-h-screen fixed z-10 flex justify-center px-6 py-40 pointer-events-none overflow-auto'>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div> {/* Grid background with low opacity */}
          <div className='bg-gradient-to-c from-transparent via-transparent to-black to-70% absolute inset-0 z-20'></div> {/* Gradient overlay */}
        </div>
        
        {/* Centering the TournamentForm */}
        <div className="flex flex-col justify-center item-center py-10">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex flex-col items-center">
              <TournamentForm /> {/* Render the TournamentForm component */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
