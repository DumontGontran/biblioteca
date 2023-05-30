import React from 'react'
import { Header, Footer, Login } from '@components'
import '@styles/pages/addingView.scss'

const LoginView = () => {
    return (
        <>
        <div className='AddingView'>
            <Header />
            <main>
                <Login />
            </main>
        </div>
        <Footer />
    </>
    )
}

export default LoginView