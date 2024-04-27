import { GitHub, Linkedin, Youtube, Mail } from "react-feather"

const SocialCont = () => {
	return (
		<div className="card__social">
			<a target="_blank" href="https://github.com/lostmart">
				<GitHub />
			</a>
			<a target="_blank" href="https://www.linkedin.com/in/martin-pedraza-dev/">
				<Linkedin />
			</a>
			<a
				target="_blank"
				href="https://www.youtube.com/channel/UCL48dHz-Ul6OYj3XkD7YiiQ"
			>
				<Youtube />
			</a>
		</div>
	)
}

export default SocialCont
