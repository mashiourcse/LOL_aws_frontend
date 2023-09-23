import React from 'react';
import TeamTable from './TeamTable';
import { Flywheel_Board } from '../../common/Flywheel_Board';

const ShowTournamentData = ({ tournament_name, stage, rankings }) => {
  const x = 1;

  return (
    <div className="p-4">
      <p className="text-lg font-bold mb-2">{tournament_name}</p>
      <p className="mb-2">Stage: {stage}</p>
      <h2 className="text-xl font-bold mb-2">Rankings:</h2>

      <div className="mt-4">
        {x ? (
          <Flywheel_Board data={rankings} />
        ) : (
          <div className="text-red-500">x is false</div>
        )}
      </div>
    </div>
  );
};

export default ShowTournamentData;
