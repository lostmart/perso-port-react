
import PropTypes from 'prop-types'

const CardTitle = (props) => {
	const { cardTitle, subTitle } = props
	return (
		<div className="card__title">
			<h2>{cardTitle}</h2>
			<span>{subTitle}</span>
		</div>
	)
}

CardTitle.propTypes = {
	cardTitle: PropTypes.string,
	subTitle: PropTypes.string,
}

export default CardTitle
