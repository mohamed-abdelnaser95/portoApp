import React from 'react'

export default function MenuLi({ liName, liHref, menuOpen, setMenuOpen }) {
    return (
        <>
            <li onClick ={() => setMenuOpen(!menuOpen)}><a href={"#"+ liName }>{ liHref }</a></li>
        </>
    )
}
