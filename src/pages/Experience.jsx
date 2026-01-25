import { useTranslation } from "../hooks/useTranslation"
import { useLanguage } from "../contexts/LanguageContext"
import { useState, useEffect } from "react"

const Experience = () => {
	const { t } = useTranslation()
	const { currentLanguage } = useLanguage()
	const [experienceData, setExperienceData] = useState(null)

	useEffect(() => {
		const loadExperienceData = async () => {
			try {
				let dataModule
				// Following your Technos pattern for file paths and suffixes
				if (currentLanguage === "en") {
					dataModule = await import("../data/en/experience.js")
				} else if (currentLanguage === "fr") {
					dataModule = await import("../data/fr/experience-fr.js")
				} else if (currentLanguage === "es") {
					dataModule = await import("../data/sp/experience-es.js")
				}
				setExperienceData(dataModule.default)
			} catch (error) {
				console.error(
					`Failed to load experience data for language: ${currentLanguage}`,
					error,
				)
			}
		}

		loadExperienceData()
	}, [currentLanguage])

	const ExperienceDataRender = () => {
		if (!experienceData) return null

		/*
		<h4>
							<a target="_blank" rel="noreferrer" href={exp.link}>
								{exp.institute[0]}
							</a>
							, {exp.institute[1]} —
							<span className="card_title">{exp.title}</span>
						</h4>
						*/

		return experienceData.positions.map((exp, index) => {
			return (
				<article key={`${exp.title}-${index}`} className="card">
					<div>
						<h4>
							<a target="_blank" rel="noreferrer" href={exp.link}>
								{exp.institute[0]}
							</a>
							, {exp.institute[1]} —
							<span className="card_title">{exp.title}</span>
						</h4>
						<span className="card_date">{exp.date}</span>
						<ul>
							{exp.areas.map((area, i) => {
								return (
									<li key={i}>
										<span className="responsibility__category">
											{area.category}
										</span>
										<span>{area.description}</span>
									</li>
								)
							})}
						</ul>
						<p>{exp.conclusion}</p>
					</div>
				</article>
			)
		})
	}

	if (!experienceData) {
		return <div>Loading...</div>
	}

	return (
		<section className="experience">
			<h2 className="page_title">
				<span>{experienceData.pageTitle.firstLetter}</span>
				{experienceData.pageTitle.rest}
				<span>{" " + experienceData.pageTitle.firstLetter2}</span>
				{experienceData.pageTitle.rest2}
			</h2>
			<div>
				<ExperienceDataRender />
			</div>
		</section>
	)
}

export default Experience
