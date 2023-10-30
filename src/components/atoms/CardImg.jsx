import PropTypes from 'prop-types'

const CardImg = (props) => {
	const { imgUrl, imgAlt } = props
	return (
		<div className="card__img">
			<img src={imgUrl} alt={imgAlt} />
		</div>
	)
}

CardImg.propTypes = {
	imgUrl: PropTypes.string,
	imgAlt: PropTypes.string,
}

export default CardImg
