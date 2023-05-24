import React from 'react'
import '@styles/pages/errorView.scss'

const ErrorView = () => {
    return (
        <main className='ErrorView'>
            <h1 className='ErrorView_title'>ERREUR 404 !</h1>
            <span className='ErrorView_message'>Aucun contenu ici !</span>
        </main>
    )
}

export default ErrorView