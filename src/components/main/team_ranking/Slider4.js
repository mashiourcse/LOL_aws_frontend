import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from '@trendyol-js/react-carousel';

import { Leaderboard } from 'flywheel-leaderboard';
import tournamentData from './tournament.json';

const data = tournamentData.data;

const boardStyle = {
    display: 'flex',
    marginLeft: '150px',
    
}

const carouselDiv = {
    // background: 'red',
    width: '100%',
    marginLeft: '150px',
    
}

export class DemoCarousel2 extends Component {
    render() {
        return (
            <div style={carouselDiv}>
            <Carousel   >
                {data.map((tournament, index) => (
          <div  key={index}>
            
            <p>Tournament Name: {tournament.tournament_name}</p>
            <br/>
            <div style={boardStyle}>
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
          </div>
        ))}
            </Carousel>
            </div>
        );
    }
};