import React from 'react'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

// components
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import LightBox from '../components/LighBox'
import Card from '../components/Card'

// light imports
import { mainLight, secLight } from '../components/lightInsances/lights.js'

/* render fn  */
const RenderBody = () => {
	return (
		<>
			<p>codeme.martin@gmail.com</p>
			<p>Based in Yvelines, France</p>
		</>
	)
}

const RenderCard = () => {
	const location = useLocation()
	console.log(location.pathname)
	// location.pathname == '/' ? (
	// 	<section>
	// 		<h1 aria-label="Martin Pedraza Porfolio"></h1>
	// 		<Card
	// 			cardTitle="Martin"
	// 			subTitle="FullStack Web Developer"
	// 			cardBody={RenderBody}
	// 		/>
	// 	</section>
	// ) : (
	// 	false
	// )
	if (location.pathname === '/') {
		return (
			<section>
				<h1 aria-label="Martin Pedraza Porfolio"></h1>
				<Card
					cardTitle="Martin"
					subTitle="FullStack Web Developer"
					cardBody={RenderBody}
				/>
			</section>
		)
	} else {
		return false
	}
}

const SmallScreen = () => {
	window.addEventListener('resize', () => {
		console.log('run now !!!')
	})
	return (
		<div className="container">
			<LightBox lightBoxCss={mainLight} />
			<LightBox lightBoxCss={secLight} />
			<header>
				<NavBar />
			</header>
			<main>
				<RenderCard />
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default SmallScreen
