import React, { Fragment } from 'react';
import '@/styles/globals.css'
import Header from './components/Layout/Header.js'
import Meals from './components/Meals/Meals.js';
import Cart from './components/Cart/Cart.js';

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Cart/>
      <Header />
      <main>
        <Meals/>
      </main>
    </Fragment>
  )
}
