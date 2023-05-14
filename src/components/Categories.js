import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { store } from 'store'
import '@styles/components/categories.scss'

const Categories = () => {
    const categories = useSelector(() => store.getState().Categories.categories)
    console.log(categories)

    return (
        <section className='categories_section'>
            {categories ? categories.map(category =>
                <Link to={null} className='categories' key={category.id}>
                    <img src={category.background} alt={category.title} />
                    <span>{category.title}</span>
                </Link>
            ) : null}
        </section>
    )
}

export default Categories