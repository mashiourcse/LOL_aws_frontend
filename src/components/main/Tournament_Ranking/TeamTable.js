import React from 'react';

const TeamTable = ({ data }) => {
  return (
    <div className='team_table'>
      <h2>Team Rankings</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Team Code</th>
            <th>Team Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((team, index) => (
            <tr key={team.team_id}>
              <td>{team.rank}</td>
              <td>{team.team_code}</td>
              <td>{team.team_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamTable;
