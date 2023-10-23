import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

  const styles = {
    marginLeft: '50px',
    paddingLeft: '61px',
    paddingRight: '16px'
  };
const Welcome = () => {
  return (
    <div id="welcome-div" className="mt-2 pl-2" style={styles}>
      <Card className="mt-6 w-196">
      

      <CardBody>
        
        <Typography>
            <h1 className='text-2xl'><b>Welcome To Our LOL AWS Hackathon Project</b></h1>
            <br></br>
        <p>
        Ladies and gentlemen, esteemed judges,
        fellow participants, and all enthusiasts of the League of Legends
        community,
      </p>
      <p>
      We are pleased to present our Global Power Ranking project for the Riot x AWS Hackathon, after diligently approaching the problem from various angles. The project is the fruit of several brainstorming sessions and experiments, and it aims to provide rankings that are as realistic as possible.

      </p>
      <p>Based on the FIFA Elo Ranking algorithm, our rankings took under account the following factors:
</p>
<br></br>
      <ul>
        <li>
          <strong>Game outcome</strong> 
        </li>
        <li>
          <strong>Game-specific performance</strong> 
        </li>
        <li>
          <strong>Game importance as a weight factor (ranging from regional group stage games to World Championship finals)
</strong> 
        </li>
        
      </ul>
      <br></br>
      <p>
      As team ratings evolve over time, the evolution of Elo rankings can be observed on a regional basis, or with an international take. Teams can also be directly compared to one another as users see fit. Please select your desired option on the left side.
      </p>
      <br></br>
      <p>
        Our six-person team team consists of UI Architect (<b>Mashiour</b>), Data Science Statistics (<b>Sarah</b>), Data Analyst (<b>Tony</b>), Data Scientist (<b>Adel</b>), AWS Backend Dev (<b>Sakshi</b>), AWS Sagemaker (<b>Rishab</b>). 
      The team leveraged AWS and machine learning algorithms as much as possible to provide this website and our ratings for review. We can't wait to hear what you think of our work, and we look forward to improving the ranking system beyond the Hackathon.

      </p>
      
      
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
      <a href='https://docs.google.com/document/d/10BtAbDFDfvNq25Vu8IuDFg-ACSqIsDPAxpZiAQnet5Q' target='_blank' rel="noreferrer" ><Button className="mr-2">Project Documentation</Button></a>
      <a href='/about'  ><Button className="mr-2">About Team</Button></a>        
      </CardFooter>
    </Card>
    </div>
  );
};

export default Welcome;
