import React from 'react'
import { Leaderboard } from 'flywheel-leaderboard'
export const Flywheel_Board = ({data}) => {
  return (
    <div >
        <Leaderboard 
        
        className='max-w-4xl' //tailwind class (optional)
        theme='stone' //leaderboard theme. see docs for accepted values (optional)
      //  scoringMetric="rank" //the property you wanna rank your data by (required)
        //id="_id" //the property you wanna id each item in your data by (required)
        cell1="team_id" //the first cell for your board (optional)
        cell2="team_code" //...
        cell3="team_name" //...
        cell4="rank" //...
        items={data} //the data you wanna use for your board. e.g. db response. (required)
        > 
      </Leaderboard>
    </div>
  )
}
