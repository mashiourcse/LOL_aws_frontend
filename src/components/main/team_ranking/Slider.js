import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Leaderboard } from 'flywheel-leaderboard';
import tournamentData from './tournament.json';

const data = tournamentData.data;

export const Slider = () => {
  return (
    <div className="h-[50%] w-[50%] bg-white">
      <AwesomeSlider>
        {data.map((tournament, index) => (
          <div key={index}>
            
            <p>Tournament Name: {tournament.tournament_name}</p>
            <br/>
            <Leaderboard 
        className='max-w-4xl' //tailwind class (optional)
        theme='amber' //leaderboard theme. see docs for accepted values (optional)
      //  scoringMetric="rank" //the property you wanna rank your data by (required)
        //id="_id" //the property you wanna id each item in your data by (required)
        cell1="team_id" //the first cell for your board (optional)
        cell2="team_code" //...
        cell3="team_name" //...
        cell4="rank" //...
        items={tournament.rankings} //the data you wanna use for your board. e.g. db response. (required)
        > 
      </Leaderboard>
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
};
