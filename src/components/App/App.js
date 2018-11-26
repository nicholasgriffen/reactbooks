import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import BookList from '../BookList/BookList'
import Cart from '../Cart/Cart'

import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      books: [],
      searchTerm: ''
    }

    this.API = process.env.REACT_APP_API_URL || "http://localhost:8082/api/books"
  }

  async componentDidMount() {
    //get books
    //set the state with books
    const books = await fetch(this.API).then(res => res.json())
    
    if (!books[0]) return 
    
    this.setState({
      ...this.state, 
      books: [...books, {
        inCart: true, 
        title: "Digijan", 
        price: 12.15, 
        id: 100,
      author: "The Jan"}]
    })
  }

  onSearchBook = searchTerm => (
    this.setState({
      ...this.state, 
      searchTerm
    })
  )

  onAddBook = id => (
    this.setState({
      ...this.state,
      books: this.state.books.map(book => {
        if (book.id === id) book.inCart = true 
        return book
      })
    })
  )

  render() {
    return (
      <div className="App">
        <div className="leftFlex">
          <SearchBar 
            onSearchBook={this.onSearchBook}/>
          <ul>
            <BookList 
              books={this.state.books} 
              searchTerm={this.state.searchTerm} 
              onAddBook={this.onAddBook}/>
          </ul>
        </div>
        <div className="rightFlex">
          <h1>Shopping Cart</h1>
          <ul>
            <Cart 
              books={this.state.books} 
              total={this.state.books
                .filter(book => book.inCart)
                .reduce((acc, book) => {
                  return acc + book.price 
                }, 0)
                .toFixed(2)}/>
          </ul>
        </div>
        </div>
    )
  }
}

export default App
