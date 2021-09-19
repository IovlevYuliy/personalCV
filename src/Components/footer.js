import React from 'react';

import './styles/footer.css';

export function Footer() {
    // if(this.props.data){
    //   var networks= this.props.data.social.map(function(network){
    //     return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
    //   })
    // }

    return (
		<footer>
			<div className="row">
				<div className="twelve columns">
					<ul className="social-links">
						networks
					</ul>
					<ul className="copyright">
						<li>&copy; Copyright 2021 Yuliy Iovlev</li>
					</ul>
				</div>
				<div id="go-top">
					<a className="smoothscroll" title="Back to Top" href="#home">
						<i className="icon-up-open"/>
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
