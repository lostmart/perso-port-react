import PropTypes from 'prop-types'

const LighBox = (props) => {
	const { lightBoxCss } = props
	// console.log(lightBoxCss);

	return <div className="light_box" style={lightBoxCss}></div>
}

/***
 * required props for the light on the page
 */
LighBox.propTypes = {
	lightBoxCss: PropTypes.shape({
		width: PropTypes.string.isRequired,
		height: PropTypes.string.isRequired,
		background: PropTypes.string.isRequired,
		filter: PropTypes.string.isRequired,
		borderRadius: PropTypes.string.isRequired,
		opacity: PropTypes.number.isRequired,
		top: PropTypes.string.isRequired,
		left: PropTypes.string.isRequired,
	}),
}

export default LighBox
