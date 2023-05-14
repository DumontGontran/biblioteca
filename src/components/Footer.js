import React from 'react'
import '@styles/components/footer.scss'

const Footer = () => {
    return (
        <footer>
            <span>© {new Date().getFullYear()}, Dumont Gontran</span>
        </footer>
    )
}

export default Footer