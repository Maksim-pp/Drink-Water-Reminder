import { FC } from 'react'
import { Icon, Line } from 'src/shared'
import styles from './styles.module.scss'
import { IWaterIndicatorProps } from '../lib'

export const WaterIndicator: FC<IWaterIndicatorProps> = ({value, water}) => {
  return (
    <div className={styles.block}>
        <Icon icons={'heart'} className={styles.icon}/>
        <Line className={styles.line} value={value} water = {water}/>
        <Icon icons={'drop'} className={styles.icon}/>
    </div>
  )
}
