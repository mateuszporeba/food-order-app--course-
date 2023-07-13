import React, { useRef, useState } from 'react'
import classes from './Checkout.module.css'


const isNotEmpty = value => value.trim() !== ''
const isFiveChars = value => value.trim().length === 5

export default function Checkout(props) {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true
  });

  const nameInputRef = useRef()
  const streetInputRef = useRef()
  const postalCodeInputRef = useRef()
  const cityInputRef = useRef()

  const confirmHandler = (event) => {
    event.preventDefault()
    const enteredName = nameInputRef.current.value
    const enteredStreet = streetInputRef.current.value
    const enteredPostalCode = postalCodeInputRef.current.value
    const enteredCity = cityInputRef.current.value

    const enteredNameIsValid = isNotEmpty(enteredName)
    const enteredStreetIsValid = isNotEmpty(enteredStreet)
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode)
    const enteredCityIsValid = isNotEmpty(enteredCity)

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid
    })

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid



    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode
    })

  }

  const nameVontrolClasses = `${classes.control} 
  ${formInputsValidity.name ? '' : classes.invalid}`

  const streetVontrolClasses = `${classes.control} 
  ${formInputsValidity.name ? '' : classes.invalid}`

  const postalCodeVontrolClasses = `${classes.control} 
  ${formInputsValidity.name ? '' : classes.invalid}`

  const cityVontrolClasses = `${classes.control} 
  ${formInputsValidity.name ? '' : classes.invalid}`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameVontrolClasses}>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' ref={nameInputRef}></input>
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetVontrolClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef}></input>
        {!formInputsValidity.street && <p>Please enter valid street!</p>}
      </div>
      <div className={postalCodeVontrolClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInputRef}></input>
        {!formInputsValidity.postalCode && <p>Please enter valid postal code</p>}
      </div>
      <div className={cityVontrolClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>

  )
}
