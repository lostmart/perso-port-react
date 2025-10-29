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
					I'm a Full Stack Developer who believes the best code is written when
					you understand both the machine and the human behind the screen. With
					a Master's degree in Software Development (Bac +5, specializing in
					Java and Angular) and a decade of hands-on experience, I've built my
					career at the intersection of creating powerful web applications and
					empowering others to do the same.
				</p>
				<p>
					Beyond writing code, I'm deeply invested in shaping the next
					generation of developers. As an instructor and mentor, I've guided
					countless students through their web development journey, and I'm
					proud to serve on certification juries for Bac +3 web development
					programs in France—experiencing both sides of the education table
					keeps me grounded and constantly learning.
				</p>
				<p>
					My approach to development is shaped by my dual passions: the logical
					precision of programming and the creative expression of music. Whether
					I'm architecting a Spring Boot backend, crafting responsive React
					interfaces, or explaining complex concepts to students, I bring the
					same energy—solving problems, collaborating with diverse teams, and
					building solutions that are not just functional, but elegant.
				</p>
			</article>
			<h2 className="page_title">
				<span>T</span>echnical <span>E</span>xpertise
			</h2>
			<SwiperComp>{imagesArray}</SwiperComp>

			<ul>
				<li>
					<span>Languages & Core Technologies:</span>
					<span className="technosSection__item">
						JavaScript/TypeScript, Java, Python, PHP
					</span>
				</li>
				<li>
					<span>Frontend Development:</span>
					<span className="technosSection__item">
						React, Angular, Vue.js, Next.js, Nuxt.js | HTML5, CSS3, Tailwind,
						Bootstrap, Material UI | jQuery, Handlebars
					</span>
				</li>
				<li>
					<span>Backend Development:</span>
					<span className="technosSection__item">
						Node.js, Express, Spring Boot, Django, Flask, Laravel | RESTful
						APIs, GraphQL
					</span>
				</li>
				<li>
					<span>Data & Databases: </span>
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
					<span>Development Practices & Tools:</span>
					<span className="technosSection__item">
						Git, Agile/Scrum, TDD/BDD, Unit Testing (Jest, Mocha) | Webpack,
						Vite, Babel | Responsive Design, SEO Optimization
					</span>
				</li>
				<li>
					<span>Additional Skills;</span>
					<span className="technosSection__item">
						WordPress, Figma, Photoshop, Video Editing, Animation, teaching and
						mentoring
					</span>
				</li>
			</ul>
		</section>
	)
}

export default Technos
