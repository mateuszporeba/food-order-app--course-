import React from 'react';
import classes from './Cart.module.css';

export default function Cart(props) {
  const cartItems = <ul className={classes['cart-items']}>{[
    { id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }
  ].map(item => <li>{item.name}</li>)}</ul>;

  return (
    <div>
      {cartItems}
      <div></div>
      <div></div>
    </div>
  )
}
