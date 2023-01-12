export const counterReducers = (
    // Store
    state = {
        counter: 0,
        email: "",
        title: "",
        commt: "",
        todos: []
    },
    action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1 }

        case 'decrement':
            return { ...state, counter: state.counter - 1 }

        case 'add_todo':
            let todo = action.todo;
            return { ...state, todos: [...state.todos, todo] }

        case 'update_title':
            return { ...state, title: action.title };

        case 'update_email':
            return { ...state, email: action.email };

        case 'update_commt':
            return { ...state, commt: action.commt };

        case 'add_todo_v2':
            let todoV2 = { title: state.title, email: state.email, commt: state.commt };
            return { ...state, todos: [...state.todos, todoV2], title: "", email: "", commt: "" }

        case 'getTodoById':
            let todoForEdit = state.todos.filter(todo => todo.id === action.id)
            return { ...state, title: todoForEdit.title, email: todoForEdit.email, commt: todoForEdit.commt }

        case 'updateTodo':
            let newTodos = state.todos.map(todo => {
                if (todo.id === action.id) {
                    return { id: todo.id, ...action.todo }
                }
                return todo
            });
            return { ...state, todos: newTodos }
        default:
            return state;
    }
}