import React, { useState } from "react"
import Accordion from "../components/atoms/Accordion"
import titleData from "../data/titles"
import coursesData from "../data/courses"

import Modal from "modal-package-martin-test/dist/Modal"

/*  ready to use render modal content  */
const RenderModalContent = ({ title, titleUrl }) => {
	const [isLoaded, setIsLoaded] = useState(false)

	const skeletonStyle = {
		width: "100%", // Adjust based on your layout needs
		height: "280px", // Adjust the height as necessary
		backgroundColor: "#ccc", // Light grey background for the skeleton
		animation: "pulse 1.2s infinite ease-in-out",
	}

	return (
		<>
			<div className="modal-header">
				<h5 className="modal-title">{title}</h5>
			</div>
			<div style={{ position: "relative" }} className="modal-body">
				{!isLoaded && <div style={skeletonStyle}></div>}
				<img
					src={titleUrl}
					alt={title}
					style={{ display: isLoaded ? "block" : "none" }}
					onLoad={() => setIsLoaded(true)}
					onError={() => setIsLoaded(true)} // Handle error if needed
				/>
			</div>
		</>
	)
}

const Titles = () => {
	// console.log(titleData[0])

	const [showModal, setModal] = useState(false)

	const [modalContent, setModalContent] = useState({ title: "", titleUrl: "" })

	function updateTitle(newTitle, newTitleUrl) {
		setModalContent((prevContent) => ({
			...prevContent,
			title: newTitle,
			titleUrl: newTitleUrl,
		}))
	}

	const handleClick = (index, info) => {
		setModal(() => !showModal)

		if (info === "courses") {
			return updateTitle(coursesData[index].title, coursesData[index].titleUrl)
		}

		if (typeof index === "number") {
			updateTitle(titleData[index].title, titleData[index].titleUrl)
		} else {
			updateTitle("", "")
		}
	}

	const RenderTitles = () => {
		return titleData.map((item, i) => {
			return (
				<Accordion
					title={item.title}
					titleLevel={item.titleLevel}
					titleDate={item.titleDate}
					description={item.description}
					titleOfficialSite={item.titleOfficialSite}
					schoolImg={item.schoolImg}
					key={item.title}
					onClick={() => handleClick(i)}
				/>
			)
		})
	}

	const RenderCourses = () => {
		return coursesData.map((course, courseIndx) => {
			return (
				<article key={course.title} className="card">
					<div>
						<img
							className="courses_imgs"
							src={`/schools/${course.schoolImg}`}
							alt="ok"
						/>
						<h4>
							<span>{course.title}</span>
							<span className="course_year">{course.year}</span>
						</h4>
					</div>

					<button onClick={() => handleClick(courseIndx, "courses")}>
						Show Title
					</button>
				</article>
			)
		})
	}
	return (
		<section className="titlesSection">
			<h2 className="page_title">
				<span>T</span>itles
			</h2>
			<ul>{<RenderTitles />}</ul>
			<Modal showModal={showModal} onClick={handleClick}>
				<RenderModalContent
					title={modalContent.title}
					titleUrl={modalContent.titleUrl}
				/>
			</Modal>
			<article className="titlesSection__courses">
				<h3>Other courses</h3>
				<RenderCourses />
			</article>
		</section>
	)
}

export default Titles
