import React from "react"
import PropTypes from "prop-types"
import { useRef, useState } from "react"
import { ChevronUp } from "react-feather"

const Accordion = ({ title, body, extraClass }) => {
	return (
		<div className="accordion">
			<h3 className="accordion__header">
				<button>
					<span>
						<span>JavaScript React Developer</span>
						<span className="titlesSection_level">
							Diplôme de niveau 6 (bac +4)
						</span>
					</span>

					<ChevronUp />
				</button>
			</h3>
			<div className="accordion__body">Accordion body ...</div>
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
