import { FC } from 'react'
import { Button } from 'src/shared'
import { IDrinkingButtonProps } from '../lib/types/drinking-button-types'

// добавить иконку

export const DrinkingButton:FC<IDrinkingButtonProps> = ({clickHandler}) => {
  return (
    <>
        <Button clickHandler={clickHandler}>Выпить</Button>
    </>
  )
}
