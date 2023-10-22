import React, { useContext, useState,useEffect } from 'react'
import {MultiSelectComponent as SelectTeams} from './SelectTeams';
import {MultiSelectComponent as SelectTournament} from './SelectTournaments';
import { MyContext } from './context/MyContext';
import { api } from '../API/api';
import axios from 'axios';
import {  Button} from "@material-tailwind/react";
import LoadingSpinner from "../../spinner/LoadingSpinner";

export const Select = () => {


const [isLoading, setIsLoading] = useState(false);
const [errorMessage, setErrorMessage] = useState("");

    //teamIds,tournamentIds,
    let {confirmTeam, confirmTour, hideInput, setHideInput, filteredTeams, filteredTournaments,teamIds,tournamentIds,setResponseData} = useContext(MyContext);
    // const teamIds = ["98767991926151025", "98767991866488695"];
    // const tournamentIds = ["98767991302996016", "98767991325878496"];
    console.log(teamIds);
    console.log(tournamentIds);
    // Create query strings for team_id and tournament_id
    const teamIdQueryString = `team_id=[${teamIds.join(',')}]`;
    const tournamentIdQueryString = `tournament_id=[${tournamentIds.join(',')}]`;
    
    // Construct the full URL by appending the query strings
    const url = `https://xsvtj1vo7a.execute-api.ap-south-1.amazonaws.com/teamRankings?${teamIdQueryString}&${tournamentIdQueryString}`;
    console.log(url);
    

   
  //let url = `https://xsvtj1vo7a.execute-api.ap-south-1.amazonaws.com/teamRankings?team_id=[98767991926151025,98767991866488695]&tournament_id=[98767991302996016,98767991325878496]`;
    const fetchData = async () => {
        try {
        
          const response = await axios.get(url
                  , {
           
          });
    
          if (response.status !== 200) {
            throw new Error('Network response was not ok');
          }
          setResponseData(response.data.teamRanking)
          console.log(response);
          setIsLoading(false)
          // setData(response.data.data);
          // setRankings(response.data.data.rankings);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      const handleButtonClick = async() => {
        setIsLoading(true);
        await fetchData();
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
            <div className="mt-4 pt-2" style={{ flex: '1',maxWidth: '150px', }}>

                <Button className="bg-black hover:bg-blue-700 ml-2 text-white font-bold py-2 px-4 rounded inline-flex items-center" onClick={ handleButtonClick} 
disabled={!confirmTeam || !confirmTour}>Go</Button>
            </div>
            </div>
    
    }{
      isLoading && <div style={{marginLeft: '200px'}}><LoadingSpinner /></div>

      }
    
            </>
  )
}
