export const counterReducers = (state = {
    counter: 0,
    userDetail: { name: "Kamesh" }
}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { counter: state.counter + 1 }

        case 'DECREMENT':
            return { counter: state.counter - 1 }

        case 'MULTIPLY':
            return { counter: state.counter * 2 }

        case 'DIVIDER':
            return { counter: state.counter / 2 }

        case 'UPDATE_USER_DETAIL':
            return { userDetail: { ...action.payload } }

        case 'UPDATE_NAME':
            return { userDetail: { ...state.userDetail, name: action.name } }

        default:
            return state;
    }
}