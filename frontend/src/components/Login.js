import React, { useState } from 'react'
import '@styles/components/login.scss'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <section className='Login'>
            <form className='Login_form'>
                <h1 className='Login_head_titre'>Connexion</h1>
                <label htmlFor='Login_email'>Email: *</label>
                <input type='text' id='Login_email' minLength={1} maxLength={32} required onChange={(event) => setEmail(event.target.value)} />
                <label htmlFor='Login_password'>Mot de passe: *</label>
                <input type='text' id='Login_password' placeholder="Motdepasse1*" minLength={8} maxLength={32} required onChange={(event) => setPassword(event.target.value)} />
                <button className='Login_submit' onClick={(event) => {
                    event.preventDefault()
                    dispatch({
                        type: 'Users/login',
                        email: email,
                        password: password
                    })
                }}>Se connecter</button>
                <Link to="/register">S'inscrire</Link>
            </form>
        </section>
    )
}

export default Login