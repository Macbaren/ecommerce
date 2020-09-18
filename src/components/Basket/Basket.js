import React from 'react'

import '../../styles/main.css'
import BasketNavbar from './basket-navbar'
import BasketItems from './basket-items'
import image from '../../images/background2.jpg'

const Basket = () => {

  return (
    <div>
      <img src={image} className="fixed top-0 left-0 w-full opacity-50" alt="background1" />
      <BasketItems />
      <BasketNavbar />
    </div>
  );
}

export default Basket
