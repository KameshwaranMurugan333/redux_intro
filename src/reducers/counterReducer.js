export function counterReducer(state = {
    value: 0,
    email: "",
}, action) {
    switch (action.type) {
        case 'counter/incremented':
            return { ...state, value: state.value + 1 }
        case 'counter/decremented':
            return { ...state, value: state.value - 1 }
        case 'updateEmail':
            return { ...state, email: action.payload }
        default:
            return state
    }
}