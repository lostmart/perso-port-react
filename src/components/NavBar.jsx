import { Link } from 'react-router-dom'
import {
	Home,
	User,
	Sliders,
	BookOpen,
	Mail,
	Briefcase,
	Archive,
	GitHub,
	Linkedin,
	Play,
	X,
} from 'react-feather'

// render fn

const RenderLinks = () => {
	const links = [
		{ path: '/', text: 'Home', component: Home },
		{ path: '/about', text: 'About', component: User },
		{ path: '/cv', text: 'Resume', component: BookOpen },
		{ path: '/skills', text: 'Skills', component: Sliders },
		{ path: '/works', text: 'Works', component: Briefcase },
		{ path: '/articles', text: 'Articles', component: Archive },
		{ path: '/contact', text: 'Contact', component: Mail },
	]
	return (
		<>
			{links.map((link) => {
				return (
					<Link key={link.path} to={link.path}>
						<link.component />
						{link.text}
					</Link>
				)
			})}
		</>
	)
}

const RenderSocials = () => {}

const NavBar = () => {
	return (
		<nav className="navBar">
			<span className="navBar__closeBtn">
				<X />
			</span>
			<h3>Menu</h3>
			<RenderLinks />
			<h3>Social</h3>
			<div className="navBar__social">
				<Link target="_blank" to="https://github.com/lostmart">
					<GitHub />
				</Link>
				<Link target="_blank" to="https://github.com/lostmart">
					<Linkedin />
				</Link>
				<Link target="_blank" to="https://github.com/lostmart">
					<Play />
				</Link>
			</div>
		</nav>
	)
}

export default NavBar
