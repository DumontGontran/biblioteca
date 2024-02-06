import React from 'react'
import '@styles/components/editing.scss'
import { FaHeart } from 'react-icons/fa'

const Editing = () => {
    return (
        <section className='Editing'>
            <form className='Editing_form'>
                <div className='Editing_head'>
                    <h1 className='Editing_head_titre'>Éditer un ouvrage</h1>
                    <FaHeart className='Editing_head_favoris' />
                </div>
                <label htmlFor='Editing_couverture'>Couverture: *</label>
                <input type='file' id='Editing_couverture' required />
                <label htmlFor='Editing_titre'>Titre: *</label>
                <input type='text' id='Editing_titre' placeholder="Secret Défense d'aimer" minLength={1} maxLength={40} required />
                <label htmlFor='Editing_tome'>Tome N°: *</label>
                <input type='number' id='Editing_tome' placeholder='1' min={1} max={200} required />
                <label htmlFor='Editing_auteur'>Auteur: *</label>
                <input type='text' id='Editing_auteur' placeholder='Axelle Auclair' minLength={1} maxLength={40} required />
                <label htmlFor='Editing_edition'>Maison d'édition: *</label>
                <input type='text' id='Editing_edition' placeholder='Hugo Poche' minLength={1} maxLength={40} required />
                <label htmlFor='Editing_format'>Format: *</label>
                <select id='Editing_format' required>
                    <option value='Poche'>Poche</option>
                    <option value='Relié'>Relié</option>
                    <option value='Broché'>Broché</option>
                    <option value='Numérique'>Numérique</option>
                </select>
                <label htmlFor='Editing_limitee'>Édition limitée: *</label>
                <select id='Editing_limitee' required>
                    <option value='false'>Non</option>
                    <option value='true'>Oui</option>
                </select>
                <label htmlFor='Editing_etat'>État: *</label>
                <select id='Editing_etat' required>
                    <option value='Lu'>Lu</option>
                    <option value='À lire'>À lire</option>
                    <option value='À acheter'>À acheter</option>
                </select>
                <div className='Adding_note'>
                    <label htmlFor='Editing_note'>Note: *</label>
                    <select id='Editing_note' className='Editing_note-option' required>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                    <p>/5</p>
                </div>
                <button className='Editing_submit'>Éditer</button>
                <button className='Editing_delete'>Supprimer</button>
            </form>
        </section>
    )
}

export default Editing