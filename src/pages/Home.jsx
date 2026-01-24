import Card from "../components/Card"
import { motion } from "framer-motion"
import { useTranslation } from "../hooks/useTranslation"

const Home = () => {
	const { t } = useTranslation()

	/* render fn with translations */
	const RenderBody = () => {
		return (
			<>
				<p>{t("home.email")}</p>
				<p>{t("home.location")}</p>
			</>
		)
	}

	return (
		<section className="home">
			<Card
				cardTitle={t("home.name")}
				subTitle={t("home.role")}
				cardBody={RenderBody}
			/>
			<motion.article
				initial={{ x: -100, opacity: 0, filter: "blur(10px)" }}
				animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
				className="home__self_intro home__self_intro-desktop"
			>
				<p>{t("home.intro")}</p>
			</motion.article>
			<h2>
				<span>{t("home.titleFirstLetter")}</span>
				{t("home.titleRest")}
			</h2>
		</section>
	)
}

export default Home
