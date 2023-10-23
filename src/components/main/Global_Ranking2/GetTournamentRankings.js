import {
  Button
  
} from "@material-tailwind/react";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowTournamentData from './ShowTournamentData';
import { api } from '../API/api';
import LoadingSpinner from "../../spinner/LoadingSpinner";

const GetGlobalRankings = () => {
  const [num, setNum] = useState(20);  // Initial value for num
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const fetchData = () => {

    //fetch(`${api}/global_rankings/?num=${num}`)
    fetch(`https://xsvtj1vo7a.execute-api.ap-south-1.amazonaws.com/global_rankings?number_of_teams=${num}`)
    //fetch(`${api}/global_rankings/?number_of_teams=${num}`)
      .then(response => response.json())
      .then(data => {
        setData(data.teams) 
        setIsLoading(false) })
      .catch(error => {
        console.error('Error fetching data:', error)
        setErrorMessage("Error fetching data");
        setIsLoading(false)
    });
  };

  // useEffect(() => {
  //   fetchData(); // Fetch data when the component mounts or when num changes
  // }, [num]);

  const handleButtonClick = ()=>{
    setIsLoading(true);
    fetchData();
   // setData(data1)
   
  }
  const handleNumChange = (event) => {
    const inputValue = event.target.value;
    setNum(inputValue);
    console.log(data);
  };

  const styles = {
    marginLeft: '108px',
    paddingRight: '50px',
    marginTop: '0px'
  };

  return (
    <>
    <div id="global" style={styles}>
    

    <div className="p-4" style={{marginLeft: '167px', paddingBottom: '160px'}}>
      <div 
      //style={{ display: 'flex', flexDirection: 'row' }}
      >
      


      
      
      <div id="buttonDiv" className='buttons' style={{marginLeft: '85px', paddingLeft: '170px'}}>
      <input className="shadow appearance-none border rounded w-50% py-2 px-3 mb-2 ml-40 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" value={num} onChange={handleNumChange} />
      <Button
        onClick={handleButtonClick}
        className="bg-black hover:bg-blue-700 ml-2 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        disabled={isLoading}
      >
        Go
      </Button>
      </div>

      <div>
      {
        isLoading && <LoadingSpinner />

      }
      {data && !isLoading ? (
        <>
          <ShowTournamentData
            
            rankings={data}
          />
        </>
      ) : (
        <></>
      )}
      </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default GetGlobalRankings;
