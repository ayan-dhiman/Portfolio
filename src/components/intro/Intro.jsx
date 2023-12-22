import React from 'react';
import './Intro.scss';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import WorkOutlineTwoToneIcon from '@mui/icons-material/WorkOutlineTwoTone';

function Intro() {
  
  return (
    <div className='intro' id='intro'>
      <div>
        Hi, I'm
        <h1>
          Ayan Dhiman —
          <br />
          Full Stack Developer
        </h1>
        <br></br>
        based in Bengaluru, Karnataka, India <LocationOnTwoToneIcon className='location' />
        <br/><br/>
        <div className='socialIcon'>
        <a href="mailto:er.ayandhiman@gmail.com" rel="noopener noreferrer">
          <MailTwoToneIcon/>
        </a>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon/>
        </a>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <GitHubIcon/>
        </a>
        </div>
        {/* <a href="#hireme">
          <button className='header_button'>
            HIRE ME <WorkOutlineTwoToneIcon className="hireIcon" />
          </button>
        </a> */}
      </div>
    </div>
  );
}

export default Intro;
