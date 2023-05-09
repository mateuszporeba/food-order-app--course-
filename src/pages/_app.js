import React, { Fragment, useState } from 'react';
import '@/styles/globals.css'
import Header from './components/Layout/Header.js'
import Meals from './components/Meals/Meals.js';
import Cart from './components/Cart/Cart.js';

export default function App({ Component, pageProps }) {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return(
    <Fragment>
      {cartIsShown && <Cart />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  )
}
