import React, { Component } from 'react'
import CartItem from '../CartItem/CartItem'

class Cart extends Component {
        
    render() {
        let total 
        const books = this.props.books.filter(book => book.inCart)
        .map((book, idx) => {
            total += book.price
            return <CartItem key={idx} book={book}/>
        })

        return <div>{books}<li>Total: ${(total || 0).toFixed(2)}</li></div>
    }
}

export default Cart