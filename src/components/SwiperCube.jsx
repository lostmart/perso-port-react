import { Swiper, SwiperSlide } from "swiper/react"
import { MdOutlineSwipeLeft } from "react-icons/md"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-cube"

import { EffectCube } from "swiper/modules"
import { useEffect, useState, useRef } from "react"

export default function SwiperCube({ details } = props) {
	const swiperRef = useRef(null)

	const [showHelp, setShowHelp] = useState(true)

	const [isInitialLoad, setIsInitialLoad] = useState(true)

	useEffect(() => {
		if (isInitialLoad && swiperRef.current) {
			const swiper = swiperRef.current.swiper
			swiper.on("loopFix", () => {
				setIsInitialLoad(false)
			})
		}
	}, [isInitialLoad])

	const handleSlideChange = () => {
		if (!isInitialLoad) {
			setShowHelp(false)
		}
	}
	return (
		<>
			<Swiper
				ref={swiperRef}
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
				modules={[EffectCube]}
				onSlideChange={handleSlideChange}
				className="mySwiper"
			>
				{details.map((detail, indx) => {
					return (
						<SwiperSlide key={detail.imgName}>
							<figure>
								{indx === 0 && showHelp ? (
									<div className="btn-container animate__headShake animate__animated">
										<MdOutlineSwipeLeft />
									</div>
								) : (
									""
								)}

								<img src={`./assests/${detail.imgName}`} alt={detail.legend} />
								<figcaption> {detail.legend}</figcaption>
							</figure>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</>
	)
}
