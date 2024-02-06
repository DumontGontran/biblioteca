import { Footer, Header, Library, SearchBar } from '@components'
import React from 'react'

const LibraryView = () => {
    return (
        <>
            <div className='Home'>
                <Header />
                <main>
                    <SearchBar />
                    <Library />
                </main>
            </div>
            <Footer />
        </>
    )
}

export default LibraryView