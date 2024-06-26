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

const imagesArray = [
	FaWordpress,
	FaSass,
	IoLogoJavascript,
	BiLogoTypescript,
	FaPython,
	FaPhp,
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
	return (
		<section className="technosSection">
			<h2 className="page_title">
				<span>A</span>bout
			</h2>
			<article className="techno__about">
				<p>
					I am a passionate and dedicated Full Stack Web Developer with over a
					decade of experience in creating robust and dynamic web applications.
					I have a strong foundation in both front-end and back-end development,
					with expertise in a wide range of technologies and frameworks. My
					journey in web development has been marked by a continuous pursuit of
					knowledge and a commitment to delivering high-quality, scalable
					solutions.
				</p>
				<p>
					I thrive on solving complex problems, collaborating with diverse
					teams, and mentoring the next generation of developers. My teaching
					and mentoring roles have sharpened my ability to communicate technical
					concepts clearly and effectively, while my freelance projects have
					honed my skills in client management and project delivery.
				</p>
			</article>
			<h2 className="page_title">
				<span>T</span>echnical <span>S</span>kills
			</h2>
			<SwiperComp>{imagesArray}</SwiperComp>

			<ul>
				<li>
					<span>Languages:</span>
					<span className="technosSection__item">
						Sass, JavaScript, TypeScript, Python, Php
					</span>
				</li>
				<li>
					<span>Frontend Technologies:</span>
					<span className="technosSection__item">
						HTML, CSS, JQuery, Handlebars, React, Vue.js, Bootstrap, Tailwind,
						Materialize
					</span>
				</li>
				<li>
					<span>Backend Technologies:</span>
					<span className="technosSection__item">
						Node.js, Express, Django, Flask
					</span>
				</li>
				<li>
					<span>Databases: </span>
					<span className="technosSection__item">
						MySQL, PostgreSQL, MongoDB, SQLite
					</span>
				</li>
				<li>
					<span>Tools: </span>
					<span className="technosSection__item">
						Git, Jest, Mocha, Webpack, Babel, Vite, Figma, Photoshop
					</span>
				</li>
				<li>
					<span>Others:</span>
					<span className="technosSection__item">
						Vuex, TDD, NextJs, Nuxt, Responsive Web Design, Unit Testing, Agile
						web developer, SEO, Wordpress, Video Editing, Animaion
					</span>
				</li>
			</ul>
		</section>
	)
}

export default Technos
