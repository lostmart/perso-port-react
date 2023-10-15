import { Outlet, Link } from 'react-router-dom'

// components
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const Root = () => {
	return (
		<>
			<header>
				<NavBar />
			</header>
			<aside></aside>
			<main>
				<h1 aria-label="Martin Pedraza Porfolio"></h1>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default Root
