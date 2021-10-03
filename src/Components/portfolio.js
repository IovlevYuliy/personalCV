import React from 'react';

import './styles/portfolio.css';

const projects = [
    {
        title: 'My project',
        category: 'In developing',
        url: '/',
        image: '/images/sample.jpg',
    },
];

export default function Portfolio() {
	return (
        <section id="portfolio">
			<div className="row">
				<div className="twelve columns collapsed">
					<h1>My works and pet-projects</h1>
					<div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                		{projects.map(project => {
                            return (
                                <div key={project.title} className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href={project.url} title={project.title}>
                                            <img alt={projects.title} src={project.image} />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>{project.title}</h5>
                                                    <p>{project.category}</p>
                                                </div>
                                            </div>
                                            <div className="link-icon">
                                                <i className="fa fa-link"/>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
					</div>
          		</div>
		  	</div>
   		</section>
    );
}
