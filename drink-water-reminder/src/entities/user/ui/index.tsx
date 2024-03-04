import { FC } from 'react'

interface Props {
  options:  {weight: string, water: string }[];
  onChange: (arg: {weight: string, water: string }) => void;
  value: string
}


export const UserInfo:FC<Props> = ({options, onChange, value}) => {
  


  return (
    <div>
      <label htmlFor="">Ваш вес: </label>
      <select defaultValue={value} 
      onChange={(e) => {
        const [weight, water] = e.target.value.split(':');
        onChange({weight, water})
      }}>
        {
          options.map((el) => (
            <option 
              key={el.weight}
              value={`${el.weight}:${el.water}`}>
                {el.weight}
            </option>
          ))
        }
      </select>
    </div>
  )
}