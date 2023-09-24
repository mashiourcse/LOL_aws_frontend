import React, { useState } from 'react';
import axios from 'axios';
import ShowTournamentData from './ShowTournamentData';
import { api } from '../API/api';

const GetTournamentRankings = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState(null);
  const [tournament_id, setTournamentId] = useState('');
  const [stage, setStage] = useState('');
  const [rankings, setRankings] = useState([]);
 
  const fetchData = async () => {
    try {
      setData(null);
     // const response = await axios.get(`http://localhost:4000/tournament_rankings/${tournament_id}?stage=${stage}`);
      const response = await axios.get(`${api}/tournament_rankings/${tournament_id}?stage=${stage}`);

      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }

      setData(response.data.data);
      setRankings(response.data.data.rankings);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleButtonClick = () => {
    fetchData();
  };

  return (
    <div className="p-4 " >
      <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div className="mb-4 mr-4">
        <label htmlFor="tournamentSelect" className="inline mr-2 mb-1 font-bold">
          Select Tournament:
        </label>
        <select
          id="tournamentSelect"
          value={tournament_id}
          onChange={(e) => setTournamentId(e.target.value)}
          className="w-30 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        >
          <option value="123456789">LPL Summer 2022</option>
          <option value="12345678">LPL Winter 2022</option>
          {/* Add more options as needed */}
        </select>
      </div>


      <div className="mb-4 mr-4">
        <label htmlFor="stageSelect" className="inline mb-1 mr-2 font-bold">
          Select Stage:
        </label>
        <select
          id="stageSelect"
          value={stage}
          onChange={(e) => setStage(e.target.value)}
          className="w-50 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        >
          <option value="final">Final</option>
          <option value="semifinal">Semifinal</option>
          {/* Add more options as needed */}
        </select>
      </div>
      
      <div>
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Fetch Data
      </button>
      </div>
      </div>
      {data ? (
        <>
          <ShowTournamentData
            tournament_name={data.tournament_name}
            stage={data.stage}
            rankings={data.rankings}
          />
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default GetTournamentRankings;
