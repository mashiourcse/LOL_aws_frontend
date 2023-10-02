import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { Flywheel_Board } from '../../common/Flywheel_Board';

import tournamentData from './tournament.json';

const data = tournamentData.data;


const boardStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '400px',  // Adjust the height as needed
    overflowY: 'auto',
    marginLeft: '150px',
  };
  
const buttonStyle = {
  marginLeft: '42.5rem'
}
const carouselDiv = {
    // background: 'red',
    width: '100%',
    marginLeft: '150px',
    
}



export const ShowRanking = ()=>{

    const [num, setNum] = useState(0);

    const handleNumChange = (event) => {
        const inputValue = event.target.value;
        const dataLen= data.length;
        if(inputValue < dataLen && inputValue >= 0)
          setNum(inputValue);
        console.log(data);
      };

    
    return <div>    
    <div>
    <input className="shadow appearance-none border rounded w-[10%] py-2 px-3 mt-4 mb-4 ml-40 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" value={num} onChange={handleNumChange} />
        </div>
    <div style={carouselDiv}>
    
        {data.map((tournament, index) => {
          
          if(index==num){
            return <div  key={index}>
    
            <p> {tournament.tournament_name} </p>
            <br/>
            <div >
            <Flywheel_Board data={tournament.rankings}/>
        </div>
          </div>
          }
        })}
    
    </div>
    </div>
}
