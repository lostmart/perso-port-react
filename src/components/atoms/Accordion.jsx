import React from "react"
import PropTypes from "prop-types"
import { useRef, useState } from "react"
import { ChevronUp } from "react-feather"

const Accordion = ({ title, titleLevel, titleDate, description, onClick }) => {
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
			// panel.style.maxHeight = panel.scrollHeight + "px"
			panel.style.maxHeight = "380px"
			panel.style.padding = "18px 16px 12px 16px"
			arrow.style.rotate = "180deg"
		}
	}

	return (
		<li>
			<div className="accordion">
				<h3 className="accordion__header">
					<button
						className={
							active
								? "accordion__button accordion__button-active"
								: "accordion__button"
						}
						onClick={handleClick}
					>
						<span>
							<span>{title}</span>
						</span>

						<ChevronUp ref={arrowRef} />
					</button>
				</h3>
				<div ref={bodyRef} className="accordion__body">
					<h4 className="titlesSection_level">
						{titleLevel ? titleLevel : ""}
						<span className="accordion__year">{titleDate}</span>
					</h4>
					<p className="accordion__content">{description}</p>
					<button onClick={onClick} className="card__btn">
						Show me the title
					</button>
				</div>
			</div>
		</li>
	)
}

Accordion.propTypes = {
	title: PropTypes.string,
	titleLevel: PropTypes.string,
	titleDate: PropTypes.string,
	description: PropTypes.string,
	extraClass: PropTypes.string,
	onClick: PropTypes.func,
}

export default Accordion
