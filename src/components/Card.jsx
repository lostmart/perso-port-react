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
			<p>codeme.martin@gmail.com</p>
			<p>Based in Yvelines, France</p>
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
			<SocialCont />
			<a href="mailto:codeme.martin@gmail.com" className="card__btn">
				<Mail color="#090d12" /> Contact Me
			</a>
			<a href="#" className="card__btn card__btn-alt">
				<Mail /> CV
			</a>
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
