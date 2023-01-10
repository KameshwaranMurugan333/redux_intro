import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { counterReducers } from './reducers';
import { AddTodo } from './screens/addTodo';
import { AddTodoV2 } from './screens/addTodov2';
import CounterV2 from './screens/counterv2';

let store = createStore(counterReducers);

function App() {
  return (
    <Provider store={store} >
        <CounterV2 />
        <h1>Todo</h1>
        <AddTodo />
        <h1>Todo V2</h1>
        <AddTodoV2 />
        {/* <Counter />
        <Divider />
        <Users /> */}
    </Provider>
  );
}

export default App;
