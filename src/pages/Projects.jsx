import React from "react"
import projectsData from "../data/projects"

import SwiperCube from "../components/SwiperCube"

const Projects = () => {
	const ProjectsRender = () => {
		return projectsData.map((project) => {
			return (
				<article key={project.projectName} className="card">
					<h3>{project.projectName}</h3>
					<SwiperCube />

					<div className="card__body">
						<p>{project.description}</p>
						<div className="card__technologies">
							{project.tags.map((tag) => {
								return (
									<span className="card__btn" key={tag}>
										{tag}
									</span>
								)
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
				<SwiperCube />
			</div>
		</section>
	)
}

export default Projects
