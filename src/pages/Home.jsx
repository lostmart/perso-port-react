import Card from "../components/Card"
import { motion } from "framer-motion"

/* render fn  */
const RenderBody = () => {
	return (
		<>
			<p>codeme.martin@gmail.com</p>
			<p>Based in Yvelines, France</p>
		</>
	)
}

const Home = () => {
	return (
		<section className="home">
			<Card
				cardTitle="Martin"
				subTitle="FullStack Web Developer"
				cardBody={RenderBody}
			/>
			<motion.article
				initial={{ x: -100, opacity: 0, filter: "blur(10px)" }}
				animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
				className="home__self_intro home__self_intro-desktop"
			>
				<p>
					Hey there! I'm Martin, a FullStack developer specializing in Java,
					Spring Boot, and Angular. With a Bac +5 certification as an Expert in
					Software Development, I bring both technical depth and teaching
					experience to the table—whether I'm building robust web applications
					or mentoring the next generation of developers. Welcome to my
					portfolio!
				</p>
			</motion.article>
			<h2>
				<span>H</span>ome
			</h2>
		</section>
	)
}

export default Home
