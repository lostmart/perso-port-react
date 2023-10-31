import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Media from 'react-media'

// components
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import LightBox from '../components/LighBox'
import Card from '../components/Card'

// light imports
import { mainLight, secLight } from '../components/lightInsances/lights.js'

// screen sizes
import SmallScreen from './SmallScreen'
import LargeScreen from './LargeScreen'

/* render fn  */
const RenderBody = () => {
	return (
		<>
			<p>codeme.martin@gmail.com</p>
			<p>Based in Yvelines, France</p>
		</>
	)
}

const Root = () => {
	return (
		<div className="container">
			<LightBox lightBoxCss={mainLight} />
			<LightBox lightBoxCss={secLight} />
			<header>
				<NavBar />
			</header>
			<main>
				<section>
					<h1 aria-label="Martin Pedraza Porfolio"></h1>
					<Card
						cardTitle="Martin"
						subTitle="FullStack Web Developer"
						cardBody={RenderBody}
					/>
				</section>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default Root
