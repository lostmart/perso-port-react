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
			<article className="home__self_intro">
				<p>
					Hey there ! My name is Martin and I am a FullStack web developer with
					a vast experience in teaching / mentoring technology and developing
					web apps
				</p>
			</article>
			<h2>
				<span>H</span>ome
			</h2>
		</section>
	)
}

export default Home
