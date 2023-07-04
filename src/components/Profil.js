import React, { useState } from 'react'
import '@styles/components/profil.scss'
import { useDispatch } from 'react-redux'

const Profil = () => {
    const dispatch = useDispatch()

    const [pseudo, setPseudo] = useState('')
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return (
        <section className='Profil'>
            <form className='Profil_form'>
                <h1 className='Profil_head_titre'>Profil</h1>
                <label htmlFor='Profil_pseudo'>Pseudo: *</label>
                <input type='text' id='Profil_pseudo' minLength={1} maxLength={32} required onChange={(event) => setPseudo(event.target.value)} />
                <label htmlFor='Profil_lastname'>Nom: *</label>
                <input type='text' id='Profil_lastname' minLength={1} maxLength={32} required onChange={(event) => setNom(event.target.value)} />
                <label htmlFor='Profil_firstname'>Prénom: *</label>
                <input type='text' id='Profil_firstname' minLength={1} maxLength={32} required onChange={(event) => setPrenom(event.target.value)} />
                <label htmlFor='Profil_email'>Email: *</label>
                <input type='email' id='Profil_email' minLength={1} maxLength={32} required onChange={(event) => setEmail(event.target.value)} />
                <label htmlFor='Profil_password'>Mot de passe: *</label>
                <input type='text' id='Profil_password' placeholder="Motdepasse1*" minLength={8} maxLength={32} required onChange={(event) => setPassword(event.target.value)} />
                <label htmlFor='Profil_password-confirm'>Confirmer mot de passe: *</label>
                <input type='text' id='Profil_password-confirm' placeholder="Motdepasse1*" minLength={8} maxLength={32} required onChange={(event) => setConfirmPassword(event.target.value)} />
                <button className='Profil_submit' onClick={(event) => {
                    event.preventDefault()
                    dispatch({
                        type: 'Users/profilEdit',
                        pseudo: pseudo,
                        nom: nom,
                        prenom: prenom,
                        email: email,
                        password: password,
                        confirmPassword: confirmPassword
                    })
                }}>Éditer</button>
                <button className='Profil_delete' onClick={(event) => {
                    event.preventDefault()
                    dispatch({ type: 'Users/profilDelete' })
                }}>Supprimer</button>
            </form>
        </section>
    )
}

export default Profil