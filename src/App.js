import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GetTournamentRankings from "./components/main/Tournament_Ranking/GetTournamentRankings"

import Team_ranking from './components/main/team_ranking/Team_ranking';
import GetGlobalRankings from "./components/main/Global_Ranking2/GetTournamentRankings";
import Navbar from "./components/common/Navbar";
import {Home} from "./Home";
import {About} from "./About";
import Footer from "./components/common/Footer";
import SideBar from "./components/common/Sidenav"

const APICall = ()=>{

  return <Routes>
    {/* FrontEND */}

    
    <Route exact path="/tournament_rankings" element={<GetTournamentRankings />} />
    {/* <Route exact path="/global_rankings" element={<GlobalRankingsComponent />} />     */}
    <Route exact path="/global_rankings" element={<GetGlobalRankings />} />    
    <Route exact path="/team_rankings" element={<Team_ranking />} /> 

  </Routes>
}

const StaticPages = ()=>{

  return <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/about" element={<About />} />
    
  </Routes>
}

export default function App() {

  const containerStyle = {
    marginLeft: '220px',
    
};

  return (
    <>
      <div className="container flex" >
      <h1 className="text-3xl font-bold underline">
      
    </h1>
    {/* <GetTournamentRankings /> */}
    <div style={{width: '150px'}}>
    <Navbar/>
    </div>
    <Router>
      <div>
    <APICall/>
    <StaticPages/>
    </div>
    <Footer/>
    </Router>
      
      </div>
    </>
    
  )
}