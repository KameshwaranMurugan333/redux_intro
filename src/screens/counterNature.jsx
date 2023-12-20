import { useSelector } from "react-redux"

export const CounterNature = () => {

    const value = useSelector(state => state.value);

    return <div>
        {value % 2 === 0 && <p>Even Number</p>}
        {value % 2 !== 0 && <p>Odd Number</p>}
    </div>
}