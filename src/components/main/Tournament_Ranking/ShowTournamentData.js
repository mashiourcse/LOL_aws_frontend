import React from 'react';
import TeamTable from './TeamTable';
import { Flywheel_Board } from '../../common/Flywheel_Board';

const boardStyle = {
  // display: 'flex',
  
   maxHeight: '500px',  // Adjust the height as needed
  // maxWidth: '800px',
   overflowY: 'auto',
  // marginRight: '500px', 
  // marginLeft: '141px'
};

const ShowTournamentData = ({ tournament_name, stage, rankings }) => {
  const x = 1;

  return (
    <div className="p-4 mb-4 py-4">
      <p className="text-lg font-bold mb-2 inline mr-3">{tournament_name}</p>
      <p className="mb-2 inline">Stage: {stage}</p>
      

      <div className="mt-4" style={boardStyle}>
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
