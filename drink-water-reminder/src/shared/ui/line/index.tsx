import { FC } from "react"
import styles from './styles.module.scss'
import { ILineProps } from "src/shared/lib"


export const Line: FC<ILineProps> = ({className}) => {
  return (
    <>
        <hr className={className}/>
    </>
  )
}
