import React, { Component } from 'react'


class SearchBar extends Component {
    constructor() {
        super()

        this.state = {
            input: '',
        }
    }
    
    findBook = (e) => {
        e.preventDefault()

        const searchTerm = e.target.value
        const { onSearchBook } = this.props

        this.setState({
            ...this.state,
            input: searchTerm,
        })

        onSearchBook(searchTerm)
    }

    render() {
        return (
            <div>
                <form>
                    <label>Search:
                        <input type="search" value={this.state.input} onChange={this.findBook}/>
                    </label>
                </form>
            </div>
        )
    }
}

export default SearchBar