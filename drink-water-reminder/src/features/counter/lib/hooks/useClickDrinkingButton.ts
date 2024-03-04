import { useState } from "react"

export const useClickDrinkingButton = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);
    const [Array, setArray] = useState<any>([]);
    const [message, setMessage] = useState(false)
    
    const time = `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}
        ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;

    const clickHandler = () =>{
        setCount(count + 300);
        setValue(value + 300);
        setArray([...Array, time]);
        setMessage(true)
        setTimeout(()=>{setMessage(false)}, 1500)
    }

    return {count, value, Array, message, clickHandler}
}