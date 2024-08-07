import React, { useState } from "react";
import { useParams } from "react-router-dom";

const TournamentPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerStats, setPlayerStats] = useState([]);
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Hello from the Tournament Page</h1>
      <p>Tournament ID: {id}</p>
    </div>
  );
};

export default TournamentPage;
