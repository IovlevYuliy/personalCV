import React from 'react';

import './styles/about.css';

export default function About() {
   return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src='' />
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>

               <p>BIO</p>
               <div className="row">
                  <div className="columns contact-details">
                     <h2>Contact Details</h2>
                     <p className="address">
                        <span>Yuliy Iovlev</span><br/>
                        <span>Tomsk, Russia</span><br/>
                        <span>iovlev2@gmail.com</span>
                     </p>
                  </div>
                  <div className="columns download">
                     <p>
                        <a href='' className="button">
                           <i className="fa fa-download"/> Download Resume
                        </a>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
