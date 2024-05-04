import React from "react"

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
		</section>
	)
}

export default Technos
