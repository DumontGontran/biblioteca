import { Header, Profil, Footer } from '@components'
import React from 'react'

const ProfilView = () => {
    return (
        <>
            <div className='Home'>
                <Header />
                <main>
                    <Profil />
                </main>
            </div>
            <Footer />
        </>
    )
}

export default ProfilView