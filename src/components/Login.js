import React from 'react'
import '@styles/components/adding.scss'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const navigateToHomepage = () => {
        navigate('/')
    }

    return (
        <section className='Adding'>
            <form className='Adding_form'>
            <h1 className='Adding_head_titre'>Connexion</h1>
                <label htmlFor='Adding_couverture'>Pseudo: *</label>
                <input type='text' id='Adding_couverture' minLength={1} maxLength={32} required />
                <label htmlFor='Adding_titre'>Mot de passe: *</label>
                <input type='text' id='Adding_titre' placeholder="Motdepasse1*" minLength={8} maxLength={32} required />
                <button className='Adding_submit' onClick={navigateToHomepage}>Se connecter</button>
            </form>
        </section>
    )
}

export default Login