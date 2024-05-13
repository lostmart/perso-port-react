import React from "react"
import "swiper/swiper-bundle.css" // Import Swiper's CSS
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const SwiperComp = ({ children }) => {
	// console.log(children)
	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={4}
			pagination={{ clickable: true }}
			loop={true}
			// onSwiper={(swiper) => console.log(swiper)}
			autoplay={{
				delay: 1000,
				disableOnInteraction: false,
			}}
			modules={[Autoplay]}
		>
			{children.map((child) => {
				return <SwiperSlide style={{fontSize:"2.5em"}} key={child}>{child}</SwiperSlide>
			})}
		</Swiper>
	)
}

export default SwiperComp
