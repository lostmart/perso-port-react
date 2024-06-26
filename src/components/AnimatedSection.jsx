import { useInView } from "react-intersection-observer"
import PropTypes from "prop-types"

function AnimatedSection({ children }) {
	const { ref, inView } = useInView({
		/* Optional options */
		threshold: 0.7,
	})

	// useEffect(() => {
	// 	console.log("Element is in view: ", inView)
	// }, [inView])

	return (
		<section ref={ref}>
			<span
				style={{
					// transform: inView ? "translateX(0)" : "translateX(-200px)",
					filter: inView ? "blur(0px)" : "blur(7px)",
					opacity: inView ? 1 : 0.6,
					transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
					display: "block",
				}}
			>
				{children}
			</span>
		</section>
	)
}

AnimatedSection.propTypes = {
	children: PropTypes.node,
}

export default AnimatedSection
