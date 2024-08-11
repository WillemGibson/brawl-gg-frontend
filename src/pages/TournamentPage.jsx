import DisplayTournamentStats from "../components/DisplayTournamentStats"; // Import the component to display tournament stats
import Navbar from "../components/Navbar"; // Import the navigation bar component

const TournamentPage = () => {
  return (
    <>
      <div className="bg-black h-screen"> {/* Black background that covers the entire viewport height */}
        
        {/* Background overlay with grid pattern and gradient */}
        <div className='w-screen min-h-screen fixed z-10 flex justify-center px-6 py-40 pointer-events-none overflow-auto'>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div> {/* Grid background with low opacity */}
          <div className='bg-gradient-to-c from-transparent via-transparent to-black to-70% absolute inset-0 z-20'></div> {/* Gradient overlay */}
        </div>
        
        {/* Main content area with relative positioning to stack elements properly */}
        <div className="relative z-20">
          <Navbar /> {/* Render the navigation bar at the top */}
          
          <div className="overflow-hidden"> {/* Container with overflow hidden to ensure content doesn't spill out */}
            <div className="flex flex-col container mx-auto h-full"> {/* Centered flex container for content */}
              <DisplayTournamentStats /> {/* Render the tournament stats component */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TournamentPage;
