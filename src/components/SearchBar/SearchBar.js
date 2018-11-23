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
    
    findBook = (e) => {
        /*  
        search by title 
        search by author
        */
        e.preventDefault()

        const searchTerm = this.state.input

        const foundBook = this.props.books.find(book => {
            return (book.title.includes(searchTerm) || book.author.includes(searchTerm))
        })

        this.setState({
            ...this.state,
            input: e.target.value,
            book: foundBook
        })

    }

    render() {
        return (
            // text output
            // text input
            <div>
                <form>
                <label>Search:
                    <input type="search" value={this.state.input} onChange={this.findBook}/>
                </label>
                </form>
                <p>{[this.state.book].title || ''}</p>
            </div>
        )
    }
}

export default SearchBar