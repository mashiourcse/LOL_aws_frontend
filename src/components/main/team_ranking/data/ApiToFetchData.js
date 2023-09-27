import React, { useContext } from 'react';
import axios from 'axios';

const FetchDataWithBody = () => {
  
  const data = ["dummy", "random","dummy", "random","dummy", "random","dummy", "random","dummy", "random","dummy", "random","dummy", "random","dummy", "random","dummy", "random","dummy", "random","dummy", "random","dummy", "random","dummy", "random","dummy", "random","dummy", "random","dummy", "random","dummy", "random","dummy", "random","dummy", "random","dummy", "random","dummy", "random","dummy", "random","dummy", "random","dummy", "random","dummy", "random","dummy", "random","dummy", "random","dummy", "random","dummy", "random","dummy", "random","dummy", "random","dummy", "random","dummy", "random","dummy", "random"];

  const fetchData = async () => {
    try {
      // setData(null);
     // const response = await axios.get(`http://localhost:4000/tournament_rankings/${tournament_id}?stage=${stage}`);
      //const response = await axios.get(`http://localhost:4000/team_rankings/sort?data=${teams}`);

      const response = await axios.get('http://localhost:4000/team_rankings/sort', {
        params: {
          teams: data,
          tournaments: data
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
  };
      

 

  return (
    <div>
      <button onClick={handleButtonClick}>Fetch Data with Body (Axios)</button>
    </div>
  );
};

export default FetchDataWithBody;
