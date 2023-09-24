import React, { useState } from 'react';
import allTeams from '../data/teams.json';
import allTournaments from '../data/tournaments.json';
const MyContext = React.createContext('teams');

const MyProvider = ( {children}) => {

    const [teams, setTeams] = useState([]);
    const [tournaments, setTournaments] = useState([]);

    //  const teamSuggestion = [{team_id: 1, team_name: "T1"}, {team_id: 2, team_name: "DRX"}, {team_id: 3, team_name: "JDG"}, {team_id: 4, team_name: "LNG"}];
    const teamSuggestion = allTeams;

   // const tournamentSuggestion = [{tournament_id: 1, tournament_name: "LCK"}, {tournament_id: 2, tournament_name: "LPL"}];
    const tournamentSuggestion = allTournaments;
    
    const filteredTeams = teamSuggestion.filter(team => teams.includes(team.team_name));
    const filteredTournaments = tournamentSuggestion.filter(tournament => tournaments.includes(tournament.tournament_name));

    return (
        <MyContext.Provider value={{ teamSuggestion, tournamentSuggestion, teams, setTeams, tournaments, setTournaments, filteredTeams, filteredTournaments}}>
            {children}
        </MyContext.Provider>
    );
}
export { MyContext, MyProvider};