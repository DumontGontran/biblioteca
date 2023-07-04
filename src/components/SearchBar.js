import React from 'react'
import { FaSearch } from 'react-icons/fa'
import '@styles/components/searchBar.scss'

const SearchBar = () => {
    return (
        <form className='searchBar'>
            <input type='text' id='search' placeholder='Rechercher...' />
            <select id='format'>
                <option value='Tout'>Tout</option>
                <option value='Poche'>Poche</option>
                <option value='Relié'>Relié</option>
                <option value='Broché'>Broché</option>
                <option value='Numérique'>Numérique</option>
            </select>
            <button><FaSearch /></button>
        </form>
    )
}

export default SearchBar