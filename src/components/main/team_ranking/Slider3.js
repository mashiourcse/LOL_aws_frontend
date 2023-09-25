import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Leaderboard } from 'flywheel-leaderboard';
import tournamentData from './tournament.json';

const data = tournamentData.data;

const boardStyle = {
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '400px',
  overflowY: 'auto',
  marginLeft: '150px',
};

const buttonStyle = {
  marginLeft: '42.5rem'
};

const carouselDiv = {
  width: '100%',
  marginLeft: '150px',
};

const DemoCarousel = () => {
  return (
    <div>
      <div style={carouselDiv}>
        <Carousel>
          {data.map((tournament, index) => (
            <div key={index}>
              <p>{tournament.tournament_name}</p>
              <br />
              <div style={boardStyle}>
                <Leaderboard
                  className='max-w-4xl py-12 overflow-y-scroll'
                  theme='amber'
                  cell1="team_id"
                  cell2="team_code"
                  cell3="team_name"
                  cell4="rank"
                  items={tournament.rankings}
                >
                </Leaderboard>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default DemoCarousel;
