import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowTournamentData from './ShowTournamentData';
import { api } from '../API/api';

const GetGlobalRankings = () => {
  const [num, setNum] = useState(20);  // Initial value for num
  const [data, setData] = useState(null);
  
  const fetchData = () => {
    fetch(`${api}/global_rankings/?num=${num}`)
      .then(response => response.json())
      .then(data => setData(data.data))
      .catch(error => console.error('Error fetching data:', error));
  };

  // useEffect(() => {
  //   fetchData(); // Fetch data when the component mounts or when num changes
  // }, [num]);

  const handleButtonClick = ()=>{
    fetchData();
   // setData(data1)
   
  }
  const handleNumChange = (event) => {
    const inputValue = event.target.value;
    setNum(inputValue);
    console.log(data);
  };

  return (
    <div className="p-4 " style={{marginLeft: '167px', paddingBottom: '160px'}}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
      


      
      
      <div>
      <input className="shadow appearance-none border rounded w-50% py-2 px-3 mb-4 ml-40 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" value={num} onChange={handleNumChange} />
      <button
        onClick={handleButtonClick}
        className="bg-black hover:bg-blue-700  text-white font-bold py-2 px-4 rounded inline-flex items-center"
      >
        Get Data
      </button>
      </div>
      </div>
      {data ? (
        <>
          <ShowTournamentData
            
            rankings={data}
          />
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default GetGlobalRankings;
