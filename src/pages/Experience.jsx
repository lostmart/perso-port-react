import experienceData from "../data/en/experience"

const Experience = () => {
	const ExperienceDataRender = () => {
		return experienceData.map((exp) => {
			return (
				<article key={exp.title} className="card">
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
							{exp.areas.map((area) => {
								return (
									<li key={area}>
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
	return (
		<section className="experience">
			<h2 className="page_title">
				<span>P</span>rofessional <span>E</span>xperience
			</h2>
			<div>
				<ExperienceDataRender />
			</div>
		</section>
	)
}

export default Experience
