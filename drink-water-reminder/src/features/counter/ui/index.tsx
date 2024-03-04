import { DrinkingButton } from 'src/entities/drinking-button'
import { WaterIndicator } from 'src/entities/water-indicator/ui'
import { WaterInfo } from 'src/entities/water-info'
import { useClickDrinkingButton, useOptions } from '../lib/hooks'
import styles from './styles.module.scss'
import { Icon } from 'src/shared'
import { UserInfo } from 'src/entities/user'


export const Counter = () => {
  const { count, value, clickHandler, Array,  message} = useClickDrinkingButton()
  const {onChange, options, selectOption} = useOptions()
  

  return (
    <>
      <UserInfo options={options} onChange={onChange} value = {selectOption.weight}/>
      <WaterInfo count={count} water={selectOption.water}/>
      <WaterIndicator value={value} water={selectOption.water}/>
      {
        message && <p className={styles.message}>Отлично, +300ml!</p>
      }
      
      <DrinkingButton clickHandler={clickHandler} />
      <div className={styles.block__history}>
        <p className={styles.block__history__header}>Сегодняшние рекорды +</p>
        {Array.map((el:any) => (
        <div className={styles.block__history__item}>
          <Icon icons='cup' className={styles.block__history__icons} />
          <div className={styles.block__history__message}>{el}</div>
          <div>300ml</div>
        </div>
        ))}
      </div>
    </>
  )
}
