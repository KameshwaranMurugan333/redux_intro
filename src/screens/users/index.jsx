import React from "react";
import { connect } from "react-redux";

const Users = (props) => {

    const updateName = (e) => {
        props.dispatch({type:"UPDATE_NAME", name:e.target.value})
    }

    return <div>
        Users:
        <p>{JSON.stringify(props.userDetail, null, 2)}</p>
        <input value={props?.userDetail?.name} onChange={updateName} />
    </div>
}

const mapStateToProps = (state) => {
    return {
        userDetail: state.userDetail
    }
}

export default connect(mapStateToProps)(Users);