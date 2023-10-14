import { Outlet, Link } from 'react-router-dom'

// components
import Footer from '../components/Footer'

const Root = () => {
	return (
		<>
			<header>
				<nav></nav>
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
