import React, { useEffect, useState } from 'react';
import { Leaderboard } from 'flywheel-leaderboard';

export const Flywheel_Board = ({ data }) => {
  const [selectedRanking, setSelectedRanking] = useState('win');

  const ranking = ['win', 'loss'];

  useEffect(() => {
    sortingRanking();
  }, [selectedRanking, data]);

  const sortingRanking = () => {
    const sortedData = [...data];
    
    sortedData.sort((a,b)=> b[selectedRanking] - a[selectedRanking])
    // if (selectedRanking === 'loss') {
    //   sortedData.sort((a, b) => b.loss - a.loss);
    // } else if (selectedRanking === 'win') {
    //   sortedData.sort((a, b) => b.win - a.win);
    // }

    // Update the rank
    sortedData.forEach((team, index) => {
      team.rank = index + 1;
    });

    return sortedData;
  };

  const changeRank = (e) => {
    setSelectedRanking(e.target.value);
  };

  return (
    <div>
      <div>
        Ranking by{' '}
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
      <Leaderboard
        className="max-w-4xl"
        theme="stone"
        scoringMetric={selectedRanking}
        //id="_id"
        cell1="team_id"
        cell2="team_code"
        cell3="team_name"
        cell4="rank"
        cell5={selectedRanking}
        items={sortingRanking()}
      />
    </div>
  );
};
