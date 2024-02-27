import { FC } from 'react'
import { DrinkingButton } from 'src/entities/drinking-button'
import { WaterIndicator } from 'src/entities/water-indicator/ui'
import { WaterInfo } from 'src/entities/water-info'
import { SwiperSlider } from 'src/shared'
import styles from './styles.module.scss'


export const Main: FC = () => {
  return (
    <div className={styles.block}>
      <WaterInfo />
      <WaterIndicator />
      <DrinkingButton />
    </div>
  )
}
