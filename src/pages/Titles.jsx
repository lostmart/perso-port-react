import React from "react"
import { ChevronUp } from "react-feather"

const Titles = () => {
	return (
		<section className="titlesSection">
			<h2 className="page_title">
				<span>T</span>itles
			</h2>
			<ul>
				<li>
					<div>
						<span>JavaScript React Developer</span>
						<span className="titlesSection_level">
							Diplôme de niveau 6 (bac +4)
						</span>
					</div>
					<button>
						<ChevronUp />
					</button>
				</li>
			</ul>
		</section>
	)
}

export default Titles
