import React from 'react';

import './styles/resume.css';
import './styles/icon-colors.css';

const faceCount = () => {
	return (
		<span>
			≈5·10<span style = {{ verticalAlign: 'super', fontSize: '12px' }}>7</span> faces
		</span>
	);
}

const squareListType = { listStyleType: 'square', marginTop: 0 };

const works = [
	{
		company: 'Rubius',
		position: 'Full Stack Software Engineer',
		date: '2019 — Present',
		description: () => {
			return (
				<ul style={squareListType}>
					<li>Support microservices architecture in Google Cloud Platform, collecting and analysis metrics via BigQuery and DataStudio.</li>
					<li>Implementing effective algorithms for visualization large point clouds ({faceCount()}) in browser.</li>
					<li>Developing tools for processing and manipulation with large point clouds using such technics like octrees and levels of details.</li>
					<li>Skeletal animation. Implementing web interface for manual point cloud and 3d hand model adjusting.</li>
				</ul>
			);
		},
		technologies: ['JavaScript', 'Node.js (express.js, koa.js)', 'Three.js', 'WebGL',
			'HTML5', 'CSS3', 'React.js', 'Vue.js', 'GLSL', 'Docker', 'GCloud', 'Kubernetes', 'Python',
			'PostgreSQL', 'MySQL', 'MongoDB'],
		icons: [
			{ icon: 'fab fa-js-square', title: 'JavaScript' },
			{ icon: 'fab fa-node', title: 'Node.js' },
			{ icon: 'fab fa-react', title: 'React.js' },
			{ icon: 'fas fa-cubes', title: 'Three.js' },
			{ icon: 'fab fa-html5', title: 'HTML5' },
			{ icon: 'fab fa-css3-alt', title: 'CSS3' },
			{ icon: 'fab fa-vuejs', title: 'Vue.js' },
			{ icon: 'fab fa-docker', title: 'Docker' },
			{ icon: 'fas fa-cube', title: 'Redis' },
			{ icon: 'fab fa-google', title: 'GCloud' },
			{ icon: 'fas fa-dharmachakra', title: 'Kubernetes' },
			{ icon: 'fab fa-mdb', title: 'MongoDB' },
			{ icon: 'fas fa-database', title: 'PostgreSQL' },
			{ icon: 'fab fa-ubuntu', title: 'Ubuntu' },
			{ icon: 'fab fa-git-square', title: 'Git' },
			{ icon: 'fab fa-jira', title: 'Jira' },
			{ icon: 'fab fa-confluence', title: 'Confluence' },
		],
	},
	{
		position: 'Software developer',
		date: '2017 — 2019',
		description: () => {
			return (
				<ul style={squareListType}>
					<li>Implementing algorithms for processing data from the Intel RealSense Depth Camera, detecting light sources on the obtained images.</li>
					<li>Support and developing hand pose estimation utility based on images and depth maps.</li>
					<li>Large point clouds ({faceCount()}) preprocessing, labeling, segmentation, planes detection (floor, ceiling, walls, etc). Introduced multithreading computation and loading source data.</li>
					<li>Implementing panorama stitching algorithm for indoor navigation software.</li>
				</ul>
			);
		},
		technologies: ['C++', 'STL', 'Boost', 'Linux', 'OpenCV', 'OpenMP', 'Docker', 'Python', 'Assimp'],
		icons: [
			{ icon: 'fa fa-code', title: 'C++' },
			{ icon: 'fab fa-linux', title: 'Linux' },
			{ icon: 'fab fa-docker', title: 'Docker' },
			{ icon: 'fab fa-python', title: 'Python' },
			{ icon: 'fab fa-bitbucket', title: 'Bitbucket' },
			{ icon: 'fab fa-osi', title: 'OpenCV' },
		],
	},
];

const skills = [
	{
		name: 'Russian language',
		level: '100%',
		title: 'Native',
	},
	{
		name: 'English language',
		level: '65%',
		title: 'Upper Intermediate',
	},
	{
		name: 'JavaScript',
		level: '100%',
		title: 'Expert',
	},
	{
		name: 'C++',
		level: '80%',
		title: 'Advanced',
	},
	{
		name: 'Git',
		level: '80%',
		title: 'Advanced',
	},
	{
		name: 'React.js',
		level: '75%',
		title: 'Advanced',
	},
	{
		name: 'Google Cloud Platform',
		level: '65%',
		title: 'Intermediate',
	},
	{
		name: 'T-SQL',
		level: '60%',
		title: 'Intermediate',
	},
	{
		name: 'HTML5',
		level: '60%',
		title: 'Intermediate',
	},
	{
		name: 'Docker',
		level: '50%',
		title: 'Intermediate',
	},
	{
		name: 'Python',
		level: '35%',
		title: 'Beginner',
	},

	{
		name: 'CSS3',
		level: '30%',
		title: 'Beginner',
	},
	{
		name: 'Vue.js',
		level: '25%',
		title: 'Beginner',
	},
	{
		name: 'Kubernetes',
		level: '15%',
		title: 'Beginner',
	},
];

export default function Resume() {
	return (
		<section id="resume">
			<div className="row education">
				<div className="three columns header-col">
					<h1><span>Education</span></h1>
				</div>

				<div className='nine columns main-col'>
					<div className='row item'>
						<div className='twelve columns'>
							<div className='flex-row'>
								<div>
									<h3>Tomsk Polytechnic University
									</h3>
									<p className="info">
										<em className="date">2017 — 2019</em>
										<span>&bull;</span>
										Master’s degree in Computer Science
									</p>
									<p>
										<strong>Program:</strong> Computer Analysis and Data Interpretation<br/>
										<span style={{ color: '#a94442' }}>Diploma with honors</span>
									</p>
								</div>
								<i className='fas fa-3x fa-user-graduate success-color' style={{ marginRight: '12px' }} />
							</div>
							<div className='flex-row'>
								<div>
									<h3>Tomsk Polytechnic University</h3>
									<p className="info">
										<em className="date">2013 — 2017</em>
										<span>&bull;</span>
										Bachelor’s degree in Computer Science
									</p>
									<p>
										<strong>Program:</strong> Information Systems and Technologies<br />
										<span style={{ color: '#337ab7' }}>Graduate diploma</span>
									</p>
								</div>
								<i className='fas fa-3x fa-graduation-cap success-color' />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row work">
				<div className="three columns header-col">
					<h1><span>work</span></h1>
				</div>

				<div className="nine columns main-col">
						{works.map((work, index) => {
							return (
								<div key={`work-${index}`} className='work-container'>
									{work.company && <h3>{work.company}</h3>}
									<p className="info">
										{work.position}
										<span>&bull;</span>
										<em className="date">{work.date}</em>
									</p>
									{work.description()}
									<div>
										<strong>Technologies:</strong> {work.technologies.join(', ')}<br />
										<div className='technology-icons-container'>
											{work.icons.map(it => {
												return (
													<i key={`icon-${it.icon}`}
														title={it.title}
														className={`fa-2x fa-fw ${it.icon}`} />
												);
											})}
										</div>
									</div>
								</div>
							);
						})}
				</div>
			</div>

			<div className="row awards">
				<div className="three columns header-col">
					<h1><span>Key awards</span></h1>
				</div>

				<div className="nine columns main-col">
					<div className='flex-row'>
						<ul style={squareListType}>
							<li>Finalist of international artificial intelligence programming contest Russian AI Cup 2020.</li>
							<li>Participant of an ACM ICPC Semi-finals NEERC (5 times from 2013 to 2017, as a member of Tomsk PU team).</li>
							<li>Multi-time winner and top-3 in University and Regional students programming contests (from 2016 to 2019).</li>
						</ul>
						<i className='fas fa-3x fa-trophy'/>
					</div>
				</div>
			</div>

			<div className="row skill">
				<div className="three columns header-col">
					<h1><span>Skills</span></h1>
				</div>

				<div className="nine columns main-col">
					<p>I am always interested in playing around with new technologies but these are the ones that I really want to mention here</p>
					<div className="bars">
						<ul className="skills">
							{skills.map(skill => {
								return (
									<li key={skill.name}>
										<span style={{ width: skill.level }} className='bar-expand'>
											<p className='skill-title'>{skill.title}</p>
										</span>
										<em>{skill.name}</em>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</section>
  	);
}
