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
		<section>
			<Card
				cardTitle="Martin"
				subTitle="FullStack Web Developer"
				cardBody={RenderBody}
			/>
			<h2>
				<span>H</span>ome
			</h2>
		</section>
	)
}

export default Home
