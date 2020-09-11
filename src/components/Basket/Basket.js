import React from 'react';
import { Provider } from 'react-redux'

import '../../styles/main.css'
import BasketNavbar from './basket-navbar'
import BasketItems from './basket-items'
import store from '../../redux'
import image from '../../images/background2.jpg'

const Basket = () => {

  return (
    <Provider store={store}>
      <img src={image} className="fixed top-0 left-0 w-full opacity-50" alt="background1" />
      <BasketItems />
      <BasketNavbar />
    </Provider>
  );
}

export default Basket
