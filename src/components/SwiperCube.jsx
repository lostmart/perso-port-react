import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-cube"

import { Autoplay, EffectCube } from "swiper/modules"

export default function SwiperCube({ details } = props) {
	return (
		<>
			<Swiper
				effect={"cube"}
				grabCursor={true}
				loop={true}
				// autoplay={{
				// 	delay: 1955,
				// 	disableOnInteraction: false,
				// }}
				cubeEffect={{
					shadow: true,
					slideShadows: true,
					shadowOffset: 20,
					shadowScale: 0.94,
				}}
				modules={[EffectCube, Autoplay]}
				className="mySwiper"
			>
				{details.map((detail) => {
					return (
						<SwiperSlide key={detail.imgName}>
							<figure>
								<img src={`./assests/${detail.imgName}`} alt={detail.legend} />
								<figcaption>{detail.legend}</figcaption>
							</figure>
						</SwiperSlide>
					)
				})}
				{/* <SwiperSlide>
					<figure>
						<img src="./assests/nodejs-01.jpg" alt="123" />
						<figcaption>this is something i want to say</figcaption>
					</figure>
				</SwiperSlide>
				<SwiperSlide>
					<img src="./assests/nodejs-02.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./assests/nodejs-03.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./assests/nodejs-04.jpg" />
				</SwiperSlide> */}
			</Swiper>
		</>
	)
}
