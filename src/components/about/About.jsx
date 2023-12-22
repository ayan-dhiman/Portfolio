import './About.scss'

import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import { styled } from "@mui/material/styles";

import java from "../../assets/logos/JavaLogo.png";
import html from "../../assets/logos/HTMLLogo.png";
import css from "../../assets/logos/CSSLOGO.png";
import js from "../../assets/logos/JSLogo.png";
import jquery from "../../assets/logos/jQueryLogo.png";
import reactjs from "../../assets/logos/ReactLogo.png";
import nodejs from "../../assets/logos/nodejslogo.png";
import spring from "../../assets/logos/SpringLogo.png";
import springboot from "../../assets/logos/springbootlogo.png";
import sass from "../../assets/logos/SassLogo.png";
import git from "../../assets/logos/GITlogo.png";
import vscode from "../../assets/logos/VSCODELogo.png";
import eclipse from "../../assets/logos/EclipseLogo.png";
import bitbucket from "../../assets/logos/BitbucketLogo.png";


function About() {

  const technologiesData = [
    { name: "Java", logo: java },
    { name: "HTML", logo: html },
    { name: "CSS", logo: css },
    { name: "JS", logo: js },
    { name: "jQuery", logo: jquery },
    { name: "ReactJS", logo: reactjs },
    { name: "NodeJS", logo: nodejs },
    { name: "Spring", logo: spring },
    { name: "Spring Boot", logo: springboot },
    { name: "Sass", logo: sass },
    { name: "Git", logo: git },
    { name: "VS Code", logo: vscode },
    { name: "Eclipse", logo: eclipse },
    { name: "BitBucket", logo: bitbucket },
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

  return (
    <div className="about" id='about'>

      <p className='text'>Bit About Me</p>
      <div className='heading'>
        <div className='colorBar'></div><div><h1>About Me</h1></div>
      </div>
      <div>
        <br />
        <p className='text'>Hi!, I'm</p>
        <h3>Ayan Dhiman</h3>
        <p className='text'>a Full Stack Developer based in Bengaluru, India.<br />

          I specialize in Full-Stack Development, with expertise in Core Java, JSP & Servlets, JDBC, SQL, and a working knowledge of frameworks like Struts 1.x, Spring MVC, and Spring Boot including React.js, JavaScript, and jQuery.<br />

          With experience designing and developing solutions for various streams of work, I have a strong foundation in the core and platform topics.<br />

          I thrive in dynamic environments, collaborating with cross-functional teams to deliver efficient and scalable software solutions.<br />

          If you want to know more or want to talk about anything related, please drop me a line.<br />

          You can email me at <a href="mailto:er.ayandhiman@gmail.com"><strong>er.ayandhiman@gmail.com</strong></a> to start a chat.</p>
      </div>
      <div className='techStack' >
        <div>Tech Stack</div>
        <div className='divider'></div>
        <div><div className="logobox">
          {technologiesData.map((tech, index) => (
            <CustomTooltip key={index} title={tech.name} placement="bottom" TransitionComponent={Zoom}>
              <div className="logo">
                <img src={tech.logo} alt={tech.name} style={{ width: "50px", height: "50px" }} />
              </div>
            </CustomTooltip>
          ))}
        </div></div>
      </div>

    </div>
  )
}

export default About
