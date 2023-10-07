import React, { useEffect, useState } from 'react';
import { Leaderboard } from 'flywheel-leaderboard';

export const Flywheel_Board = ({ data, name }) => {
  const [selectedRanking, setSelectedRanking] = useState('win');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 8;
  const ranking = ['win', 'loss'];

  useEffect(() => {
    sortingRanking();
  }, [selectedRanking, data, currentPage]);

  const sortingRanking = () => {
    const sortedData = [...data];
    sortedData.sort((a, b) => b[selectedRanking] - a[selectedRanking]);

    sortedData.forEach((team, index) => {
      team.rank = index + 1;
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

    return (
      team.team_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div id='flywheel_div'>
      <div id='button_div' className="flex justify-between items-center mb-4">
      
      <div className="flex items-center">
        {name} Ranking factor{' '}
        <select
          value={selectedRanking}
          onChange={(e) => setSelectedRanking(e.target.value)}
          className="ml-2 w-30 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        >
          {ranking.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by name or rank"
          className="ml-2 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="pagination mb-2">
        <span className="mr-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="ml-2 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        >
          Next
        </button>
      </div>

    </div>
      <div className='mb-4'>
        <Leaderboard
          className="max-w-4xl w-full  px-10 py-10"
          theme="stone"
          scoringMetric={selectedRanking}
          cell1="team_id"
          cell2="team_code"
          cell3="team_name"
          cell4="rank"
          cell5={selectedRanking}
          items={paginatedData}
        />
      </div>
    </div>
  );
};
