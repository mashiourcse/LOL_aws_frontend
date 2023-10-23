import React, { useEffect, useState } from 'react';
import { Leaderboard } from 'flywheel-leaderboard';


export const Flywheel_Board = ({ data, name,index }) => {
  const [selectedRanking, setSelectedRanking] = useState('ranking_points');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 8;
  const ranking = ['ranking_points', 'BLUE', 'RED','ALL'];

  useEffect(() => {
    //sortingRanking();
  }, [selectedRanking, data, currentPage]);

  const sortingRanking = () => {
    const sortedData = [...data];
    sortedData.sort((a, b) => b[selectedRanking] - a[selectedRanking]);

    sortedData.forEach((team, index) => {
      //team.rank = index + 1;
      
    });

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
          > {name}</span>
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
          items={paginatedData}
        />
      </div>
    </div>
  );
};
