import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TournamentTable = (props) => {
  // State variables for managing tournaments data, loading state, and error handling
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get the list of tournament IDs from props (default to an empty array if undefined)
  const ids = props.user.yourTournaments || [];
  const navigate = useNavigate(); // Hook for programmatic navigation

  // useEffect hook to fetch tournament data whenever `ids` changes
  useEffect(() => {
    const fetchTournaments = async () => {
      // Early exit if no tournament IDs are available
      if (ids.length === 0) {
        setLoading(false);
        return;
      }

      setLoading(true); // Set loading state to true
      setError(null); // Reset error state

      try {
        // Create an array of fetch promises for each tournament ID
        const fetchPromises = ids.map((id) =>
          fetch(`https://brawl-gg-backend.onrender.com/tournament/${id}`).then(
            (response) => {
              if (!response.ok) {
                throw new Error(`Network response was not ok for ID ${id}`);
              }
              return response.json(); // Parse JSON from the response
            }
          )
        );

        // Wait for all fetch promises to complete
        const results = await Promise.all(fetchPromises);

        // Combine results into a single array and update state
        setTournaments(results);
      } catch (error) {
        // Handle any errors that occur during fetch
        setError(error);
      } finally {
        // Set loading state to false regardless of success or failure
        setLoading(false);
      }
    };

    fetchTournaments(); // Call the async function to fetch tournaments
  }, [ids]); // Dependency array ensures the effect runs when `ids` changes

  // Render loading state
  if (loading) return <div>Loading...</div>;

  // Render error state
  if (error) return <div>Error: {error.message}</div>;

  // Handler for viewing tournament details
  const handleViewTournament = (tournamentId) => {
    navigate(`/tournament/${tournamentId}`); // Navigate to tournament details page
  };

  return (
    <div className="border-2 border-temp-black bg-black text-gray-100 rounded-lg shadow-lg mt-5 mx-auto p-4 max-w-full w-full h-[400px] overflow-y-auto no-scrollbar flex flex-col">
      {tournaments.length > 0 ? (
        <table className="w-full bg-black border border-temp-black rounded-lg">
          <thead>
            <tr className="bg-black text-highlight">
              <th className="px-6 py-3 border-b border-temp-black text-left">
                Name
              </th>
              <th className="px-6 py-3 border-b border-temp-black text-right">
                Game
              </th>
              <th className="px-6 py-3 border-b border-temp-black text-right">
                Players
              </th>
              <th className="px-6 py-3 border-b border-temp-black text-right">
                {/* Empty header for future use or other actions */}
              </th>
            </tr>
          </thead>
          <tbody>
            {tournaments.map((tournament) => (
              <tr
                key={tournament.tournament._id}
                className="hover:bg-temp-black transition-colors duration-300"
              >
                <td className="px-6 py-4 border-b border-temp-black text-left">
                  {tournament.tournament.tournamentName}
                </td>
                <td className="px-6 py-4 border-b border-temp-black text-right">
                  {tournament.tournament.game}
                </td>
                <td className="px-6 py-4 border-b border-temp-black text-right">
                  {tournament.tournament.maximumPlayers}
                </td>
                <td className="px-6 py-4 border-b border-temp-black text-right">
                  <button
                    onClick={() =>
                      handleViewTournament(tournament.tournament._id)
                    }
                    className="px-5 py-2 rounded-md bg-highlight text-white font-bold cursor-pointer hover:bg-[#f8a32a] active:bg-[#e89c1b] transition-colors duration-300"
                  >
                    View Tournament
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center text-highlight py-10">No tournaments found</div>
      )}
    </div>
  );
};

export default TournamentTable;
