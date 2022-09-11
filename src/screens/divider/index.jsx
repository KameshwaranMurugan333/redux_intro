import React from "react";
import { connect } from "react-redux";

const Divider = (props) => {

    const divider = () => {
        props.dispatch({ type: "DIVIDER" })
    }

    return <div>
        Divider:
        <p>Current Count: {props.counter}</p>
        <button onClick={divider}>Divider</button>
    </div>
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps)(Divider);