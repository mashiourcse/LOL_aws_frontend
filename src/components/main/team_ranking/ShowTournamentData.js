import React from 'react';
import TeamTable from './TeamTable';

const ShowTournamentData = ({ tournament_name, stage, rankings }) => {
  
  const x = 1;

  return (
    <div>
      <h1>Tournament Data:</h1>
      <p>Tournament Name: {tournament_name}</p>
      <p>Stage: {stage}</p>
      <h2>Rankings:</h2>
      {/* {rankings && rankings.length > 0 ? (
        <ul>
          {rankings.map((ranking, index) => (
            <li key={index}>{ranking.team_name} - Rank: {ranking.rank}</li>
          ))}

        </ul>
      ) : (
        <p>No rankings available.</p>
      )} */}
      {
        (x)? <TeamTable data={rankings}></TeamTable> :""
      }
      
    </div>
  );
};

export default ShowTournamentData;
