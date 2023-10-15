import React, { useState } from 'react';
import axios from 'axios';
import ShowTournamentData from './ShowTournamentData';
import { api } from '../API/api';
import tournamentData from '../API/tournaments_sorted.json';
import tournamentIdLabel from '../API/onlyidlabel.json';

import {
  Button
  
} from "@material-tailwind/react";

const GetTournamentRankings = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState(null);

  const [tournament_id, setTournamentId] = useState('');
  const [tournament_name, setTournamentName] = useState('');
  

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
    <div className="p-4 " style={{marginLeft: '167px', paddingBottom: '160px'}}>
      <div id="buttons" style={{ display: 'flex', flexDirection: 'row', marginLeft: '160px', paddingLeft: '160px' }}>
      <div className="mb-4 mr-4">
        <select
          id="tournamentSelect"
          value={tournament_id}
          onChange={(e) => setTournamentId(e.target.value)}
          className="w-30 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        >
          <option value="" disabled selected>
          Select Tournament
          </option>
      {
        
        tournamentIdLabel.map( (tdata)=>{

            var tid = tdata.leagueId;
            //setTournamentId(tournament_id);
            var tournament_name = tdata.leagueLabel
            return <option value={tid}>{tournament_name}</option> 
           })
      }
         
          {/* <option value="123456789">LPL Summer 2022</option>
          <option value="12345678">LPL Winter 2022</option>
          <option value="12345678">LPL Winter 2022</option> */}
          {/* Add more options as needed */}
        </select>
      </div>


      <div className="mb-4 mr-4">
        
        <select
          id="stageSelect"
          value={stage}
          onChange={(e) => {setStage(e.target.value)}}
          className="w-50 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        >
          <option value="" disabled selected>
          Select Stage
          </option>

          {
            tournamentData.filter((tdata)=>tdata.leagueId == tournament_id  ).map( (tdata)=>{

              //var tournament_id = tdata.leagueId;

              //var stage = tdata.leagueLabel + " " + tdata.leagueName + " " + tdata.stageName;
              var stageName = tdata.leagueName + " " + tdata.stageName;
  
              return <option value={stageName}>{stageName}</option> 
             })
          }
         
          {/* <option value="final">Final</option>
          <option value="semifinal">Semifinal</option>
          <option value="Regular">Regular</option> */}
          {/* Add more options as needed */}
        </select>
      </div>
      
      <div>
      <Button
        onClick={handleButtonClick}
        className="bg-black hover:bg-blue-700  text-white font-bold py-2 px-4 rounded inline-flex items-center"
      >
        Go
      </Button>
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
