import React from 'react'

import '../../styles/main.css'
import Navbar from './navbar'
import Items from './items'
import image from '../../images/background1.png'

const Main = () => {
  return (
    <div>
      <img src={image} className="fixed top-0 left-0 w-full opacity-50" alt="background1" />
      <Items />
      <Navbar />
    </div>
  );
}

export default Main
