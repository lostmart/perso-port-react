import {
	FaWordpress,
	FaSass,
	FaPython,
	FaPhp,
	FaHtml5,
	FaCss3Alt,
	FaReact,
	FaVuejs,
	FaBootstrap,
	FaNodeJs,
	FaGitSquare,
	FaFigma,
	FaJava,
	FaJs,
} from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import {
	SiHandlebarsdotjs,
	SiExpress,
	SiFlask,
	SiMysql,
	SiBabel,
} from "react-icons/si"
import {
	SiJquery,
	SiMongodb,
	SiSqlite,
	SiJest,
	SiMocha,
	SiWebpack,
	SiNuxtdotjs,
} from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io"
import { BiLogoTypescript } from "react-icons/bi"
import {
	DiMaterializecss,
	DiDjango,
	DiPostgresql,
	DiPhotoshop,
} from "react-icons/di"
import { RiNextjsLine } from "react-icons/ri"
import { TbBrandVite } from "react-icons/tb"

import SwiperComp from "../components/SwiperComp"
import { useLanguage } from "../contexts/LanguageContext"
import { useState, useEffect } from "react"

const imagesArray = [
	FaWordpress,
	FaSass,
	IoLogoJavascript,
	BiLogoTypescript,
	FaPython,
	FaPhp,
	FaJava,
	FaJs,
	FaHtml5,
	FaCss3Alt,
	SiJquery,
	SiHandlebarsdotjs,
	FaReact,
	FaVuejs,
	FaBootstrap,
	RiTailwindCssFill,
	DiMaterializecss,
	FaNodeJs,
	SiExpress,
	DiDjango,
	SiFlask,
	SiMysql,
	DiPostgresql,
	SiMongodb,
	SiSqlite,
	FaGitSquare,
	SiJest,
	SiMocha,
	SiWebpack,
	SiBabel,
	TbBrandVite,
	FaFigma,
	DiPhotoshop,
	RiNextjsLine,
	SiNuxtdotjs,
]

const Technos = () => {
	const { currentLanguage } = useLanguage()
	const [technosData, setTechnosData] = useState(null)

	useEffect(() => {
		const loadTechnosData = async () => {
			try {
				let dataModule
				if (currentLanguage === "en") {
					dataModule = await import("../data/en/technos.js")
				} else if (currentLanguage === "fr") {
					dataModule = await import("../data/fr/technos-fr.js")
				} else if (currentLanguage === "es") {
					dataModule = await import("../data/sp/technos-es.js")
				}
				setTechnosData(dataModule.default)
			} catch (error) {
				console.error(
					`Failed to load technos data for language: ${currentLanguage}`,
					error,
				)
			}
		}

		loadTechnosData()
	}, [currentLanguage])

	if (!technosData) {
		return <div>Loading...</div>
	}

	return (
		<section className="technosSection">
			<h2 className="page_title">
				<span>{technosData.pageTitle.firstLetter}</span>
				{technosData.pageTitle.rest}
			</h2>

			<article className="techno__about">
				{technosData.aboutSections.map((section, index) => (
					<p key={index}>{section.text}</p>
				))}
			</article>

			<h2 className="page_title">
				<span>{technosData.expertiseTitle.firstLetter}</span>
				{technosData.expertiseTitle.word1}{" "}
				<span>{technosData.expertiseTitle.secondLetter}</span>
				{technosData.expertiseTitle.word2}
			</h2>

			<SwiperComp>{imagesArray}</SwiperComp>

			<ul>
				{technosData.skillsList.map((skill, index) => (
					<li key={index}>
						<span>{skill.category}</span>
						<span className="technosSection__item">{skill.items}</span>
					</li>
				))}
			</ul>
		</section>
	)
}

export default Technos
