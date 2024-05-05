import React from "react"
import "swiper/swiper-bundle.css" // Import Swiper's CSS
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const SwiperComp = ({ children }) => {
	console.log(children)
	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={3}
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
			loop={true}
			// onSwiper={(swiper) => console.log(swiper)}
			autoplay={{
				delay: 1000,
				disableOnInteraction: false,
			}}
			modules={[Autoplay]}
		>
			{children.map((child) => {
				return (
					<SwiperSlide key={child}>
						<img src={child} alt={child} />
					</SwiperSlide>
				)
			})}
		</Swiper>
	)
}

export default SwiperComp
