import React from 'react'
import { MyContext, MyProvider } from './context/MyContext';
import { Test } from './Test';
import { useContext } from 'react';
import { Select } from './Select';
const Team_ranking = () => {
  
  const {filteredTeams,filteredTournaments, hideInput,setHideInput} = useContext(MyContext);
 
  return (
    <div>

        <div>
        <MyProvider>

          {
            !hideInput && 
            <Select/>
          }
          
            <div>
              
            <Test />
            </div>
            <p></p>
            
            </MyProvider>
        </div>
    </div>
  )
}
export default Team_ranking;