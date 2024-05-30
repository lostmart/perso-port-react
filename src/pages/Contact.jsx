import React from "react"
import { Mail } from "react-feather"
import portImg from "../assets/martin_pedraza_avatar.jpg"
import { motion } from "framer-motion"

const Contact = () => {
	const imageStyle = {
		objectFit: "cover",
		maxWidth: "190px",
		borderRadius: "50%",
	}
	return (
		<motion.section
			initial={{ x: -100, opacity: 0, filter: "blur(10px)" }}
			animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
			className="contact"
		>
			<h2 className="page_title">
				<span>C</span>ontact
			</h2>
			<div>
				<img src={portImg} alt="" style={imageStyle} />
				<a href="#" className="card__btn card__btn-alt">
					<Mail /> CV
				</a>
				<a href="mailto:codeme.martin@gmail.com" className="card__btn">
					<Mail color="#090d12" /> Contact Me
				</a>
			</div>
		</motion.section>
	)
}

export default Contact
