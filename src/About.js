import React from 'react';
import FetchDataWithBody from './components/main/team_ranking/data/ApiToFetchData';
import { ProfileCard } from './components/about/ProfileCard';
import { profileData } from './components/about/data';

const containerStyle = {
  marginLeft: '8rem',
  paddingRight: '0px',
  marginRight: '-364px',
  marginTop: '48px'
};

export const About = () => {
  return (
    <div id="profile_container" style={containerStyle} className="grid grid-cols-7 gap-1">
      {profileData.map((data, index) => (
        <ProfileCard key={index} profileData={data} />
      ))}
    </div>
  );
};
