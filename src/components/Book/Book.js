import React, { Component } from 'react'

class Book extends Component {
    onAddBook = () => {
        this.props.onAddBook(this.props.book.id)
    }

    render() {
        const { book: { title, author, id } } = this.props
        return ( 
            <li 
            id={id}>
            {`${title} By: ${author}`}
                <button 
                value="Add to cart" 
                onClick={this.onAddBook}></button>
            </li>
        )
    }
}

export default Book