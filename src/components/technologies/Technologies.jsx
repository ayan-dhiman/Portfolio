import "./Technologies.scss";
import React from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import { styled } from "@mui/material/styles";

import java from "../../assets/logos/JavaLogo.png";
import html from "../../assets/logos/HMTLLogo.png";
import css from "../../assets/logos/CSSLOGO.png";
import js from "../../assets/logos/JSLogo.png";
import jquery from "../../assets/logos/jQueryLogo.jpg";
import reactjs from "../../assets/logos/ReactLogo.png";
import nodejs from "../../assets/logos/nodejslogo.png";
import spring from "../../assets/logos/SpringLogo.png";
import springboot from "../../assets/logos/springbootlogo.png";
import sass from "../../assets/logos/SassLogo.png";
import git from "../../assets/logos/GITlogo.png";
import vscode from "../../assets/logos/VSCODELogo.png";
import eclipse from "../../assets/logos/EclipseLogo.png";
import bitbucket from "../../assets/logos/BitbucketLogo.png";

const technologiesData = [
  { name: "Java", logo: java, width: "60px", height: "115px" },
  { name: "HTML", logo: html, width: "115px", height: "109px" },
  { name: "CSS", logo: css, width: "115px", height: "110px" },
  { name: "JS", logo: js, width: "110px", height: "110px" },
  { name: "jQuery", logo: jquery, width: "97px", height: "100px" },
  { name: "ReactJS", logo: reactjs, width: "110px", height: "100px" },
  { name: "NodeJS", logo: nodejs, width: "90px", height: "100px" },
  { name: "Spring", logo: spring, width: "90px", height: "90px" },
  { name: "Spring Boot", logo: springboot, width: "90px", height: "90px" },
  { name: "Sass", logo: sass, width: "120px", height: "100px" },
  { name: "Git", logo: git, width: "100px", height: "100px" },
  { name: "VS Code", logo: vscode, width: "100px", height: "100px" },
  { name: "Eclipse", logo: eclipse, width: "100px", height: "100px" },
  { name: "BitBucket", logo: bitbucket, width: "100px", height: "90px" },
];

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#0f33ff",
    color: "white",
    fontSize: 11,
    borderRadius: 0,
    fontWeight: 500,
  },
}));

function Technologies() {
  return (
    <div className="technologies" id="technologies">
      <p className="text">My Skillset</p>
      <div className="heading">
        <div className="colorBar"></div>
        <div>
          <h1>Technologies I'm Using</h1>
        </div>
      </div>
      <br/><br/><br/><br/>
      <div className="logobox">
        {technologiesData.map((tech, index) => (
           <CustomTooltip key={index} title={tech.name} placement="top" TransitionComponent={Zoom}>
           <div className="logo">
             <img src={tech.logo} alt={tech.name} style={{ width: tech.width, height: tech.height }}/>
           </div>
         </CustomTooltip>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
