import React from 'react'
import '@styles/components/searchBar.scss'

const SearchBar = () => {
    return (
        <form className='searchBar'>
            <input type='text' id='search' placeholder='Rechercher...' />
            <input list='format' id='format-choice' name='format-choice' placeholder='format...' />
            <datalist id='format'>
                <option value='Relié'/>
                <option value='Broché'/>
                <option value='Kindle'/>
            </datalist>
            <button>*</button>
        </form>
    )
}

export default SearchBar