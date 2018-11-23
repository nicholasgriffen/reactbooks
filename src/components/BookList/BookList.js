import React from 'react'
import Book from './Book/Book'

const BookList = ({ books }) => (
    //iterate over books 
    // return book components

    books.map((book, idx) => (
        <Book key={idx} book={book}/>
    ))
)
export default BookList