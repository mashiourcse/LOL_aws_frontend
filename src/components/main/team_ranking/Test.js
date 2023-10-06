import React, { useContext } from 'react'
import { MyContext } from './context/MyContext'
import { ShowRanking } from './showRanking';

const containerStyle = {
  paddingLeft: '200px',
  marginRight: '350px',
//  background: 'black'
  
};



export const Test = () => {
    
    const {teams,tournaments,filteredTeams,filteredTournaments, hideInput,setHideInput } = useContext(MyContext);

    

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
        {
          hideInput && <ShowRanking />
        }
        
            {/* <DemoCarousel2/> */}
       </div>
    </div>
  )
}
