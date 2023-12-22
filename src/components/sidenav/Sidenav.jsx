import React, { useEffect, useRef } from 'react';
import './Sidenav.scss';

function Sidenav() {

  return (
    <div className="sidenav">
      <div className="nav">
        <div>
          <a
            href="#intro"
          >
            <span>0 <span className="em-dash">—</span> Home</span>
          </a>
        </div>
        <div>
          <a
            href="#about"
          >
            <span>1 <span className="em-dash">—</span> About</span>
          </a>
        </div>
        <div>
          <a
            href="#projects"
          >
            <span>2 <span className="em-dash">—</span> Projects</span>
          </a>
        </div>
        <div>
          <a
            href="#hireme"
          >
            <span>3 <span className="em-dash">—</span> Hire Me</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
