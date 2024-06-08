import React from 'react'
import './topbar.scss'
// import PersonIcon from '@mui/icons-material/Person';
// import MailRoundedIcon from '@mui/icons-material/MailRounded';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className='topbar'>
            <div className={"wrapper " + (menuOpen && "active") }>
                <div className='left'>
                    <a href='#intro' className='logo'>Portolio</a>
                    <div className='itemContainer'>
                        <div className='icon'>N</div>
                        <span>+01030768420</span> 
                    </div>
                    <div className='itemContainer'>
                        <div className='icon'>M</div>
                        <span>mohamed.abdelnaser159@gmail.com</span>
                    </div>
                </div>
                <div className='right'>
                    <div className='hamburger' onClick={() => {setMenuOpen(!menuOpen)}}>
                        <span className='item1'></span>
                        <span className='item2'></span>
                        <span className='item3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
