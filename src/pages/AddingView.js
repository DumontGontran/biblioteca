import React from 'react'
import { Header, Footer, Adding } from '@components'
import '@styles/pages/addingView.scss'

const AddingView = () => {
    return (
        <>
        <div className='AddingView'>
            <Header />
            <main>
                <Adding />
            </main>
        </div>
        <Footer />
    </>
    )
}

export default AddingView