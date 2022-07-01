import React from 'react';
import './style.css';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './store/store';

export default function App() {
  console.log(store);

  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
