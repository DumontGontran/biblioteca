import React from 'react'
import '@styles/components/register.scss'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()

    const navigateToLoginPage = () => {
        navigate('/login')
    }

    return (
        <section className='Register'>
            <form className='Register_form'>
            <h1 className='Register_head_titre'>Inscription</h1>
                <label htmlFor='Register_pseudo'>Pseudo: *</label>
                <input type='text' id='Register_pseudo' minLength={1} maxLength={32} required />
                <label htmlFor='Register_lastname'>Nom: *</label>
                <input type='text' id='Register_lastname' minLength={1} maxLength={32} required />
                <label htmlFor='Register_firstname'>Prénom: *</label>
                <input type='text' id='Register_firstname' minLength={1} maxLength={32} required />
                <label htmlFor='Register_email'>Email: *</label>
                <input type='email' id='Register_email' minLength={1} maxLength={32} required />
                <label htmlFor='Register_password'>Mot de passe: *</label>
                <input type='text' id='Register_password' placeholder="Motdepasse1*" minLength={8} maxLength={32} required />
                <label htmlFor='Register_password-confirm'>Confirmer mot de passe: *</label>
                <input type='text' id='Register_password-confirm' placeholder="Motdepasse1*" minLength={8} maxLength={32} required />
                <button className='Register_submit' onClick={navigateToLoginPage}>Se connecter</button>
                <Link to="/login">Se connecter</Link>
            </form>
        </section>
    )
}

export default Register