import React, { useState } from 'react';
import { Link } from 'react-scroll';

import './styles/header.css';

export default function Header() {
   const [isHomeActive, setIsHomeActive] = useState(false);

   return (
      <header id="home">
         <nav id="nav-wrap">

            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className={isHomeActive ? '' : 'opaque'}>
               <li>
                  <Link
                     onSetActive={() => setIsHomeActive(prev => !prev)}
                     onSetInactive={() => setIsHomeActive(prev => !prev)}
                     activeClass="current"
                     to="home" spy={true} smooth={true}>
                       Home
                  </Link>
               </li>
               <li><Link activeClass="current" to="about" spy={true} smooth={true}>About</Link></li>
               <li><Link activeClass="current" to="resume" spy={true} smooth={true}>Resume</Link></li>
               <li><Link activeClass="current" to="portfolio" spy={true} smooth={true}>Works</Link></li>
            </ul>

         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I'm Yuliy Iovlev</h1>
               <h3>Full-stack developer using tabs for indentation.</h3>
               <hr />
               <ul className="social">
                  <li>
                     <a href='https://github.com/IovlevYuliy'
                        target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-github' />
                     </a>
                  </li>
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <Link to="about" smooth={true}>
               <i className="fa fa-chevron-circle-down"/>
            </Link>
         </p>

      </header>
	);
}
