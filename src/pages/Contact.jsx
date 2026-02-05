import React from "react"
import { Mail } from "react-feather"
import portImg from "../assets/martin_pedraza_avatar.webp"
import { motion } from "framer-motion"

const Contact = () => {
	const imageStyle = {
		objectFit: "cover",
		maxWidth: "240px",
		borderRadius: "50%",
		height: "240px",
		margin: "12px",
		border: "12px solid #a3ff94",
	}
	return (
		<section className="contact">
			<h2 className="page_title">
				<span>C</span>ontact
			</h2>
			<motion.div
				initial={{ x: -100, opacity: 0, filter: "blur(10px)" }}
				animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
			>
				<img
					src={portImg}
					alt="martin pedraza full stack developer"
					style={imageStyle}
				/>
				<a href="#" className="card__btn card__btn-alt">
					<Mail /> CV
				</a>
				<a href="mailto:codeme.martin@gmail.com" className="card__btn">
					<Mail color="#090d12" /> Contact Me
				</a>
			</motion.div>
		</section>
	)
}

export default Contact
