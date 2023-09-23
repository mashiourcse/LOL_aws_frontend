import React, { useContext } from 'react'
import { MyContext } from './context/MyContext'
import {Slider} from './Slider';
import { EmblaCarousel } from './Slider2';
import CarouselComponent from './ComponentCarousel';
import {DemoCarousel} from './Slider3';
import { DemoCarousel2 } from './Slider4';
const containerStyle = {
  marginRight: '350px',
//  background: 'black'
  
};
export const Test = () => {
    
    const {teams,tournaments,filteredTeams,filteredTournaments} = useContext(MyContext);
    
    return (
    <div style={containerStyle}>

       {/* <div>
        <h1>teams and id</h1>
       <ul>
      {filteredTeams.map((item, index) => (
        <li key={index}>{item.team_id} = {item.team_name}</li>
      ))}
    </ul>
       </div>

       <div>
        <h1>tournaments and id</h1>
       <ul>
      {filteredTournaments.map((item, index) => (
        <li key={index}>{item.tournament_id} = {item.tournament_name}</li>
      ))}
    </ul>
       </div> */}
       
       <div>
        {/* <Slider/> */}
        {/* <EmblaCarousel/> */}
        <DemoCarousel />
        {/* <DemoCarousel2/> */}
       </div>
    </div>
  )
}
