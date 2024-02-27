import { FC } from 'react'
import { Icon, Line } from 'src/shared'
import styles from './styles.module.scss'

export const WaterIndicator: FC = () => {
  return (
    <div className={styles.block}>
        <Icon icons={'heart'} className={styles.icon}/>
        <Line className={styles.line}></Line>
        <Icon icons={'drop'} className={styles.icon}/>
    </div>
  )
}
