import Card from "../components/Card"

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
			<article className="home__self_intro home__self_intro-desktop">
				<p>
					Hey there! I'm Martin, a FullStack web developer with extensive
					experience in teaching, mentoring, and developing web applications. I
					love helping others navigate the tech world and creating dynamic,
					user-friendly web solutions. Welcome to my portfolio!
				</p>
			</article>
			<h2>
				<span>H</span>ome
			</h2>
		</section>
	)
}

export default Home
