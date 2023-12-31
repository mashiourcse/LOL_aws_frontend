import React, { useEffect, useState } from 'react';
import { Leaderboard } from 'flywheel-leaderboard';


export const Flywheel_Board = ({ data, name,index }) => {
  const [selectedRanking, setSelectedRanking] = useState('ranking_points');
//  const [selectedRanking, setSelectedRanking] = useState('rating');
  
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(5);
  //const ranking = ['ranking_points', 'BLUE', 'RED','ALL'];

  const roundRankingPoints = (team) => {
    team.ranking_points = Math.round(team.ranking_points);
  };

  useEffect(() => {
    //sortingRanking();
  }, [selectedRanking, data, currentPage]);


  const incrementItemsPerPage = () => {
    // Increase the itemsPerPage value by 1 (or any other desired value)
    if(itemsPerPage < data.length)
      setItemsPerPage(itemsPerPage + 1);
  };

  const decrementItemsPerPage = () => {
    // Ensure itemsPerPage does not go below 1
    if (itemsPerPage > 1) {
      // Decrease the itemsPerPage value by 1 (or any other desired value)
      setItemsPerPage(itemsPerPage - 1);
    }
  };

  const sortingRanking = () => {
    const sortedData = [...data];
    // Round ranking_points for each team
    sortedData.forEach(roundRankingPoints);

    return sortedData;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);  // Reset to the first page when changing search term
  };

  const filteredData = sortingRanking().filter((team) => {
    if (searchTerm.trim() === '') {
      return true;
    }

    if (!isNaN(searchTerm) && Number(searchTerm) === team.rank) {
      return true;
    }

    // return (
    //   team.team_code.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    return (
      team.team_name.toLowerCase().includes(searchTerm.toLowerCase()) || team.team_code.toLowerCase().includes(searchTerm.toLowerCase())
      //team.team_name.toLowerCase().includes(searchTerm.toLowerCase()) 
      );
  });

  const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  function removeDuplicateWords(inputString) {
    // Split the input string into words
    const words = inputString.split(" ");
  
    // Create a Set to store unique words
    const uniqueWords = new Set();
  
    // Iterate through the words and add them to the Set
    const resultWords = [];
    for (const word of words) {
      if (!uniqueWords.has(word)) {
        uniqueWords.add(word);
        resultWords.push(word);
      }
    }
  
    // Join the unique words back into a string
    const resultString = resultWords.join(" ");
  
    return resultString;
  }

  return (
    <div id='flywheel_div'>
      <div className='mb-4'>
      {
          name && <span
          className="ml-2 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          > #{index+1}</span>
        }
        {
          name && <span
          className="ml-2 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          > {removeDuplicateWords(name)}</span>
        }
         </div>
      <div id='button_div' className="flex justify-between items-center mb-4">
      
      <div className="flex items-center">
        
        {/* <select
          value={selectedRanking}
          onChange={(e) => setSelectedRanking(e.target.value)}
          className="ml-2 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        >
          {ranking.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select> */}
  <button
            onClick={incrementItemsPerPage}
            
            className="px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1.5em"
      width="1.5em"
     // {...props}
    >
      <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
    </svg>
          </button>
          <button
            onClick={decrementItemsPerPage}
           
            className="ml-2 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1.5em"
      width="1.5em"
    //  {...props}
    >
      <path d="M22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 22 12 z" />
      <path d="M8 12h8" />
    </svg>
          </button>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search code,name,rank"
          className="ml-2 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="pagination mb-2">
        <span className="ml-2 px-3 py-3 mr-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="ml-2 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
        </button>
      </div>

    </div>
      <div className='mb-4'>
        <Leaderboard
          className="max-w-4xl w-full  px-10 py-10"
          theme="stone"
          //scoringMetric="ranking_points"
          // cell1="team_id"
          cell2="team_code"
          cell3="team_name"
          cell4="rank"
          cell5={"ranking_points"}
         // cell5={"rating"}
          items={paginatedData}
        />
      </div>
    </div>
  );
};
