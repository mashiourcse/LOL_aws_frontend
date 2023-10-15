import React from 'react';
import FetchDataWithBody from './components/main/team_ranking/data/ApiToFetchData';
import { ProfileCard } from './components/about/ProfileCard';
import { profileData,leader } from './components/about/data';

const containerStyle = {
  marginLeft: '8rem',
  paddingRight: '0px',
  marginRight: '-364px',
 // marginTop: '48px'
 
};

export const About = () => {
  return (
    <>
  
    <div id="profile_container" style={containerStyle} className="grid grid-cols-6 gap-5">
      
      
      {profileData.map((data, index) => (
        <ProfileCard key={index} profileData={data} />
      ))}
      
    </div>
    </>
  );
};
