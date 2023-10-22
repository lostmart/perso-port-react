import PropTypes from 'prop-types'

const Card = (props) => {
	const { cardTitle } = props
	return (
		<article className="card">
			<div className="card__title">
                <h2>Martin</h2>
                <span>FullStack Web Developer</span>
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
