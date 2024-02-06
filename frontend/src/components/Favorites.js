import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { store } from 'store'

const Favorites = () => {
    const books = useSelector(() => store.getState().Library.library)
    const favorites = books.filter((book) => book.favorites === true)

    return (
        <section className='categories_section'>
            {favorites ? favorites.map(book =>
                <Link to={book.title.toLowerCase().split(' ').join('')} className='categories' key={book.id}>
                    <img src={book.cover} alt={book.title.toUpperCase()} />
                    <span>{book.title}</span>
                    <span>{book.tome}</span>
                    <span>{book.author}</span>
                </Link>
            ) : null}
        </section>
    )
}

export default Favorites