import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';

import './styles/header.css';

export default function Header() {
   const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

   const [isHomeActive, setIsHomeActive] = useState(true);
   const [navbarVisible, setNavbarVisibility] = useState(!isMobile);

   const handleOutsideClick = useCallback(() => {
      setNavbarVisibility(false);
   }, []);

   const hideNavbar = useCallback(() => {
      if (!isMobile) {
         return;
      }
      setNavbarVisibility(false);
   }, [isMobile]);

   const showNavbar = useCallback(() => setNavbarVisibility(true), [setNavbarVisibility]);

   useEffect(() => {
      if (!isMobile) {
         setNavbarVisibility(true);
      }
   }, [isMobile]);

   useEffect(() => {
      if (isMobile) {
         document.addEventListener('click', handleOutsideClick, true);
      } else {
         document.removeEventListener('click', handleOutsideClick, true);
      }

      return () => document.removeEventListener('click', handleOutsideClick, true);
   }, [isMobile]);

   return (
      <header id="home">
         <nav id="nav-wrap">

            <div id='nav-buttons' style={{ display: isMobile ? 'block' : 'none' }}>
               <a
                  className="mobile-btn"
                  title="Show navigation"
                  style={{ display: navbarVisible ? 'none' : 'block' }}
                  onClick={showNavbar}>
                     Show navigation
               </a>

               <a
                  className="mobile-btn"
                  title="Hide navigation"
                  onClick={hideNavbar}
                  style={{ display: navbarVisible ? 'block' : 'none' }}>
                     Hide navigation
               </a>
            </div>

            <ul id="nav"
               style={{ display: navbarVisible ? 'block' : 'none' }}
               className={isHomeActive ? '' : 'opaque'}>
               <li>
                  <Link
                     className={isHomeActive ? 'current' : ''}
                     onSetActive={() => setIsHomeActive(true)}
                     onSetInactive={() => setIsHomeActive(false)}
                     activeClass="current"
                     onClick={hideNavbar}
                     to="home" spy={true} hashSpy={true} smooth={true}>
                        Home
                  </Link>
               </li>
               <li>
                  <Link
                     onSetActive={() => setIsHomeActive(false)}
                     activeClass="current"
                     onClick={hideNavbar}
                     to="about" spy={true} hashSpy={true} smooth={true}>
                        About
                  </Link>
               </li>
               <li>
                  <Link
                     onSetActive={() => setIsHomeActive(false)}
                     activeClass="current"
                     onClick={hideNavbar}
                     to="resume" spy={true} hashSpy={true} smooth={true}>
                        Resume
                  </Link>
               </li>
               <li>
                  <Link
                     onSetActive={() => setIsHomeActive(false)}
                     activeClass="current"
                     onClick={hideNavbar}
                     to="portfolio" spy={true} hashSpy={true} smooth={true}>
                        Works
                  </Link>
               </li>
            </ul>

         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 lang='en' className="responsive-headline">I'm Yuliy Iovlev</h1>
               <h1 lang='ru' className="responsive-headline" hidden>Юлий Иовлев</h1>
               <h3>Full-stack developer who uses spaces for indentation.</h3>
               <hr />
               <ul className="social">
                  <li>
                     <a href='https://linkedin.com/in/yuliy-iovlev' title='LinkedIn'
                        target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-linkedin' />
                     </a>
                  </li>
                  <li>
                     <a href='https://t.me/i_yuliy' title='Telegram'
                        target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-telegram' />
                     </a>
                  </li>
                  <li>
                     <a href='https://github.com/IovlevYuliy' title='Github'
                        target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-github' />
                     </a>
                  </li>
                  <li>
                     <a href='https://gitlab.com/iovlev_yuliy' title='GitLab'
                        target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-gitlab' />
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
