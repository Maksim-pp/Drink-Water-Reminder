import { FC } from "react"
import { ILineProps } from "src/shared/lib"


export const Line: FC<ILineProps> = ({className, value, water}) => {
  
  return (
    <>
      <progress max={water} value={value} className={className}/>
    </>
  )
}
