import React from 'react';

import { Flywheel_Board } from '../../common/Flywheel_Board';

const boardStyle = {
  // display: 'flex',
  
   maxHeight: '500px',  // Adjust the height as needed
  // maxWidth: '800px',
   overflowY: 'auto',
  // marginRight: '500px', 
  // marginLeft: '141px'
};

const ShowTournamentData = ({ rankings }) => {
  const x = 1;

  return (
    <div className="p-4 mb-4 py-4">

      <div id="tournament_fly" className="mt-4" >
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
