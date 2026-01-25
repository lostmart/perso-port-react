import { useState, useEffect } from "react"
import Accordion from "../components/atoms/Accordion"
import Modal from "modal-package-martin-test/dist/Modal"
import { useLanguage } from "../contexts/LanguageContext"

/*  ready to use render modal content  */
const RenderModalContent = ({ title, titleUrl }) => {
	const [isLoaded, setIsLoaded] = useState(false)

	const skeletonStyle = {
		width: "100%",
		height: "280px",
		backgroundColor: "#ccc",
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
					onError={() => setIsLoaded(true)}
				/>
			</div>
		</>
	)
}

const Titles = () => {
	const { currentLanguage } = useLanguage()
	const [titleData, setTitleData] = useState(null)
	const [coursesData, setCoursesData] = useState(null)
	const [showModal, setModal] = useState(false)
	const [modalContent, setModalContent] = useState({ title: "", titleUrl: "" })

	// Load titles data based on current language
	useEffect(() => {
		const loadTitlesData = async () => {
			try {
				let dataModule
				if (currentLanguage === "en") {
					dataModule = await import("../data/en/titles.js")
				} else if (currentLanguage === "fr") {
					dataModule = await import("../data/fr/titles-fr.js")
				} else if (currentLanguage === "es") {
					dataModule = await import("../data/sp/titles-es.js")
				}
				setTitleData(dataModule.default)
			} catch (error) {
				console.error(
					`Failed to load titles data for language: ${currentLanguage}`,
					error,
				)
			}
		}

		loadTitlesData()
	}, [currentLanguage])

	// Load courses data based on current language
	useEffect(() => {
		const loadCoursesData = async () => {
			try {
				let dataModule
				if (currentLanguage === "en") {
					dataModule = await import("../data/en/courses.js")
				} else if (currentLanguage === "fr") {
					dataModule = await import("../data/fr/courses-fr.js")
				} else if (currentLanguage === "es") {
					dataModule = await import("../data/sp/courses-es.js")
				}
				setCoursesData(dataModule.default)
			} catch (error) {
				console.error(
					`Failed to load courses data for language: ${currentLanguage}`,
					error,
				)
			}
		}

		loadCoursesData()
	}, [currentLanguage])

	function updateTitle(newTitle, newTitleUrl) {
		setModalContent((prevContent) => ({
			...prevContent,
			title: newTitle,
			titleUrl: newTitleUrl,
		}))
	}

	const handleClick = (index, info) => {
		setModal(() => !showModal)

		if (info === "courses" && coursesData) {
			return updateTitle(coursesData[index].title, coursesData[index].titleUrl)
		}

		if (typeof index === "number" && titleData) {
			updateTitle(
				titleData.titles[index].title,
				titleData.titles[index].titleUrl,
			)
		} else {
			updateTitle("", "")
		}
	}

	const RenderTitles = () => {
		if (!titleData) return null

		return titleData.titles.map((item, i) => {
			return (
				<Accordion
					title={item.title}
					titleLevel={item.titleLevel}
					titleDate={item.titleDate}
					description={item.description}
					titleOfficialSite={item.titleOfficialSite}
					schoolImg={item.schoolImg}
					key={item.title}
					areas={item.areas}
					conclusion={item.conclusion}
					onClick={() => handleClick(i)}
				/>
			)
		})
	}

	const RenderCourses = () => {
		if (!coursesData) return null

		return coursesData.map((course, courseIndx) => {
			return (
				<article key={course.title} className="card">
					<div>
						<img
							className="courses_imgs"
							src={`/schools/${course.schoolImg}`}
							alt={course.title}
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

	// Loading state
	if (!titleData || !coursesData) {
		return <div>Loading...</div>
	}

	return (
		<section className="titlesSection">
			<h2 className="page_title">
				<span>{titleData.pageTitle.firstLetter}</span>
				{titleData.pageTitle.rest}
			</h2>

			<ul>
				<RenderTitles />
			</ul>

			<Modal showModal={showModal} onClick={handleClick}>
				<RenderModalContent
					title={modalContent.title}
					titleUrl={modalContent.titleUrl}
				/>
			</Modal>

			<article className="titlesSection__courses">
				<h3>{titleData.pageTitle.subTitle}</h3>
				<RenderCourses />
			</article>
		</section>
	)
}

export default Titles
