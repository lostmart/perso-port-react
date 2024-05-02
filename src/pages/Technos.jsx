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
						HTML, CSS, Handlebars, React, Vue.js
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
			</ul>
		</section>
	)
}

export default Technos
