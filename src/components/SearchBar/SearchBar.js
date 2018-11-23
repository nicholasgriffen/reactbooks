import React, { Component } from 'react'


class SearchBar extends Component {
    constructor() {
        super()
//    state - user input
        this.state = {
            input: '',
            book: {}
        }
//    props - list of books
    }
    
    findBook() {
        /*  
        search by title 
        search by author
        */
        const searchTerm = this.state.input

        const foundBook = this.props.books.find(book => {
            return (book.title.includes(searchTerm) || book.author.includes(searchTerm))
        })

        this.setState({
            ...this.state,
            book: foundBook
        })

    }

    render() {
        return (
            // text output
            // text input
//            button       
        )
    }
}

export default SearchBar