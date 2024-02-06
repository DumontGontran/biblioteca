import React from 'react'
import { Link } from 'react-router-dom'
import '@styles/components/header.scss'
import library from '@images/library.avif'
import { useDispatch } from 'react-redux'

const Header = () => {
    const dispatch = useDispatch()

    return (
        <header>
            <nav>
                <div>
                    <Link to="/home" className='logo'><img src={library} alt='ACCUEIL' /></Link>
                    <Link to="/add">Ajouter un ouvrage</Link>
                    <Link to="/library">Liste des ouvrages</Link>
                    <Link to="/wishlist">Liste de souhaits</Link>
                    <Link to="/favorites">Favoris</Link>
                </div>
                <div>
                    <Link to='/profile' className='profil'>Profil</Link>
                    <Link to="/login" className='logout' onClick={(event) => {
                        event.preventDefault()
                        dispatch({ type: 'Users/logout' })
                    }}>Se Déconnecter</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header