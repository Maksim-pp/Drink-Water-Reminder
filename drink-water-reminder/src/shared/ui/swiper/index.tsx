import { FC } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/navigation';
import { Autoplay, Navigation } from "swiper/modules";
import { slides } from "src/shared/constants";
import styles from './styles.module.scss'


export const SwiperSlider: FC = () => {
  return (
    <Swiper className={styles.swiper}
      modules={[Navigation, Autoplay]}
      autoplay={{ delay: 3500 }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log()}>
      {
        slides.map((el) => (
          <SwiperSlide key={el.id} className={styles.swiper__slide}>
            {
              el.slide
            }
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}
