import { Outlet } from 'react-router-dom'

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

const LargeScreen = () => {
	return (
		<div className="container">
			<LightBox lightBoxCss={mainLight} />
			<LightBox lightBoxCss={secLight} />
			<header>
				<NavBar />
			</header>
			<main>
				<section className='section__personal'>
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

export default LargeScreen
