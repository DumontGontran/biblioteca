import { Footer, Header, Wishlist, SearchBar } from '@components'
import React from 'react'

const WishlistView = () => {
    return (
        <>
            <div className='Home'>
                <Header />
                <main>
                    <SearchBar />
                    <Wishlist />
                </main>
            </div>
            <Footer />
        </>
    )
}

export default WishlistView