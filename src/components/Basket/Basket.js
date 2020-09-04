import React from 'react';
import { Provider } from 'react-redux'

import '../../styles/main.css'
import BasketNavbar from './basket-navbar'
import BasketItems from './basket-items'

import store from '../../redux'

const Basket = () => {
  return (
    <Provider store={store}>
      <BasketNavbar />
      <BasketItems />
    </Provider>
  );
}

export default Basket
