import React, { Fragment } from 'react';
import '@/styles/globals.css'
import Header from './components/Layout/Header.js'
import Meals from './components/Meals/Meals.js';
export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals/>
      </main>
    </Fragment>
  )
}
