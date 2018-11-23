import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import BookList from '../BookList/BookList'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: []
    }
  }
  render() {
    return (
      <div className="App"><SearchBar books={this.state.books}/></div>
    )
  }
}

export default App
