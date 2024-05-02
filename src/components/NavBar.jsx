import { Link } from "react-router-dom"
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
	Cpu,
	Play,
	X,
} from "react-feather"

// render fn

const RenderLinks = () => {
	const links = [
		{ path: "/", text: "Home", component: Home },
		{ path: "/technos", text: "Technologies", component: Cpu },
		{ path: "/experience", text: "Experience", component: Briefcase },
		{ path: "/cv", text: "Resume", component: BookOpen },
		{ path: "/skills", text: "Skills", component: Sliders },
		{ path: "/articles", text: "Articles", component: Archive },
		{ path: "/contact", text: "Contact", component: Mail },
	]
	return (
		<>
			{links.map((link) => {
				return (
					<Link key={link.path} to={link.path}>
						<link.component />
						<span>{link.text}</span>
					</Link>
				)
			})}
		</>
	)
}

const RenderSocials = () => {
	const socialIcons = [
		{
			linkUrl: "https://github.com/lostmart",
			text: "Github",
			component: GitHub,
		},
		{
			linkUrl: "https://www.linkedin.com/in/martin-pedraza-dev/",
			text: "Linkedin",
			component: Linkedin,
		},
		{
			linkUrl: "https://www.youtube.com/channel/UCL48dHz-Ul6OYj3XkD7YiiQ",
			text: "Youtube",
			component: Play,
		},
	]

	return socialIcons.map((icon) => {
		return (
			<Link title={icon.text} key={icon.text} target="_blank" to={icon.linkUrl}>
				<icon.component />
			</Link>
		)
	})
}

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
				<RenderSocials />
			</div>
		</nav>
	)
}

export default NavBar
