import React from "react"

import bootstrap from "../assets/imgs/bootstrap.png"
import css from "../assets/imgs/css.png"
import figma from "../assets/imgs/figma.png"
import flask from "../assets/imgs/flask.png"
import git from "../assets/imgs/git.png"
import handlebars from "../assets/imgs/handlebars.png"
import html from "../assets/imgs/html.png"
import jquery from "../assets/imgs/jquery.png"
import js from "../assets/imgs/js.png"
import material from "../assets/imgs/material.png"
import mongo from "../assets/imgs/mongo.png"
import mysql from "../assets/imgs/mysql.png"
import nodejs from "../assets/imgs/nodejs.png"
import photoshop from "../assets/imgs/photoshop.png"
import php from "../assets/imgs/php.png"
import python from "../assets/imgs/python.png"
import react from "../assets/imgs/react.png"
import sass from "../assets/imgs/sass.png"
import sqlLite from "../assets/imgs/sqlLite.png"
import talwind from "../assets/imgs/talwind.png"
import typescript from "../assets/imgs/typescript.png"
import vue from "../assets/imgs/vue.png"
import wordpress from "../assets/imgs/wordpress.png"

import SwiperComp from "../components/SwiperComp"

const imagesArray = [
	wordpress,
	bootstrap,
	css,
	figma,
	flask,
	git,
	handlebars,
	html,
	jquery,
	js,
	material,
	mongo,
	mysql,
	nodejs,
	photoshop,
	php,
	python,
	react,
	sass,
	sqlLite,
	talwind,
	typescript,
	vue,
	wordpress,
]

const Technos = () => {
	return (
		<section className="technosSection">
			<h2 className="page_title">
				<span>T</span>echnical <span>S</span>kills
			</h2>
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
			<SwiperComp children={imagesArray} />
		</section>
	)
}

export default Technos
