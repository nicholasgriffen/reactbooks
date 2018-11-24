import React from 'react'

const CartItem = ({book: { id, title, price }})=> (
    <li id={id}>{title} ${price}</li>
)

export default CartItem