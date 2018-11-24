import React, { Component } from 'react'
import CartItem from '../CartItem/CartItem'

class Cart extends Component {
        
    render() {
        const books = this.props.books
        .filter(book => book.inCart)
        .map((book, idx) => {
            return <CartItem key={idx} book={book}/>
        })

        return <div>{books}<li>Total: ${this.props.total}</li></div>
    }
}

export default Cart