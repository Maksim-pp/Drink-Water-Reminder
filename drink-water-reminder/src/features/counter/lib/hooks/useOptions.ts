import { useMemo, useState } from "react";

export const useOptions = () => {

    let Array = [
        {weight: '0 кг', water: '0' },
        {weight: '40-44 кг', water: '1200' },
        {weight: '45-49 кг', water: '1400' },
        {weight: '50-54 кг', water: '1500' },
        {weight: '55-59 кг', water: '1700' },
        {weight: '60-64 кг', water: '1800' },
        {weight: '65-69 кг', water: '2000' },
        {weight: '70-74 кг', water: '2100' },
        {weight: '75-79 кг', water: '2300' },
        {weight: '80-84 кг', water: '2400' },
        {weight: '85-89 кг', water: '2600' },
        {weight: '90-94 кг', water: '2700' },
        {weight: '95-99 кг', water: '2900' },
        {weight: '100 кг', water: '3000' },
    ]
    
    const [selectOption, setSelect] = useState<{ weight: string, water: string }>({weight: '0', water: '0'});

    const options = useMemo(
    ()=> Array,
    [],
    )

    const  onChange = (arg: { weight: string, water: string }) => {
    setSelect(arg)
    }

    return {selectOption, options , onChange}
}

