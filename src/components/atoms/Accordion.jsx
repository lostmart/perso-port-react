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
							<span>JavaScript React Developer</span>
						</span>

						<ChevronUp ref={arrowRef} />
					</button>
				</h3>
				<div ref={bodyRef} className="accordion__body">
					<h4 className="titlesSection_level">
						Diplôme de niveau 6 (bac +4){" "}
						<span className="accordion__year">2022 - 2023</span>
					</h4>
					<p className="accordion__content">
						JavaScript React developers, also known as front-end developers, are
						in charge of creating dynamic websites using a programming language.
						They take care of the front-end part, i.e. the visual side of the
						site. It includes:
					</p>
					<ul className="accordion__items">
						<li>
							Understanding the project they’re working on to develop the most
							satisfying features and interfaces for their client.
						</li>
						<li>
							Implementing mockups with a keen eye for detail and rigorous
							standards.
						</li>
						<li>
							Using best practices to structure HTML, CSS and Javascript code.
						</li>
						<li>
							Using frameworks such as React to build powerful and modular
							applications.
						</li>
						<li>
							Using tests to monitor their applications and ensure the highest
							quality service.
						</li>
						<li>
							Providing technical and functional documentation of the site for
							their clients and colleagues.
						</li>
						<li>Optimizing page load time.</li>
					</ul>
				</div>
			</div>
			
		</li>
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
