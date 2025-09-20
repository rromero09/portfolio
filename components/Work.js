import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'

export const Skills = ({ title, cards }) => {
	return (
		<div id="skills" className="bg-secondary py-5 px-5">
			<div className="container">
				<div className="text-center mb-5">
					<h1 className="text-primary fw-bold display-4 mb-3">{title}</h1>
					<p className="text-light lead">My professional experience and areas of expertise</p>
				</div>
				<div className="row g-4 justify-content-center">
					{cards.map((value, index) => (
						<div key={index} className="col-lg-6 col-md-8">
							<Card
								title={value.title}
								description={value.description}
								link={value.link} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export const Projects = ({ title, cards }) => {
	return (
		<div id="projects" className="bg-primary py-5 px-5">
			<div className="container">
				<div className="text-center mb-5">
					<h1 className="text-light fw-bold display-4 mb-3">Projects</h1>
					<p className="text-light lead">Here are some of my recent projects that showcase my skills and passion for development</p>
				</div>
				<div className="row g-4 justify-content-center">
					{cards.map((value, index) => (
						<div key={index} className="col-lg-4 col-md-6">
							<ProjectCard
								title={value.title}
								description={value.description}
								link={value.link}
								icons={value.icons} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export const ProjectCard = ({ title, description, link, icons }) => {
	return (
		<div className="card h-100 card-work">
			<div className="card-body d-flex flex-column">
				<h4 className="card-title text-primary mb-3">{title}</h4>
				<p className="card-text text-light flex-grow-1">{description}</p>
				<div className="mt-auto">
					{link && (
						<div className="mb-3">
							<Link href={link}>
								<a target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm">
									View Project
								</a>
							</Link>
						</div>
					)}
					{icons && (
						<div className="text-end">
							{icons.map((value, index) => (
								<Link key={index} href={value.link}>
									<a target="_blank" rel="noreferrer">
										<FontAwesomeIcon className="icon-style mx-1" icon={value.icon} size="lg" />
									</a>
								</Link>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export const TechStack = ({ title, technologies }) => {
	return (
		<div id="tech-stack" className="bg-dark py-5 px-5">
			<div className="container">
				<div className="text-center mb-5">
					<h1 className="text-primary fw-bold display-4 mb-3">{title}</h1>
					<p className="text-light lead">Technologies and tools I work with</p>
				</div>
				<div className="row g-4 justify-content-center">
					{technologies.map((tech, index) => (
						<div key={index} className="col-lg-2 col-md-3 col-sm-4 col-6">
							<div className="tech-card text-center">
								<div className="tech-icon mb-3" style={{ fontSize: '3rem', color: tech.color }}>
									{tech.emoji}
								</div>
								<h6 className="text-light">{tech.name}</h6>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export const Card = ({ title, description, icons }) => {
	return (
		<div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{ width: "20rem" }}>
			<h4 className="text-primary">{title}</h4>
			<p className="text-dark">{description}</p>
			<div className="text-end">
				{icons && icons.map((value, index) => (
					<Link key={index} href={value.link}>
						<a target="_blank" rel="noreferrer">
							<FontAwesomeIcon className="icon-style mx-1" icon={value.icon} size="2x" />
						</a>
					</Link>
				))}
			</div>
		</div>
	);
}