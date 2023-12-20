import { createStore } from 'redux';
import { counterReducer } from './reducers/counterReducer';
import { Provider } from 'react-redux';
import { Counter } from './screens/counter';
import { CounterNature } from './screens/counterNature';
import { EmailForm } from './screens/emailForm';

const store = createStore(counterReducer);

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <CounterNature />
      <EmailForm />
    </Provider>
  );
}

export default App;
