import React from "react"
import projectsData from "../data/projects"

const Projects = () => {
	const ProjectsRender = () => {
		return projectsData.map((project) => {
			return (
				<article key={project.projectName} className="card">
					<h3>{project.projectName}</h3>
					<img
						src="https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt=""
					/>
					<div className="card__body">
						<p>{project.description}</p>
						<div className="card__technologies">
							{project.tags.map((tag) => {
								return <span key={tag}> {tag} </span>
							})}
						</div>
					</div>
				</article>
			)
		})
	}
	return (
		<section className="projects">
			<h2 className="page_title">
				<span>P</span>rojects
			</h2>
			<div>
				<ProjectsRender />
			</div>
		</section>
	)
}

export default Projects
