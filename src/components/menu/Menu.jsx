import React from 'react'
import './menu.scss'
import MenuLi from './MenuLi'

export default function Menu({ menuOpen, setMenuOpen }) {
    const arrList = [
        {liName: "intro", liHref : "Intro"},
        {liName: "portfolio", liHref : "Portfolio"},
        {liName: "work", liHref : "Work"},
        {liName: "testimonials", liHref : "Testimonials"},
        {liName: "contact", liHref : "Contact"}
    ]
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                {arrList.map(row => {
                    return <MenuLi liName = { row.liName } liHref= { row.liHref } menuOpen = {menuOpen} setMenuOpen = {setMenuOpen} />
                })}
            </ul>
        </div>
    )
}
