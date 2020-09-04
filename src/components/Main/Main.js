import React from 'react';
import { Provider } from 'react-redux'

import '../../styles/main.css'
import Navbar from './navbar'
import Items from './items'

import store from '../../redux'

const Main = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Items />
    </Provider>
  );
}

export default Main
