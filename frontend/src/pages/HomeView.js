import React from 'react'
import { Header, SearchBar, Categories, Footer } from '@components'
import '@styles/pages/home.scss'

const Home = () => {
    return (
        <>
            <div className='Home'>
                <Header />
                <main>
                    <SearchBar />
                    <Categories />
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Home