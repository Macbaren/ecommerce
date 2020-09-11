import React from 'react';
import { Provider } from 'react-redux'

import '../../styles/main.css'
import Navbar from './navbar'
import Items from './items'
import image from '../../images/background1.png'
import store from '../../redux'

const Main = () => {
  return (
    <Provider store={store}>
      <img src={image} className="fixed top-0 left-0 w-full opacity-50" alt="background1" />
      <Items />
      <Navbar />
    </Provider>
  );
}

export default Main
