import React from 'react'
import { Header, Footer, Editing } from '@components'
import '@styles/pages/EditingView.scss'

const EditingView = () => {
    return (
        <>
        <div className='EditingView'>
            <Header />
            <main>
                <Editing />
            </main>
        </div>
        <Footer />
    </>
    )
}

export default EditingView