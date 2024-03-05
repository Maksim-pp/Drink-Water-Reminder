import { FC } from 'react'
import { IUserProps } from '../lib';
import styles from './styles.module.scss'

export const UserInfo:FC<IUserProps> = ({options, onChange, value}) => {
  
  return (
    <div className={styles.user__info}>
      <label htmlFor="" className={styles.user__info__label}>Выбирите ваш вес: </label>
      <select 
      size={5}
        defaultValue={value}
        onChange={(e) => {
          const [weight, water] = e.target.value.split(':');
          onChange({weight, water})
        }}
        className={styles.user__info__select}>
        {
          options.map((el) => (
            <option 
              key={el.weight}
              value={`${el.weight}:${el.water}`}
              className={styles.user__info__select__option}>
                {el.weight}
            </option>
          ))
        }
      </select>
    </div>
  )
}