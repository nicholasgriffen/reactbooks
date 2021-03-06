import React from 'react'
import Book from '../Book/Book'

const BookList = ({ books, searchTerm, onAddBook }) => (
    // iterate over books 
    // return book components
    <ul>{books.filter(book => (
        book.title.includes(searchTerm) || book.author.includes(searchTerm) 
    )).map((book, idx) => (
        <Book key={idx} book={book} onAddBook={onAddBook}/>
    ))}</ul>
)
export default BookList