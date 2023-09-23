import React from 'react'
import {MultiSelectComponent as SelectTeams} from './SelectTeams';
import {MultiSelectComponent as SelectTournament} from './SelectTournaments';
import { MyProvider } from './context/MyContext';
import { Test } from './Test';
import SimpleSlider from '../../common/SimpleSlider';

const Team_ranking = () => {
  return (
    <div>

        <div>
        <MyProvider>
            <SelectTeams />
            <p></p>
            <SelectTournament />
            <p></p>
            <Test />
            <p></p>
            
            </MyProvider>
        </div>
    </div>
  )
}
export default Team_ranking;