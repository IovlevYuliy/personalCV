import React from 'react';
import ReactGA from 'react-ga';

import Header from './Components/header';
import Footer from './Components/footer';
import About from './Components/about';
import Resume from './Components/resume';
import Portfolio from './Components/portfolio';

import './app.css';

export default function App() {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     foo: 'bar',
  //     resumeData: {}
  //   };

  //   // ReactGA.initialize('UA-110570651-1');
  //   // ReactGA.pageview(window.location.pathname);
  // }

  return (
    <div>
		<Header />
		<About />
		<Resume />
		<Portfolio />
		<Footer />
    </div>
  );
}

