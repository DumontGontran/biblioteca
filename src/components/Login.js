import React from 'react'
import '@styles/components/login.scss'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const navigateToHomepage = () => {
        navigate('/')
    }

    return (
        <section className='Login'>
            <form className='Login_form'>
            <h1 className='Login_head_titre'>Connexion</h1>
                <label htmlFor='Login_pseudo'>Pseudo: *</label>
                <input type='text' id='Login_pseudo' minLength={1} maxLength={32} required />
                <label htmlFor='Login_password'>Mot de passe: *</label>
                <input type='text' id='Login_password' placeholder="Motdepasse1*" minLength={8} maxLength={32} required />
                <button className='Login_submit' onClick={navigateToHomepage}>Se connecter</button>
            </form>
        </section>
    )
}

export default Login