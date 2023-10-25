import { Outlet } from 'react-router-dom'
import { useState } from 'react'

// components
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import LightBox from '../components/LighBox'
import Card from '../components/Card'

// light imports
import { mainLight, secLight } from '../components/lightInsances/lights.js'

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
					<Card></Card>
				</section>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default Root
