import { Footer, Header, SearchBar, Favorites } from '@components'
import React from 'react'

const FavoritesView = () => {
    return (
        <>
            <div className='Home'>
                <Header />
                <main>
                    <SearchBar />
                    <Favorites />
                </main>
            </div>
            <Footer />
        </>
    )
}

export default FavoritesView