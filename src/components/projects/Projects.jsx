import React, { useEffect, useState } from 'react';
import './Projects.scss';

import rmanageImage from '../../assets/images/RManage.png';
import medwareImage from '../../assets/images/Medware.png';
import bankingImage from '../../assets/images/Banking.png';
import rmanageDashboardImage from '../../assets/images/RManageDashboard.png';
import OBPDashboardImage from '../../assets/images/OnlineBankPortalDashboard.jpg';
import MedwareDashboardImage from '../../assets/images/MedwareDashboard.png';

import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import GitHub from '@mui/icons-material/GitHub';
import ArrowBackIosTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';

function Projects() {
  const projectData = [
    {
      title: 'Medware',
      image: MedwareDashboardImage,
      techUsed: ['HTML / CSS / JS', 'JSP & Servlets'],
      logoImage: medwareImage,
    },
    {
      title: 'R-Manage',
      image: rmanageDashboardImage,
      techUsed: ['ReactJS', 'SpringBoot'],
      logoImage: rmanageImage,
    },
    {
      title: 'Online Banking Portal',
      image: OBPDashboardImage,
      techUsed: ['ReactJS', 'SpringBoot'],
      logoImage: bankingImage,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projectData.length) % projectData.length);
  };

  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  };

  const currentProject = projectData[currentIndex];

  return (
    <div className="work" id="projects">
      <p className='text'>Projects I worked on</p>
      <div className='heading'>
        <div className='colorBar'></div>
        <div><h1>Some Of My Recent Work</h1></div>
      </div>
      <br /><br />
      <div className="container">
        <div className='leftArrow' onClick={handleLeftArrowClick}>
          <ArrowBackIosTwoToneIcon />
        </div>
        <div className="projectContainer">
          <div className="projectCard">
            <div className='dashImage'><img src={currentProject.image} alt={currentProject.title} /></div>
            <div className='pCardInfo'>
              <div className='headingProject'>
                <h2>{currentProject.title}</h2>
                <img src={currentProject.logoImage} alt={currentProject.title} className='headingProjectImage' />
              </div>
              <br />
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi nostrum necessitatibus doloremque? Quasi non molestias odio. Quasi non molestias odio.</h4>
              <br />
              <div className='techUsed'><strong>{currentProject.techUsed.join(' / ')}</strong></div>
              <br />
              <div className='projectLinks'>
                <a href='https://github.com/your-username' target="_blank" rel="noopener noreferrer">Code <GitHub className='linkIcon' /></a>
                <a href='#' target="_blank" rel="noopener noreferrer">Live Demo <OpenInNewOutlinedIcon className='linkIcon' /></a>
              </div>
            </div>
          </div>
        </div>
        <div className='rightArrow' onClick={handleRightArrowClick}>
          <ArrowForwardIosTwoToneIcon />
        </div>
      </div>
    </div>
  );
}

export default Projects;
