import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { store } from 'store'
import '@styles/components/categories.scss'

const Categories = () => {
    const categories = useSelector(() => store.getState().Categories.categories)

    return (
        <section className='categories_section'>
            {categories ? categories.map(category =>
                <Link to={category.title.toLowerCase().split(' ').join('')} className='categories' key={category.id}>
                    <img src={category.background} alt={category.title.toUpperCase()} />
                    <span>{category.title}</span>
                </Link>
            ) : null}
        </section>
    )
}

export default Categories