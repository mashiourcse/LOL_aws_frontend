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
        It is with great pleasure and excitement that I stand before you today
        to present our project for the League of Legends AWS Hackathon. Our
        team, comprised of talented individuals, has come together with a shared
        passion for gaming and the drive to innovate.
      </p>
      <p>Allow me to introduce our exceptional team members:</p>
      <br></br>
      <ul>
        <li>
          <strong>Adel</strong> A maestro in game analysis, Adel brings a keen
          eye for strategic gameplay, a deep understanding of the League of
          Legends ecosystem, and a knack for optimizing strategies that can
          truly elevate our project.
        </li>
        <li>
          <strong>Tony</strong> A dedicated member specializing in game
          analysis, Tony's analytical mindset and adept knowledge of the game
          will ensure that our project stands out in terms of in-depth game
          insights and accurate evaluations.
        </li>
        <li>
          <strong>Sarah</strong> Our third game analysis expert, Sarah, adds
          her unique perspective and expertise to the mix. With her skills, we
          aim to provide players with insightful metrics and analysis, aiding
          them in enhancing their performance on the Summoner's Rift.
        </li>
        <li>
          <strong>Mashiour</strong> Steering our project's UI design is
          Mashiour, a creative genius who possesses an eye for aesthetic appeal
          and user-centric design. Mashiour is determined to make our
          application visually appealing and user-friendly, enhancing the
          overall experience for our users.
        </li>
        <li>
          <strong>Sakshi and Rishab</strong> Our dynamic duo, leading the
          charge on backend API and database work. Sakshi and Rishab bring to
          the table unmatched technical prowess, ensuring a seamless and
          efficient functioning of our application's core, and a robust and
          reliable database to power our game-changing ranking system.
        </li>
      </ul>
      <br></br>
      <p>
        Together, we are a team of six, unified by our shared goal of creating
        a groundbreaking ranking system for League of Legends enthusiasts.
        Utilizing the power of AWS, we aim to revolutionize the way players
        evaluate their performance and improve their gameplay.
      </p>
      
      <p>
        Our vision is to provide a comprehensive platform that not only ranks
        players but also offers valuable insights and recommendations for
        strategic gameplay. We envision a platform that fosters growth,
        camaraderie, and a deeper appreciation for the intricacies of League of
        Legends.
      </p>
      <p>
        Thank you for your attention, and we are excited to showcase our project
        and demonstrate the passion, dedication, and innovation that has gone
        into creating this exceptional ranking system. Click below the link for 
        Project Documentation and make sure to check out our team members.
      </p>
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button className="mr-2">Project Documentation</Button>
        <Button>About Team</Button>
      </CardFooter>
    </Card>
    </div>
  );
};

export default Welcome;
