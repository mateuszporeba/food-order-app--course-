import React from 'react';
import { Fragment } from "react";

import Image from 'next/image'
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
/* <Image
src={mealsImage}
alt="Table full of delicious food!"
width="100%"
height="5rem"
/> */
export default function Header(props) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Meals</h1>
                <HeaderCartButton  onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <Image
                    src={mealsImage}
                    alt="Table full of delicious food!"
                />
            </div>
        </Fragment>
    )
}
