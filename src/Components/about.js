import React from 'react';

import './styles/about.css';

export default function About() {
   return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic" alt='profile' src='/images/yuliy.jpg'/>
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>

               <p>I am techie at heart. Since school I have been doing competitive programming. I have a large experience on different programming contest.<br/>
                  I like algorithmic and math problems, I enjoy to work with computer graphics and 3D geometry. I am responsible for each line of code that I produce. I approach my tasks responsibly and I am ready to deep into problem down to the smallest details.<br/>
                  Outside of work I like football and other active games. I love to travel and lead a fairly active lifestyle.</p>
               <div className="row">
                  <div className="columns contact-details">
                     <h2>Contact Details</h2>
                     <p>
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
