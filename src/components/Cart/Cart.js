import React from 'react'
import CartItem from '../CartItem/CartItem'

const Cart = ({ books, total }) (
    <div>{books.filter(book => book.inCart)
        .map((book, idx) => {
            return <CartItem key={idx} book={book}/>
        })}<li>Total: ${total}</li></div>
)

export default Cart