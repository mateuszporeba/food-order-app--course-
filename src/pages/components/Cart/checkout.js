import React from 'react'
import classes from './checkout.module.css'

export default function Checkout(props) {

const confirmHandler = (event) => {
  event.preventDefault();
}

  return (
    <form onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name'></input>
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street'></input>
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal'></input>
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city'></input>
      </div>
      <button>Confirm</button>
      <button onClick={props.onCancel}>Cancel</button>
    </form>

  )
}
