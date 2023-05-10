import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cartContext'
import classes from './HeaderCartButton.module.css';

export default function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx?.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{(numberOfCartItems === undefined) ? 0 : numberOfCartItems}</span>
    </button>
  )
}
