import React from "react"
import { ChevronUp } from "react-feather"
import Accordion from "../components/atoms/Accordion"

const Titles = () => {
	return (
		<section className="titlesSection">
			<h2 className="page_title">
				<span>T</span>itles
			</h2>
			<ul>
				<li>
					<Accordion />
				</li>
			</ul>
		</section>
	)
}

export default Titles
