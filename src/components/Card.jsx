import PropTypes from 'prop-types'
import portImg from '../assets/martin_pedraza_avatar.jpg'
import { GitHub, Linkedin, Youtube, Mail } from 'react-feather'

const Card = (props) => {
	const { cardTitle } = props
	return (
		<article className="card">
			<div className="card__title">
				<h2>Martin</h2>
				<span>FullStack Web Developer</span>
			</div>
			<div className="card__img">
				<img src={portImg} alt="Martin Pedraza avatar" />
			</div>
			<div className="card__body">
				<p>codeme.martin@gmail.com</p>
				<p>Based in Yvelines, France</p>
			</div>
			<div className="card__social">
				<GitHub />
				<Linkedin />
				<Youtube />
			</div>
			<button className="card__btn">
				<Mail color="#090d12" /> Contact Me
			</button>
		</article>
	)
}
/***
 * required props for the light on the page
 */
Card.propTypes = {
	cardTitle: PropTypes.string,
}

export default Card
