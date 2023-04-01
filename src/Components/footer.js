import React from 'react';
import { Link } from 'react-scroll';

import './styles/footer.css';

export default function Footer() {
    return (
      <footer>
         <div className="row">
            <div className="twelve columns">
               <ul className="social-links">
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
               <ul className="copyright">
                  <li>&copy; Copyright 2021 Yuliy Iovlev</li>
               </ul>
            </div>
            <div id="go-top">
               <Link to="home" smooth={true} title="Back to Top">
                  <i className="fa fa-chevron-up" />
               </Link>
            </div>
         </div>
      </footer>
    );
}
