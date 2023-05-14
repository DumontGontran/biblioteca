import React from 'react'
import { Link } from 'react-router-dom'
import '@styles/components/header.scss'
import library from '@images/library.avif'

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/" className='logo'><img src={library} alt='ACCUEIL' /></Link>
                <Link to="/add">Ajouter un ouvrage</Link>
                <Link to="/edit">Éditer un ouvrage</Link>
                <Link to="/delete">Supprimer un ouvrage</Link>
                <Link to="/favorites">Favoris</Link>
            </nav>
        </header>
    )
}

export default Header