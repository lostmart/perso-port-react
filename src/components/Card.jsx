import PropTypes from 'prop-types'
import portImg from '../assets/martin_pedraza_avatar.jpg'

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
