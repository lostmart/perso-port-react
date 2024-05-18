import PropTypes from "prop-types"
import portImg from "../assets/martin_pedraza_avatar.jpg"
import { GitHub, Linkedin, Youtube, Mail } from "react-feather"
import SocialCont from "./SocialCont"

/*  atom components  */
import CardTitle from "./atoms/CardTitle"
import CardImg from "./atoms/CardImg"
import CardBody from "./atoms/CardBody"

/* render fn  */
const RenderBody = () => {
	return (
		<>
			<article className="home__self_intro home__self_intro-mobile">
				<p>
					Hey there! I'm Martin, a FullStack web developer with extensive
					experience in teaching, mentoring, and developing web applications. I
					love helping others navigate the tech world and creating dynamic,
					user-friendly web solutions. Welcome to my portfolio!
				</p>
			</article>
		</>
	)
}

const Card = (props) => {
	const { cardTitle, subTitle } = props
	return (
		<article className="card">
			{cardTitle && <CardTitle cardTitle={cardTitle} subTitle={subTitle} />}
			<CardImg imgUrl={portImg} imgAlt={`${cardTitle} ${subTitle}`} />

			<CardBody CardBody={RenderBody} />
			<a href="#" className="card__btn card__btn-alt">
				<Mail /> CV
			</a>

			<a href="mailto:codeme.martin@gmail.com" className="card__btn">
				<Mail color="#090d12" /> Contact Me
			</a>

			<SocialCont />
			<p className="contact_info">Based in Yvelines, France</p>
			<p className="contact_info">codeme.martin@gmail.com</p>
		</article>
	)
}
/***
 * required props for the light on the page
 */
Card.propTypes = {
	cardTitle: PropTypes.string,
	subTitle: PropTypes.string,
}

export default Card
