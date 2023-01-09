export const counterReducers = (
    // Store
    state = {
        counter: 0,
        todos: []
    },
    action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1 }

        case 'decrement':
            return { ...state, counter: state.counter - 1 }

        case 'add_todo':
            let payload = action.payload;
            return { ...state, todos: [...state.todos, ...payload] }

        default:
            return state;
    }
}