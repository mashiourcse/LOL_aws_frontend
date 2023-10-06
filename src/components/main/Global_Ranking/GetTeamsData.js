import React, { useState, useEffect } from 'react';
import { Flywheel_Board } from '../../common/Flywheel_Board';
import { api } from '../API/api';
import tdata from './tournament.json';

const data1 = tdata.data;

const GlobalRankingsComponent = () => {
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
   // fetchData();
    setData(data1)
   
  }
  const handleNumChange = (event) => {
    const inputValue = event.target.value;
    setNum(inputValue);
    console.log(data);
  };

  const boardStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '600px',  // Adjust the height as needed
    overflowY: 'auto',
    marginRight: '400px', 
    marginLeft: '120px'
  };
  
  return (
    <div>
        

      <div id='board_div' style={{marginLeft: '381px'}}>
      
        <br/>
        <input className="shadow appearance-none border rounded w-50% py-2 px-3 mb-4 ml-40 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" value={num} onChange={handleNumChange} />
        <button
         onClick={handleButtonClick}
         className="bg-black hover:bg-blue-700 ml-2 text-white font-bold py-2 px-4 rounded inline-flex items-center"
      >Get Results</button>
      {/* <button onClick={fetchData}>Fetch Data</button> */}
      <div className='mb-4' id='primary' style={{height: '800px'}}>
      {data && (
        
        <Flywheel_Board data={data} />
      )}
      </div>
      </div>
    </div>
  );
};

export default GlobalRankingsComponent;
