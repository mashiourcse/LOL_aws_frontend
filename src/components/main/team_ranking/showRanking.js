import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {  Button} from "@material-tailwind/react";
import { Flywheel_Board } from '../../common/Flywheel_BoardTR';
import { MyContext } from './context/MyContext';
import tournamentData from './data/tournament_map.json';
import { useContext } from 'react';

  
const buttonStyle = {
  marginLeft: '42.5rem'
}
const carouselDiv = {
    // background: 'red',
    width: '100%',
    marginLeft: '150px',
    
}



export const ShowRanking = ()=>{
  console.log(tournamentData);
  let { responseData} = useContext(MyContext);
  
    const [num, setNum] = useState(0);
    const [showNum, setShowNum] = useState(1);
    const [tournament_name, setTournament_name] = useState('');
    
    function getTournamentName(leagueId) {

      console.log(tournamentData);
      for (const item of tournamentData) {
        if (item.leagueId === leagueId) {
          console.log(leagueId);
          return item.tournament_name;
        }
        
      }
      return null; // Return null if no match is found
    }

    const handleNumChange = (event) => {
        const inputValue = event.target.value;
        const dataLen= responseData.length;
        if(inputValue < dataLen && inputValue >= 0){
          setNum(inputValue);
          setShowNum(parseInt(num+1))
        }
          
        console.log();
      };

      const [maxValue, setMaxValue] = useState(responseData.length); // Example: Set the maximum value to 10, replace with your dataset length

      const handleIncrement = () => {
        setNum(prevNum => (prevNum < maxValue-1 ? prevNum + 1 : prevNum));
      };
    
      const handleDecrement = () => {
        setNum(prevNum => (prevNum > 0 ? prevNum - 1 : prevNum));
      };
    
      useEffect(() => {
        // Update the maximum value whenever the dataset length changes
        // Replace 10 with the actual length of your dataset
        setMaxValue(responseData.length);
        console.log(responseData)
        
      }, [maxValue]);
    

    return <div>    
    <div className='mt-4 mb-4 ml-40'>
    <button
          onClick={handleDecrement}
          // disabled={currentPage === totalPages}
          className="px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

        </button>
      <button
          onClick={handleIncrement}
         // disabled={currentPage === totalPages}
          className="ml-2 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
        </button>
    {/* <input className="shadow appearance-none border rounded text-lg w-[10%] py-2 px-3 mt-4 mb-4 ml-40  text-gray-700 text-white leading-tight focus:outline-none focus:shadow-outline" type="number" value={num} onChange={handleNumChange} />
        */}
        </div>
    <div style={carouselDiv}>
    
        {responseData.map((tournament, index) => {
          
          let tournamentName = getTournamentName(tournament.tournament_id);
          console.log(tournamentName)
          if(index==num){
           // setTournament_name(tournament.tournament_name)
          return <div  key={index}>
            <div >
            <Flywheel_Board key={index} data={tournament.team_rankings} 
            name={tournamentName} 
            //name={tournamentName}
            index={index} />
        </div>
          </div>
          }
        })}
    
    </div>
    </div>
}
