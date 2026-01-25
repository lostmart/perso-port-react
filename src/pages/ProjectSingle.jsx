import { Link, useParams } from "react-router-dom"
import projectsData from "../data/en/projects"
import { FaGithub } from "react-icons/fa"
import { AiOutlineDeploymentUnit } from "react-icons/ai"
import AnimatedSection from "../components/AnimatedSection"
import { useEffect } from "react"

const ProjectSingle = () => {
	const { id } = useParams() // `userId` matches the `:userId` in your route definition
	const index = id - 1

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [id])

	const RenderDetails = () => {
		return projectsData[index].details.map((detail, i) => {
			if (i === 0) return false
			return (
				<AnimatedSection key={detail.legend}>
					<article
						className="card"
						style={{
							opacity: 1,
						}}
					>
						<figure>
							<img
								style={{ margin: "1em auto" }}
								src={`../assests/${detail.imgName}`}
								alt={detail.legend}
							/>
							<figcaption>{detail.legend}</figcaption>
						</figure>
					</article>
				</AnimatedSection>
			)
		})
	}

	return (
		<section className="singlePage">
			<img
				src={`../assests/${projectsData[index].details[0].imgName}`}
				alt={projectsData[index].details[0].legend}
				className="header-img"
			/>
			<h2 className="page_title">
				<span>{projectsData[index].projectName}</span>
			</h2>
			<div>
				<AnimatedSection>
					<article className="card">
						<h3>Description</h3>
						<p>{projectsData[index].description}</p>
						<div className="btn_containers">
							<a
								href={projectsData[index].githubLink}
								target="_blank"
								className="card__btn"
								rel="noreferrer"
							>
								<FaGithub className="icon" /> Repo
							</a>
							<a
								href={projectsData[index].deploy}
								target="_blank"
								rel="noreferrer"
								className="card__btn"
							>
								<AiOutlineDeploymentUnit className="icon" /> Deploy
							</a>
						</div>
					</article>
				</AnimatedSection>
				<RenderDetails />
			</div>

			<Link to="/projects">Back to Projects</Link>
		</section>
	)
}

export default ProjectSingle
