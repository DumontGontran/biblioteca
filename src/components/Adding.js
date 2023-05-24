import React from 'react'
import '@styles/components/adding.scss'
import { FaHeart } from 'react-icons/fa'

const Adding = () => {
    return (
        <section className='Adding'>
            <form className='Adding_form'>
                <div className='Adding_head'>
                    <h1 className='Adding_head_titre'>Ajouter un ouvrage</h1>
                    <FaHeart className='Adding_head_favoris' />
                </div>
                <label htmlFor='Adding_couverture'>Couverture: *</label>
                <input type='file' id='Adding_couverture' required />
                <label htmlFor='Adding_titre'>Titre: *</label>
                <input type='text' id='Adding_titre' placeholder="Secret Défense d'aimer" minLength={1} maxLength={40} required />
                <label htmlFor='Adding_tome'>Tome N°: *</label>
                <input type='number' id='Adding_tome' placeholder='1' min={1} max={200} required />
                <label htmlFor='Adding_auteur'>Auteur: *</label>
                <input type='text' id='Adding_auteur' placeholder='Axelle Auclair' minLength={1} maxLength={40} required />
                <label htmlFor='Adding_edition'>Maison d'édition: *</label>
                <input type='text' id='Adding_edition' placeholder='Hugo Poche' minLength={1} maxLength={40} required />
                <label htmlFor='Adding_format'>Format: *</label>
                <select id='Adding_format' required>
                    <option value='Poche'>Poche</option>
                    <option value='Relié'>Relié</option>
                    <option value='Broché'>Broché</option>
                    <option value='Numérique'>Numérique</option>
                </select>
                <label htmlFor='Adding_limitee'>Édition limitée: *</label>
                <select id='Adding_limitee' required>
                    <option value='false'>Non</option>
                    <option value='true'>Oui</option>
                </select>
                <label htmlFor='Adding_etat'>État: *</label>
                <select id='Adding_etat' required>
                    <option value='Lu'>Lu</option>
                    <option value='À lire'>À lire</option>
                    <option value='À acheter'>À acheter</option>
                </select>
                <div className='Adding_note'>
                    <label htmlFor='Adding_note'>Note: *</label>
                    <select id='Adding_note' className='Adding_note-option' required>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                    <p>/5</p>
                </div>
                <button className='Adding_submit'>Ajouter</button>
            </form>
        </section>
    )
}

export default Adding