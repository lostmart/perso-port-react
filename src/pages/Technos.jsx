import React from "react"

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
				<span>T</span>echnical <span>S</span>kills
			</h2>
			<SwiperComp children={imagesArray} />
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
