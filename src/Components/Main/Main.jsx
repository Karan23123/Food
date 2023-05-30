import React from 'react';
import AddTopping from './Toppings/AddTopping';
import "./Main.scss"
import Heading from './Heading/Heading';

function Main() {
    return (
        <div className='mainSection'>
            <Heading />
            <AddTopping />
        </div>
    )
}

export default Main
