import React from 'react'
import CartItem from '../CartItem/CartItem'

const Cart = ({ books, total }) => (
    <ul>{books.filter(book => book.inCart)
        .map((book, idx) => {
            return <CartItem key={idx} book={book}/>
        })}<li>Total: ${total}</li></ul>
)

export default Cart