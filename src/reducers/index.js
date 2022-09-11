export const counterReducers = (state = {
    counter: 0,
    userDetail: { name: "Kamesh" }
}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state,counter: state.counter + 1 }

        case 'DECREMENT':
            return { ...state,counter: state.counter - 1 }

        case 'MULTIPLY':
            return { ...state,counter: state.counter * 2 }

        case 'DIVIDER':
            return { ...state,counter: state.counter / 2 }

        case 'UPDATE_USER_DETAIL':
            return { ...state,userDetail: { ...action.payload } }

        case 'UPDATE_NAME':
            return { ...state,userDetail: { ...state.userDetail, name: action.name } }

        default:
            return state;
    }
}