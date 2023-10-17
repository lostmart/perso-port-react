import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'

// classes
import LightBoxClass from '../classes/LightBox'

// components
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import LightBox from '../components/LighBox'


// let there be lights ...
const mainLight = new LightBoxClass(
	'99%',
	'80%',
	'linear-gradient(rgb(255 255 255 / 99%) -21%, rgb(116 137 255 / 0%) 94%)',
	'blur(250px)',
	'50%',
	0.5,
	'-38%'
)

const Root = () => {
	return (
		<div className="container">
			<LightBox lightBoxCss={mainLight} />
			<header>
				<NavBar />
			</header>
			<aside></aside>
			<main>
				<h1 aria-label="Martin Pedraza Porfolio"></h1>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default Root
