import React from 'react';
import { Provider } from 'react-redux'

import './styles/main.css'
import Navbar from './components/navbar'
import Items from './components/items'

import store from './redux'

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Items />
    </Provider>
  );
}

export default App
