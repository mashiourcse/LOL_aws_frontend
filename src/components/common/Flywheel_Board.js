import React, { useEffect, useState } from 'react';
import { Leaderboard } from 'flywheel-leaderboard';

export const Flywheel_Board = ({ data, name }) => {
  const [selectedRanking, setSelectedRanking] = useState('win');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;  // Number of items per page

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

    return sortedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  };

  const changeRank = (e) => {
    setSelectedRanking(e.target.value);
    setCurrentPage(1);  // Reset to the first page when changing ranking
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div id='flywheel_div'>
      <div>
        {name} Ranking factor{' '}
        <select
          value={selectedRanking}
          onChange={changeRank}
          className="mb-2 w-30 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        >
          {ranking.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div className='mb-4'>
        <Leaderboard
          className="max-w-4xl px-10 py-10"
          theme="stone"
          scoringMetric={selectedRanking}
          cell1="team_id"
          cell2="team_code"
          cell3="team_name"
          cell4="rank"
          cell5={selectedRanking}
          items={sortingRanking()}
        />
        <div className="pagination mb-2">
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      </div>
      
    </div>
  );
};
