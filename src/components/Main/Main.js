import React from 'react';
import { Provider } from 'react-redux'

import '../../styles/main.css'
import Navbar from './navbar'
import Items from './items'
import image from '../../images/background1.jpg'
import store from '../../redux'

const Main = () => {
  return (
    <Provider className="relative" store={store}>
      <img src={image} className="absolute fixed top-0 left-0 w-full" alt="background1" />
      <Navbar />
      <Items />
    </Provider>
  );
}

export default Main
