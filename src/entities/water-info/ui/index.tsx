import { FC } from 'react'
import styles from './styles.module.scss'
import { IWaterInfoProps } from '../lib'

export const WaterInfo:FC<IWaterInfoProps> = ({count, water}) => {

  return (
    <div className={styles.block}>
        <h1 className={styles.h1}><span className={styles.span}>{count}</span>/{water}ml</h1> 
        <p className={styles.p}><span className={styles.span}>+300ml</span></p>
        <p className={styles.p}>Цель ежедневного напитка</p>
    </div>
  )
}
