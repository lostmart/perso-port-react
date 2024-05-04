import React from "react"
import Accordion from "../components/atoms/Accordion"
import titleData from "../data/titles"

const Titles = () => {
	const RenderTitles = () => {
		return titleData.map((item) => {
			return (
				<Accordion
					title={item.title}
					titleLevel={item.titleLevel}
					titleDate={item.titleDate}
					description={item.description}
					key={item.title}
				/>
			)
		})
	}
	return (
		<section className="titlesSection">
			<h2 className="page_title">
				<span>T</span>itles
			</h2>
			<ul>{<RenderTitles />}</ul>
		</section>
	)
}

export default Titles
