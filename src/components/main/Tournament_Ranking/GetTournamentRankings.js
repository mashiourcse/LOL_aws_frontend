import React, { useState } from 'react';
import axios from 'axios';
import ShowTournamentData from './ShowTournamentData';
import { api } from '../API/api';
import tournamentData from '../API/first_api.json';
import tournamentIdLabel from '../API/final_leagueId_label.json';
import LoadingSpinner from "../../spinner/LoadingSpinner";
import {
  Button
} from "@material-tailwind/react";

const GetTournamentRankings = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState(null);

  const [tournament_id, setTournamentId] = useState('');
  const [tournament_name, setTournamentName] = useState('');
  const [selectedStage, setSelectedStage] = useState('');

  const [stage, setStage] = useState('');
  const [rankings, setRankings] = useState([]);
 
const [isLoading, setIsLoading] = useState(false);
const [errorMessage, setErrorMessage] = useState("");


  const fetchData = async () => {
    try {
      setData(null);
     // const response = await axios.get(`https://xsvtj1vo7a.execute-api.ap-south-1.amazonaws.com/tournament_rankings/${tournament_id}?stage_name=${stage}`);
      const response = await axios.get(`https://xsvtj1vo7a.execute-api.ap-south-1.amazonaws.com/tournament_rankings/${tournament_id}?stage_name=${stage}`);
    
      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }

      setData(response.data);
      setRankings(response.data.teams);
      setTournamentName(response.data.leaguelabel)
      setSelectedStage(stage)
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false)
    }
  };

  const handleButtonClick = async() => {
    setIsLoading(true);
    await fetchData();
  };

  return (
    <div className="p-4" style={{ marginLeft: '167px', paddingBottom: '160px' }}>
      <div id="buttons" style={{ display: 'flex', flexDirection: 'row', marginLeft: '140px', paddingLeft: '20px' }}>
        <div className="mb-4 mr-4">
          <select
            id="tournamentSelect"
            value={tournament_id}
            onChange={(e) => {
              setTournamentId(e.target.value)
              setStage('')
            }}
            className="w-30 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <option value="" disabled selected>
              Select Tournament
            </option>
            {tournamentData.map((tdata, index) => (
              <option key={index} value={tdata.leagueId}>
                {tdata.leagueLabel}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4 mr-4">
          <select
            id="stageSelect"
            value={stage}
            onChange={(e) => setStage(e.target.value)}
            className="w-50 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <option value="" disabled selected>
              Select Stage
            </option>
            {tournamentData
              .find((tdata) => tdata.leagueId === tournament_id)
              ?.stage_name.map((stageName, index) => (
                <option key={index} value={stageName}>
                  {stageName}
                </option>
              ))}
          </select>
        </div>

        <div>
          <Button
            onClick={handleButtonClick}
            className="bg-black hover.bg-blue-700 text-white font-bold py-2 px-4 rounded inline.flex items-center"
            disabled={isLoading}
          >
            Go
          </Button>
        </div>
      </div>
      {isLoading && <LoadingSpinner />}
      {data && !isLoading && (
        <ShowTournamentData
          tournament_name={tournament_name}
          stage={selectedStage}
          rankings={rankings}
        />
      )}
    </div>
  );
};

export default GetTournamentRankings;
