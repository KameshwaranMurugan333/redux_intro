import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CounterV2 = (props) => {

    const count = useSelector(store => store.counter);
    const todos = useSelector(store => store.todos);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({ type: "INCREMENT" })
    }

    const decrement = () => {
        dispatch({ type: "decrement", payload: [] })
    }

    const multiply = () => {
    }

    return <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement} >Decrement</button>
        <button onClick={multiply} >Multiply</button>
    </div>
}

export default CounterV2;