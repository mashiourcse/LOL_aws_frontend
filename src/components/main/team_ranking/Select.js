import React, { useContext } from 'react'
import {MultiSelectComponent as SelectTeams} from './SelectTeams';
import {MultiSelectComponent as SelectTournament} from './SelectTournaments';
import { MyContext } from './context/MyContext';



export const Select = () => {

    let {hideInput, setHideInput} = useContext(MyContext);
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

                <button className="bg-black hover:bg-blue-700 ml-2 text-white font-bold py-2 px-4 rounded inline-flex items-center" onClick={()=>{ setHideInput(!hideInput)}}>Get Results</button>
            </div>
            </div>
    
    }
    
            </>
  )
}
