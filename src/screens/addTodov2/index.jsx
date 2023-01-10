import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const AddTodoV2 = () => {

    const dispatch = useDispatch();
    const todos = useSelector(store => store.todos);

    const title = useSelector(store => store.title);
    const email = useSelector(store => store.email);
    const commt = useSelector(store => store.commt);

    const addTodo = () => {
        dispatch({ type: "add_todo", todo: { title, email, commt } });
    }

    return <div>
        {/* Add Todo */}
        <input value={title} type={"text"} placeholder={"Todo Title"} onChange={(e) => dispatch({ type: "update_title", title: e.target.value })} />
        <input value={email} type={"text"} placeholder={"Todo Email"} onChange={(e) => dispatch({ type: "update_email", email: e.target.value })} />
        <input value={commt} type={"text"} placeholder={"Todo Comment"} onChange={(e) => dispatch({ type: "update_commt", commt: e.target.value })} />

        <button onClick={addTodo}>Add Todo</button>

        {/* Listing Todo */}
        <h6>All Todos</h6>
        <p>{JSON.stringify(todos)}</p>
    </div>
}