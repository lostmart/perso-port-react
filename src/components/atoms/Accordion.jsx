import React from "react"
import PropTypes from "prop-types"
import { useRef, useState } from "react"
import { ChevronUp } from "react-feather"
import { ImNewTab } from "react-icons/im"

const Accordion = ({
	title,
	titleLevel,
	titleDate,
	description,
	onClick,
	titleOfficialSite,
	schoolImg,
}) => {
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
			panel.style.maxHeight = "420px"
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
						onClick={() => handleClick(null, null)}
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
						<img
							className="accordion_school"
							src={`/schools/${schoolImg}`}
							alt={title}
						/>
					</h4>
					<p className="accordion__content">{description}</p>
					<button onClick={onClick} className="card__btn">
						Show me the title
					</button>
					{titleOfficialSite && (
						<div className="accordion-right">
							<a
								className="accordion__btn-sec"
								target="_blank"
								href={titleOfficialSite}
							>
								Official Site {<ImNewTab />}
							</a>
						</div>
					)}
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
