import { Link, useParams } from "react-router-dom"
import projectsData from "../data/projects"
import { FaGithub } from "react-icons/fa"
import { AiOutlineDeploymentUnit } from "react-icons/ai"
import AnimatedSection from "../components/AnimatedSection"

const ProjectSingle = () => {
	const { id } = useParams() // `userId` matches the `:userId` in your route definition
	const index = id - 1

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
							<img src={`../assests/${detail.imgName}`} alt={detail.legend} />
							<figcaption>{detail.legend}</figcaption>
						</figure>
					</article>
				</AnimatedSection>
			)
		})
	}

	// const text = projectsData[index].projectName
	// const words = text.split(" ")

	// // Map through each word and wrap the first letter with a span
	// const highlightedText = words.map((word, index) => {
	// 	// Check if the word is not empty
	// 	if (word.length > 0) {
	// 		return (
	// 			<h2 key={index}>
	// 				<span className="highlight">{word[0]}</span>
	// 				{word.slice(1)}
	// 				{index < words.length - 1 && " "}
	// 			</h2>
	// 		)
	// 	}
	// 	return ""
	// })

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
