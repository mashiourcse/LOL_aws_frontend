import React, { Component } from 'react';
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

export class DemoCarousel extends Component {

    render() {
        return (
          <div>    
            
            <div style={carouselDiv}>
            <Carousel   >
                {data.map((tournament, index) => (
          <div  key={index}>
            
            <p> {tournament.tournament_name}</p>
            <br/>
            <div >
            <Flywheel_Board data={tournament.rankings}/>
      </div>
          </div>
        ))}
            </Carousel>
            </div>
            </div>
        );
    }
};