import { FC } from 'react'
import styles from './styles.module.scss'
import { Counter } from 'src/features/counter'


export const Main: FC = () => {
  return (
    <div className={styles.block}>
      <Counter />
    </div>
  )
}
