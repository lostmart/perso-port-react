import React from "react"
import PropTypes from "prop-types"
import { useRef, useState } from "react"
import { ChevronUp } from "react-feather"

const Accordion = ({ title, body, extraClass }) => {
	const bodyRef = useRef(null)
	const arrowRef = useRef(null)

	const [active, setActive] = useState(false)

	const handleClick = () => {
		const panel = bodyRef.current
		const arrow = arrowRef.current

		if (active) {
			setActive(!active)
			panel.style.maxHeight = "0"
			panel.style.padding = "0 16px 0 16px"
			arrow.style.rotate = "0deg"
		} else {
			setActive(!active)
			panel.style.maxHeight = panel.scrollHeight + "px"
			panel.style.padding = "18px 16px 12px 16px"
			arrow.style.rotate = "180deg"
		}
	}
	return (
		<div className="accordion">
			<h3 className="accordion__header">
				<button className="accordion__button" onClick={handleClick}>
					<span>
						<span>JavaScript React Developer</span>
					</span>

					<ChevronUp ref={arrowRef} />
				</button>
			</h3>
			<div ref={bodyRef} className="accordion__body">
				<h4 className="titlesSection_level">Diplôme de niveau 6 (bac +4)</h4>
				<p className="accordion__content">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dicta sit
					accusantium, facere officia omnis minima molestias repellendus
					officiis dignissimos, quos ipsa ratione necessitatibus iusto sed
					commodi voluptatum architecto nesciunt.
				</p>
			</div>
		</div>
	)
}

Accordion.propTypes = {
	title: PropTypes.string,
	body: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.string),
	]),
	extraClass: PropTypes.string,
}

export default Accordion
