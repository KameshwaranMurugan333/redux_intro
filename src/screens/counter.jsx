import { useDispatch, useSelector } from "react-redux"

export const Counter = () => {

    const value = useSelector(state => state.value);
    const email = useSelector(state => state.email);
    const dispatch = useDispatch();

    const incrementBtnClick = () => {
        dispatch({ type: "counter/incremented" });
    }

    const decrementBtnClick = () => {
        dispatch({ type: "counter/decremented" })
    }

    return <div>
        <h1>Counter</h1>
        <h3>Value: {value}</h3>

        <button onClick={incrementBtnClick} >Increment</button>
        <button onClick={decrementBtnClick} >Decrement</button>

        <h4>Email: {email}</h4>
    </div>
}