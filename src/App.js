import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { counterReducers } from './reducers';
import { Counter, Divider, Users } from './screens';

let store = createStore(counterReducers);

function App() {
  return (
    <Provider store={store} >
        <Counter />
        <Divider />
        <Users />
    </Provider>
  );
}

export default App;
