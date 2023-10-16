import React from 'react';
import { Flywheel_Board } from '../../common/Flywheel_Board';

const boardStyle = {
  
   maxHeight: '500px',  // Adjust the height as needed
  
   overflowY: 'auto',
  
};

const carouselDiv = {
  
  width: '100%',
  marginLeft: '150px',
  
}

const ShowTournamentData = ({ tournament_name, stage, rankings }) => {
  const x = 1;

  return (
    <div className="p-4 mb-4 py-4">

      <div id='buttonId' style={{marginLeft: '70px', paddingLeft: '80px', paddingBottom: '5px'}}>
      <span className="ml-2 px-3 py-3 mr-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500">{tournament_name} </span>
      <span className="ml-2 px-3 py-3 mr-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500">{stage}</span>
      </div>

      <div id="tournament_fly" className="mt-4" >
      <div style={carouselDiv}>     
    <div >
      
    <Flywheel_Board data={rankings}  />
</div>
  </div>
      </div>
    </div>
  );
};

export default ShowTournamentData;
