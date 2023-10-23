import React, { useState } from 'react';
import allTeams from '../data/teams_map.json';
import allTournaments from '../data/tournament_map_updated.json';
const MyContext = React.createContext('teams');

const MyProvider = ( {children}) => {

    const [teams, setTeams] = useState([]);
    const [tournaments, setTournaments] = useState([]);
    const [hideInput, setHideInput] = useState(false);
    const [responseData, setResponseData] = useState(null);
    const [confirmTeam, setConfirmTeam] = useState(false);
    const [confirmTour, setConfirmTour] = useState(false);
    //  const teamSuggestion = [{team_id: 1, team_name: "T1"}, {team_id: 2, team_name: "DRX"}, {team_id: 3, team_name: "JDG"}, {team_id: 4, team_name: "LNG"}];
    const teamSuggestion = allTeams;

   // const tournamentSuggestion = [{tournament_id: 1, tournament_name: "LCK"}, {tournament_id: 2, tournament_name: "LPL"}];
    const tournamentSuggestion = allTournaments;
    
    const filteredTeams = teamSuggestion.filter(team => teams.includes(team.team_name));
    const filteredTournaments = tournamentSuggestion.filter(tournament => tournaments.includes(tournament.tournament_name));
    
    const teamIds = filteredTeams.map(team=>team.team_id)
    const tournamentIds = filteredTournaments.map(tournament=>tournament.leagueId)
    return (
        <MyContext.Provider value={{ confirmTour, setConfirmTour, confirmTeam, setConfirmTeam, teamIds, tournamentIds, teamSuggestion, tournamentSuggestion, teams, setTeams, tournaments, setTournaments, filteredTeams, filteredTournaments, hideInput,setHideInput,responseData,setResponseData}}>
            {children}
        </MyContext.Provider>
    );
}
export { MyContext, MyProvider};