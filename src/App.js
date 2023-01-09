import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { counterReducers } from './reducers';
import CounterV2 from './screens/counterv2';

let store = createStore(counterReducers);

function App() {
  return (
    <Provider store={store} >
        <CounterV2 />
        {/* <Counter />
        <Divider />
        <Users /> */}
    </Provider>
  );
}

export default App;
