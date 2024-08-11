import { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner"; // Import a spinner for loading state

const JoinPage = () => {
  const { jwt } = useParams(); // Get JWT from URL parameters
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error messages
  const [goToTournament, setGoToTournament] = useState(false); // State to handle redirection
  const [tournamentId, setTournamentId] = useState(""); // State to store the tournament ID
  const navigate = useNavigate(); // Hook for programmatic navigation

  useEffect(() => {
    const joinTournament = async () => {
      try {
        const localToken = localStorage.getItem("authToken"); // Retrieve auth token from local storage
        if (!localToken) {
          navigate("/signup"); // Redirect to signup if no token is found
          return;
        }

        // Fetch request to join the tournament using the JWT from URL
        const response = await fetch(
          `https://brawl-gg-backend.onrender.com/tournament/join/${jwt}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              jwt: localToken, // Pass auth token in headers
            },
          }
        );

        const result = await response.json(); // Parse JSON response
        setTournamentId(result.TournamentId); // Store the tournament ID

        if (result.message === "User is already in the tournament!") {
          navigate(`/tournament/${result.TournamentId}`); // Redirect if the user is already in the tournament
        }

        if (!response.ok) {
          throw new Error(`Failed to join the tournament, ${result.message}`); // Throw error if response is not OK
        }

        setLoading(false); // Set loading to false once the request completes
      } catch (err) {
        console.error("Error:", err); // Log error to the console
        setError(err.message); // Set error message to state
        setLoading(false); // Set loading to false on error
      }
    };

    joinTournament(); // Call the async function to join the tournament
  }, [jwt, navigate]); // Dependencies: re-run effect if jwt or navigate changes

  return (
    <div className="joinTournamentCont flex justify-center items-center bg-black mt-12 min-h-screen">
      {loading && (
        <>
          <h3>Attempting to Join Tournament</h3> {/* Display while loading */}
          <ThreeCircles
            visible={true}
            height="60"
            width="60"
            color="#fbae3c"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}} // Wrapper style (currently empty)
            wrapperClass="" // Wrapper class (currently empty)
          />
        </>
      )}
      {!loading && error && <h4>Error: {error}</h4>} {/* Display error message if loading is false and an error exists */}
      {!loading && !goToTournament && (
        <>
          <h4>Successfully joined the tournament!</h4> {/* Display success message if loading is false and no redirection is needed */}
          <NavLink
            to={`/tournament/${tournamentId}`} // Navigate to the tournament page with the correct tournament ID
            className="mx-auto max-w-fit px-5 py-2 rounded-md bg-highlight text-white font-bold cursor-pointer relative hover:bg-amber-500 active:bg-amber-400"
          >
            JOIN NOW
          </NavLink>
        </>
      )}
    </div>
  );
};

export default JoinPage;
