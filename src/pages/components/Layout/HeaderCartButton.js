import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cartContext'
import classes from './HeaderCartButton.module.css';

export default function HeaderCartButton(props) {
  const [btnIsHignLighted, setBtnIsHignLighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  //const numberOfCartItems = [...new Set(cartCtx.items.)]
  const btnClasses = `${classes.button} ${btnIsHignLighted ? classes.bump : ''}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHignLighted(true);

    const timer = setTimeout(() => {
      setBtnIsHignLighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    }
  }, [cartCtx.items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{(numberOfCartItems === undefined) ? 0 : numberOfCartItems}</span>
    </button>
  )
}
