import React from 'react';
import { Provider } from 'react-redux'
import { useSelector } from 'react-redux'

import '../../styles/main.css'
import BasketNavbar from './basket-navbar'
import BasketItems from './basket-items'
import store from '../../redux'

const Basket = () => {
  // const items = useSelector((s) => s.basket)

  return (
    <Provider store={store}>
      <BasketNavbar />
      <BasketItems />
    </Provider>
  );
}

export default Basket
