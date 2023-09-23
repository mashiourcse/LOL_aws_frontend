import React from 'react';
import ReactDOM from 'react-dom';
import TeamTable from './TeamTable'; // Assuming you put the component in a separate file

const data = [
  {
    "team_id": "100205573495116443",
    "team_code": "GEN",
    "team_name": "Gen.G",
    "rank": 1
  },
  {
    "team_id": "98767991877340524",
    "team_code": "C9",
    "team_name": "Cloud9",
    "rank": 1
  },
  {
    "team_id": "99566404853058754",
    "team_code": "WBG",
    "team_name": "WeiboGaming FAW AUDI",
    "rank": 3
  }
];

export const GetTeamData = ()=>{

    return <>
        <TeamTable data={data}></TeamTable>
    </>
}


