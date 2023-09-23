import React, { useState, useEffect } from 'react';

import { Flywheel_Board } from '../../common/Flywheel_Board';
import { api } from '../API/api';

const GlobalRankingsComponent = () => {
  const [num, setNum] = useState(20);  // Initial value for num
  const [data, setData] = useState(null);
  
  const fetchData = () => {
    fetch(`${api}/global_rankings/?num=${num}`)
      .then(response => response.json())
      .then(data => setData(data.data))
      .catch(error => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts or when num changes
  }, [num]);

  const handleNumChange = (event) => {
    const inputValue = event.target.value;
    setNum(inputValue);
    console.log(data);
  };

  return (
    <div>
        
    <div>


    </div>

      <div>
      
        <br/>
        <input className="shadow appearance-none border rounded w-50% py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" value={num} onChange={handleNumChange} />
      
      {/* <button onClick={fetchData}>Fetch Data</button> */}
      <div className='mb-4'>
      {data && (
        
        <Flywheel_Board data={data} />
      )}
      </div>
      </div>
    </div>
  );
};

export default GlobalRankingsComponent;
