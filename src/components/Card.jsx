import PropTypes from "prop-types"
import portImg from "../assets/martin_pedraza_avatar.jpg"
import { Mail } from "react-feather"
import SocialCont from "./SocialCont"
import { motion } from "framer-motion"
import { FaAddressCard } from "react-icons/fa"

/*  atom components  */
import CardTitle from "./atoms/CardTitle"
import CardImg from "./atoms/CardImg"
import CardBody from "./atoms/CardBody"

/* render fn  */
const RenderBody = () => {
	const item = {
		hidden: { y: 20, opacity: 0 },
		visible: { y: 0, opacity: 1 },
	}

	return (
		<motion.div
			className="home__self_intro home__self_intro-mobile"
			variants={item}
		>
			<p>
				Hey there! I'm Martin, a FullStack web developer with extensive
				experience in teaching, mentoring, and developing web applications. I
				love helping others navigate the tech world and creating dynamic,
				user-friendly web solutions. Welcome to my portfolio!
			</p>
		</motion.div>
	)
}

const Card = (props) => {
	const container = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delay: 0.5, // Add a delay of 500ms
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	}

	const item = {
		hidden: { y: 20, opacity: 0 },
		visible: { y: 0, opacity: 1 },
	}

	const { cardTitle, subTitle } = props
	return (
		<motion.article
			initial="hidden"
			animate="visible"
			variants={container}
			className="card"
		>
			{cardTitle && (
				<motion.div variants={item}>
					<CardTitle cardTitle={cardTitle} subTitle={subTitle} />
				</motion.div>
			)}
			<motion.div variants={item}>
				<CardImg imgUrl={portImg} imgAlt={`${cardTitle} ${subTitle}`} />
			</motion.div>

			<motion.div variants={item}>
				<CardBody CardBody={RenderBody} />
			</motion.div>
			<motion.div variants={item}>
				<a
					href="web-developer-Martin-Pedraza.pdf"
					target="_blank"
					className="card__btn card__btn-alt"
				>
					<FaAddressCard /> CV
				</a>
			</motion.div>

			<motion.div variants={item}>
				<a href="mailto:codeme.martin@gmail.com" className="card__btn">
					<Mail color="#090d12" /> Contact Me
				</a>
			</motion.div>

			<motion.div variants={item}>
				<SocialCont />
			</motion.div>
			<motion.p className="contact_info" variants={item}>
				Based in Yvelines, France
			</motion.p>
			<motion.p className="contact_info" variants={item}>
				codeme.martin@gmail.com
			</motion.p>
		</motion.article>
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
