import React, { useState } from 'react'
import '@styles/components/register.scss'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Register = () => {
    const dispatch = useDispatch()

    const [pseudo, setPseudo] = useState('')
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return (
        <section className='Register'>
            <form className='Register_form'>
                <h1 className='Register_head_titre'>Inscription</h1>
                <label htmlFor='Register_pseudo'>Pseudo: *</label>
                <input type='text' id='Register_pseudo' minLength={1} maxLength={32} required onChange={(event) => setPseudo(event.target.value)} />
                <label htmlFor='Register_lastname'>Nom: *</label>
                <input type='text' id='Register_lastname' minLength={1} maxLength={32} required onChange={(event) => setNom(event.target.value)} />
                <label htmlFor='Register_firstname'>Prénom: *</label>
                <input type='text' id='Register_firstname' minLength={1} maxLength={32} required onChange={(event) => setPrenom(event.target.value)} />
                <label htmlFor='Register_email'>Email: *</label>
                <input type='email' id='Register_email' minLength={1} maxLength={32} required onChange={(event) => setEmail(event.target.value)} />
                <label htmlFor='Register_password'>Mot de passe: *</label>
                <input type='text' id='Register_password' placeholder="Motdepasse1*" minLength={8} maxLength={32} required onChange={(event) => setPassword(event.target.value)} />
                <label htmlFor='Register_password-confirm'>Confirmer mot de passe: *</label>
                <input type='text' id='Register_password-confirm' placeholder="Motdepasse1*" minLength={8} maxLength={32} required onChange={(event) => setConfirmPassword(event.target.value)} />
                <button className='Register_submit' onClick={(event) => {
                    event.preventDefault()
                    dispatch({
                        type: 'Users/register',
                            pseudo: pseudo,
                            nom: nom,
                            prenom: prenom,
                            email: email,
                            password: password,
                            confirmPassword: confirmPassword
                    })
                }}>S'inscrire</button>
                <Link to="/login">Se connecter</Link>
            </form>
        </section>
    )
}

export default Register