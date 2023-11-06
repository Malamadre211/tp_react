import { useCallback, useEffect, useState } from 'react';

export function Dice(props: { onRoll: (value: number) => void }) {
    const [value, setValue] = useState(Math.floor(Math.random()*6+1))

    useEffect(() => {
        props.onRoll(value)
    }, [])

    const roll= useCallback(() => {
        const newValue = Math.floor(Math.random()*6+1)
        props.onRoll(newValue)
        setValue(newValue)
    }, [])

    return(
    
        <div onClick={roll}>{value}</div>
    ) 
}
