import React from 'react'
import {MultiSelectComponent as SelectTeams} from './SelectTeams';
import {MultiSelectComponent as SelectTournament} from './SelectTournaments';
import { MyContext, MyProvider } from './context/MyContext';
import { Test } from './Test';
import SimpleSlider from '../../common/SimpleSlider';
import { useContext } from 'react';

const Team_ranking = () => {
  const {filteredTeams,filteredTournaments} = useContext(MyContext);
  return (
    <div>

        <div>
        <MyProvider>
          <div className="mb-6" style={{ display: 'flex', flexDirection: 'col', marginLeft: '154px' }}>
            <div style={{ flex: '1', marginRight: '10px', maxWidth: '700px',  }}>
            <SelectTeams />
            </div>
            <div style={{ flex: '1',maxWidth: '700px' }}>
            <SelectTournament />
            </div>
            </div>
            
            <Test />
            <p></p>
            
            </MyProvider>
        </div>
    </div>
  )
}
export default Team_ranking;