import { FC } from "react"
import { IButtonProps } from "src/shared/lib"
import styles from './styles.module.scss'


export const Button:FC<IButtonProps> = ({children, clickHandler}) => {
  return (
    <>
        <button 
          className={styles.button}
          onClick={clickHandler}>
            {children}
        </button>
    </>
  )
}
