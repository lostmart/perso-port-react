import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-cube"

import { Autoplay, EffectCube } from "swiper/modules"

export default function SwiperCube() {
	return (
		<>
			<Swiper
				effect={"cube"}
				grabCursor={true}
				loop={true}
				autoplay={{
					delay: 1200,
					disableOnInteraction: false,
				}}
				cubeEffect={{
					shadow: true,
					slideShadows: true,
					shadowOffset: 20,
					shadowScale: 0.94,
				}}
				modules={[EffectCube]}
				className="mySwiper"
			>
				<SwiperSlide>
					<img src="./assests/nodejs-01.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./assests/nodejs-01.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./assests/nodejs-01.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./assests/nodejs-01.jpg" />
				</SwiperSlide>
			</Swiper>
		</>
	)
}
