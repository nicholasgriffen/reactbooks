import React from 'react'


const SearchBar = ({ onSearchBook })=> (
    <div>
        <form>
            <label>Search:
                <input type="search" 
                    onChange={ e => {
                        e.preventDefault()
                        onSearchBook(e.target.value)
                    }}/>
            </label>
        </form>
    </div>
)

export default SearchBar