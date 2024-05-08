import React, { useState } from "react"
import Accordion from "../components/atoms/Accordion"
import titleData from "../data/titles"

import Modal from "modal-package-martin-test/dist/Modal"

/*  ready to use render modal content  */
const RenderModalContent = () => {
	return (
		<>
			<div className="modal-header">
				<h5 className="modal-title">Modal title</h5>
			</div>
			<div className="modal-body">
				<p>Modal body text goes here.</p>
			</div>
		</>
	)
}

const Titles = () => {
	const [showModal, setModal] = useState(false)

	const handleClick = () => {
		setModal(() => !showModal)
	}

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
			<button onClick={handleClick}>Show Modal</button>
			<Modal showModal={showModal} onClick={handleClick}>
				<RenderModalContent />
			</Modal>
		</section>
	)
}

export default Titles
