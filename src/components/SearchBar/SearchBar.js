import React from 'react'


const SearchBar = ({ onSearchBook, input })=> (
    <div>
        <form>
            <label>Search:
                <input type="search" 
                    value={ input } 
                    onChange={ e => {
                        e.preventDefault()
                        onSearchBook(e.target.value)
                    }}/>
            </label>
        </form>
    </div>
)

export default SearchBar