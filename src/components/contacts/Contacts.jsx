import React, { useState } from 'react'
import './contacts.scss'

export default function Contacts() {
    const [sendMsg, setSendMsg] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        setSendMsg(true)
        setTimeout(() => {
            setSendMsg(false) 
        }, 3000);
    }
    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src="images/ecommerce-portals.png" alt="" />
            </div>
            <div className="right">
                <h2>Contact..</h2>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" name='' placeholder='Email' />
                    <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                    <button type='submit'>Submit</button>
                    <span style={{visibility: sendMsg ? 'visible' : 'hidden'}}>
                        Message Sent Successfully, I will reply ASAP
                    </span>
                </form>
            </div>
        </div>
    )
}
