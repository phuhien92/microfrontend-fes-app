import React from 'react';
import ItemCard from './ItemCard';

const Cart = ({cart}) => {

    return cart ? (
        <React.Fragment>
            <ul>
                <li>Cart Item: {cart.length}</li>
            {cart.map((item,index) => (
                <li key={index}>
                    {item.name}
                </li>
            ))}
            </ul>
        </React.Fragment>
    ) : null
}

export default Cart;