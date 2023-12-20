import { useDispatch, useSelector } from "react-redux"

export const EmailForm = () => {

    const email = useSelector(state => state.email);
    const dispatch = useDispatch();

    const onEmailChange = (e) => {
        dispatch({ type: 'updateEmail', payload: e.target.value })
    }

    return <div>
        <h1>Email Form</h1>
        <input value={email} onChange={onEmailChange} type="email" placeholder="Enter you email" />
    </div>
}