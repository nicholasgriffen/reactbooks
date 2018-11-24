import React from 'react'

const Book = ({ book: { title, author, id }, onAddBook }) => ( 
            <li id={id}>
                {`${title} By: ${author}`}
                <button  
                    onClick={() => onAddBook(id)}>
                    Add to cart
                </button>
            </li>
    )

export default Book