import React from "react";
import UserRow from "./UserRow"; // IMPORT USERROW COMPONENT

const TournamentTable = ({
  team,
  players,
  gameStats,
  isEditing,
  onStatChange,
}) => {
  return (
    <table>
      <tbody>
        {/* RENDER TEAM HEADER ROW */}
        <tr>
          <td colSpan={gameStats.length} className="team-header">
            {team}
          </td>
        </tr>
        {/* RENDER COLUMN HEADERS BASED ON GAME STATS */}
        <tr>
          {gameStats.map((stat) => (
            <th key={stat}>{stat.charAt(0).toUpperCase() + stat.slice(1)}</th> // RENDER EACH STAT HEADER
          ))}
        </tr>
        {/* RENDER EACH PLAYER ROW */}
        {players.map((userStat, playerIndex) => (
          <UserRow
            key={userStat.player + playerIndex}
            userData={userStat}
            gameStats={gameStats}
            isEditing={isEditing}
            onStatChange={onStatChange}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TournamentTable;
