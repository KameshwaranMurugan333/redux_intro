import React from "react";
import { connect } from "react-redux";

const Counter = (props) => {

    const increment = () => {
        props.dispatch({ type: "INCREMENT" })
    }

    const decrement = () => {
        props.dispatch({ type: "DECREMENT" })
    }

    const multiply = () => {
        props.dispatch({ type: "MULTIPLY" });
    }

    return <div>
        <p>Count: {props.counter}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement} >Decrement</button>
        <button onClick={multiply} >Multiply</button>
    </div>
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps)(Counter);