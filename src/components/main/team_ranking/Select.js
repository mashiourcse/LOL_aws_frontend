import React, { useContext } from 'react'
import {MultiSelectComponent as SelectTeams} from './SelectTeams';
import {MultiSelectComponent as SelectTournament} from './SelectTournaments';
import { MyContext } from './context/MyContext';
import { api } from '../API/api';
import axios from 'axios';



export const Select = () => {

    let {hideInput, setHideInput, filteredTeams, filteredTournaments} = useContext(MyContext);
    
    const fetchData = async () => {
        try {
    
          const response = await axios.get(`${api}/team_rankings/`, {
            params: {
              teams: filteredTeams,
              tournaments: filteredTournaments
            }
          });
    
          if (response.status !== 200) {
            throw new Error('Network response was not ok');
          }
    
          // setData(response.data.data);
          // setRankings(response.data.data.rankings);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      const handleButtonClick = () => {
        fetchData();
        setHideInput(!hideInput)
      };


    return (
        <>
        {
            !hideInput && <div id="section1" className="mb-6" style={{ display: 'flex', flexDirection: 'row', marginLeft: '154px' }}>
            <div style={{ flex: '1', marginRight: '10px', maxWidth: '700px',  }}>
            <SelectTeams />
            </div>
            <div style={{ flex: '1',maxWidth: '800px' }}>
            <SelectTournament />
            
            </div>
            <div className="mt-4" style={{ flex: '1',maxWidth: '150px', }}>

                <button className="bg-black hover:bg-blue-700 ml-2 text-white font-bold py-2 px-4 rounded inline-flex items-center" onClick={ handleButtonClick}>Get Results</button>
            </div>
            </div>
    
    }
    
            </>
  )
}
